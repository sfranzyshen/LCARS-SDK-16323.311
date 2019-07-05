//Global Variables
var timer_clock = null;
var dragging = false;

var loadCheckTimer = setInterval(loadCheck, 10000);

function loadCheck(check){
    if(check != true){
        location.reload();             
    }else{
        clearInterval(loadCheckTimer);
        loadCheckTimer = null;            
    } 
}

var domlCalls = {
    init:function(){
        loadCheck(true);
        domlCalls.settings.values.init = true;
        StatusBar.hide();
        screen.lockOrientation('portrait');  
        document.addEventListener("pause", domlCalls.commands.onPause, false);
        document.addEventListener("resume", domlCalls.commands.onResume, false);
        window.volumecontrols.check({stream:'ringer', flag:'max', success:function(){domlCalls.settings.values.maxRinger}});
        window.volumecontrols.check({stream:'media', flag:'max', success:function(){domlCalls.settings.values.maxMedia}});
        window.missedcomm.calls({callback:'domlCalls.receivers.calls', timing:5000, flag:'enable'});
        window.missedcomm.sms({callback:'domlCalls.receivers.sms', timing:5000, flag:'enable'});

        $(ui_homeView).createObject({appendTo:'body', success:function(){
            $('#wpr_controlFrame').viewport('childScale', {width:1256, height:692});
            domlCalls.commands.initInterface();
        }});            
    },
    
    settings:{
        load:function(){
            window.resolveLocalFileSystemURL(cordova.file.applicationStorageDirectory + 'captainschairsettings.json', 
                function(fileEntry) { 
                    fileEntry.file(function(file){               
                        var reader = new FileReader();
                        reader.onloadend = function(evt) {
                            domlCalls.settings.values = JSON.parse(evt.target.result);
                            domlCalls.init();
                        };
                        reader.readAsText(file);                
                    }, 
                   function(error){ 
                        console.log(error + 'Loading Apps fileEntry');
                        window.installedapps.getApps({success:domlCalls.success.generateApps});
                    });        
                }, 
                function(error){
                    console.log(error + 'Loading Apps resolveLocal');
                    window.installedapps.getApps({success:domlCalls.success.generateApps});
                });            
        },
        
        save:function(){
            window.resolveLocalFileSystemURL(cordova.file.applicationStorageDirectory, function(dir) {
                dir.getFile("captainschairsettings.json", {create:true}, function(fileEntry) {
                    fileEntry.createWriter(function(writer){
                        writer.write(domlCalls.settings.values);                   
                    }, function(error){console.log('error'); }); 			
                });
            }, function(error){console.log('error top'); });              
        },
        //values - This object is saved to a json preference file.
        values:{init:false, maxRinger:7, maxMedia:15, installedApplications:null, recentApplications:[], soundEffects:true, version:1, voicemail:'000', sms:{}},
        colorArray:['primary1', 'primary2', 'primary3', 'primary4', 'primary5' , 'secondary1', 'secondary2', 'secondary3', 'secondary4', 'accent1', 'accent2'],
        dynamicLinking:null
    },
    
    success:{
        wifi:function(returnVal){
            if(returnVal.returnVal === 'enabled'){
                var fx = audioEnableService();   
                $('#btn_wifiToggle').objectSettings({state:'sysEnabled'});
            }else if(returnVal.returnVal === 'disabled'){
                var fx = audioDisableService();   
                $('#btn_wifiToggle').objectSettings({state:null});
                $('#level_wifi').objectSettings({level:0});
                setTimeout(function(){window.mobiledata.check({success:domlCalls.success.data});}, 5000);            
            }        
        },
        
        data:function(returnVal){
            if(returnVal.returnVal === 'enabled'){
              var fx = audioEnableService(); 
              $('#btn_toggleData').objectSettings({state:'sysEnabled'});
            }else if(returnVal.returnVal === 'disabled'){
              var fx = audioDisableService(); 
              $('#btn_toggleData').objectSettings({state:null}); 
            }             
        },
        
        bluetooth:function(returnVal){
            if(returnVal.returnVal === 'enabled'){
                var fx = audioEnableService();   
                $('#btn_toggleBlueTooth').objectSettings({state:'sysEnabled'});
            }else if(returnVal.returnVal === 'disabled'){
                var fx = audioDisableService();
                $('#btn_toggleBlueTooth').objectSettings({state:null});        
            }             
        },
        
        generateApps:function(returnVal){
            //Parse Return Val
            var appListArray = JSON.parse(returnVal.returnVal); 
            domlCalls.settings.values.installedApplications = [];
            
            //For each item in array
            for(var i = 0; i < appListArray.length; i++) {   
                var appInfo = appListArray[i];
                var appName = appInfo.name; 
                var appPackage = appInfo.package; 
                var appActivity = appInfo.activity;

                //Custom Maintained COlor
                var color = domlCalls.settings.colorArray;
                var letterLength = appName.length.toString()
                var lastChar = letterLength.substr(letterLength.length - 1);
                var randomColor = color[parseInt(lastChar)];

                //Build Object
                var object = {
                    'label':appName, 
                    'class':'appLaunch', 
                    'version':'pill', 
                    'appLaunch':{'activity':appActivity, 'package':appPackage}, 
                    'type':'button', 
                    'color':randomColor,
                } 
                domlCalls.settings.values.installedApplications.push(object)

            }

            //Sort Alphabetically 
            domlCalls.settings.values.installedApplications.sort(compare);

            //Checks for first generation or refresh generation 
            if(domlCalls.settings.values.init === false){
                domlCalls.settings.values.init = true;
                domlCalls.init();
            }else{ 
                $('#wpr_appList').children('.button').removeObject(function(){
                    $(domlCalls.settings.values.installedApplications).createObject({appendTo:'#wpr_appList'});
                    audioAccessDataSuccess();
                });
            }

            //Save the array of definitions to json file within apps data directory
            domlCalls.settings.save();
        },
        
        ringer:function(returnVal){
            if(returnVal.returnVal > 0){
                if(allObjects['btn_ringerSilent'].checked !== false || allObjects['btn_ringerVibrate'].checked !== false){
                    $('[name="ringerModes"]').objectSettings({checked:false});  
                    $('#btn_ringer').objectSettings({state:null});

                }
            }else{
                window.volumecontrols.check({stream:'ringer', flag:'mode', success:domlCalls.success.ringerMode});
            } 
            $('#level_ringer').objectSettings({level:Math.round((returnVal.returnVal/domlCalls.settings.values.maxRinger)*100)});
        },
        
        ringerMode:function(returnVal){
            if(returnVal.returnVal === 'silent' || returnVal.returnVal === 0){
                $('#btn_ringerSilent').objectSettings({checked:true});
                $('#btn_ringer').objectSettings({state:'darkRed2LightRed'});
                $('#level_ringer').objectSettings({level:0});
            }else if(returnVal.returnVal === 'vibrate' || returnVal.returnVal === 1){
                $('#btn_ringerVibrate').objectSettings({checked:true});
                $('#btn_ringer').objectSettings({state:'darkRed2LightRed'});
                $('#level_ringer').objectSettings({level:0});
            }
            
        },
        
        media:function(returnVal){
            if(returnVal.returnVal > 0){
                $('#btn_mediaMute').objectSettings({checked:false, noEvent:false});            
            }else{
                $('#btn_mediaMute').objectSettings({checked:true, noEvent:true});      
            }
            $('#level_media').objectSettings({level:Math.round((returnVal.returnVal/domlCalls.settings.values.maxMedia)*100)});
        },
        
        brightness:function(returnVal){
            if(allObjects['btn_autoBrightness'].checked !== false){
                $('#btn_autoBrightness').objectSettings({checked:false}); 
                $('#btn_brightness').objectSettings({state:null});
            }
            
            $('#level_brightness').objectSettings({level:Math.round((returnVal.returnVal/255)*100)});
        },
        
        autoBrightness:function(returnVal){
            if(returnVal.returnVal === 'enabled'){
                var fx = audioEnableService();  
                $('#btn_autoBrightness').objectSettings({checked:true});
                $('#btn_brightness').objectSettings({state:'darkRed2LightRed'});
            }else if(returnVal.returnVal === 'disabled'){
                $('#btn_brightness').objectSettings({state:null});
                var fx = audioDisableService();
                $('#btn_autoBrightness').objectSettings({checked:false});
            }                   
        },
        
        domods:function(returnVal){
            var list = returnVal.returnVal;
            var listLength = list.length;
            $('#wpr_domodList .button').removeObject({});
            $(list).each(function(){

                var coloring = LCARS.colorGen(domlCalls.settings.colorArray);
                var element = {type:'button', label:String(this), color:coloring, version:'pill', tap:domlCalls.commands.setDMD, appendTo:'#wpr_domodList'}
                $(element).createObject({});
            });              
        }
        
    },
    
    checkSuccess:{
        wifi:function(returnVal){
            if(returnVal.returnVal === 'enabled'){
                if(allObjects['btn_wifiToggle'].state != 'sysEnabled'){
                    $('#btn_wifiToggle').objectSettings({state:'sysEnabled'});
                }
            }else if(returnVal.returnVal === 'disabled'){
                if(allObjects['btn_wifiToggle'].state != null){
                    $('#btn_wifiToggle').objectSettings({state:null});
                    $('#level_wifi').objectSettings({level:0});
                }
            }            
        },
        
        data:function(returnVal){
            if(returnVal.returnVal === 'enabled'){
                if(allObjects['btn_toggleData'].state != 'sysEnabled'){
                    $('#btn_toggleData').objectSettings({state:'sysEnabled'});
                }
            }else if(returnVal.returnVal === 'disabled'){
                if(allObjects['btn_toggleData'].state != null){
                    $('#btn_toggleData').objectSettings({state:null});
                }  
            }      
        },
        
        bluetooth:function(returnVal){
            if(returnVal.returnVal === 'enabled'){
                if(allObjects['btn_toggleBlueTooth'].state != 'sysEnabled'){ 
                    $('#btn_toggleBlueTooth').objectSettings({state:'sysEnabled'});
                }

            }else if(returnVal.returnVal === 'disabled'){
                if(allObjects['btn_toggleBlueTooth'].state != null){
                    $('#btn_toggleBlueTooth').objectSettings({state:null});
                }         
            }            
        },
        
        autoBrightness:function(returnVal){
            if(returnVal.returnVal === 'enabled'){
                $('#btn_autoBrightness').objectSettings({checked:true});
                $('#btn_brightness').objectSettings({state:'darkRed2LightRed'});
            }else if(returnVal.returnVal === 'disabled'){
                $('#btn_brightness').objectSettings({state:null});
                $('#btn_autoBrightness').objectSettings({checked:false});
            }                    
        }
    },
    
    receivers:{
        wifiSignal:function(returnVal){
            var maxStrength = -50; 
            var minStrength = -120; 
            var percentage = Math.round(100 - Math.max(0, Math.min((returnVal - maxStrength) / (minStrength - maxStrength), 1) * 100));	
            $('#level_wifi').objectSettings({level:percentage});         
        },
        
        cellularSignal:function(returnVal){
            var maxStrength = -70; 
            var minStrength = -100; 
            var percentage = Math.round(100 - Math.max(0, Math.min((returnVal - maxStrength) / (minStrength - maxStrength), 1) * 100));
            $('#level_cellular').objectSettings({level:percentage});           
        },
        
        batteryLevel:function(info){
            if(info.isPlugged === true){
                $('#level_battery').objectSettings({level:info.level});
                if(allObjects['btn_battery'].state !== 'whiteFlash'){$('#btn_battery').objectSettings({state:'whiteFlash'});}
            }else{
                if(allObjects['btn_battery'].state === 'whiteFlash'){$('#btn_battery').objectSettings({state:null});}
                $('#level_battery').objectSettings({level:info.level});
            }          
        },
        
        calls:function(returnVal){      
            if(returnVal !== 0 && allObjects['btn_dialer'].state !== 'darkRed2LightRed'){
                $('#btn_dialer, #btn_cellularArray').objectSettings({state:'darkRed2LightRed'});  
            }else if(returnVal == 0 && allObjects['btn_dialer'].state === 'darkRed2LightRed'){
                $('#btn_dialer, #btn_cellularArray').objectSettings({state:null});  
            }    
        },
        
        sms:function(returnVal){
            if(returnVal !== 0 && allObjects['btn_sms'].state !== 'darkRed2LightRed'){
                $('#btn_sms, #btn_cellularArray').objectSettings({state:'darkRed2LightRed'});  
            }else if(returnVal == 0 && allObjects['btn_sms'].state === 'darkRed2LightRed'){
                $('#btn_sms, #btn_cellularArray').objectSettings({state:null});  
            }          
        }
    },
    
    commands:{
        
        initInterface:function(){
            var fx = audioStartup(); 

            setTimeout(domlCalls.commands.showInterfacePattern, 1000);
            $('.dialog').showObject({timing:2500, success:function(){

                $('#wpr_homeView > .row, #wpr_homeView > .content').showObject({timing:65});    

            }});    
        },
        
        swapListViews:function(){
            var elemID = $(this).attr('id');
            $('[name="sectionsTabs"].noEvent').objectSettings({noEvent:false});
            $(this).objectSettings({noEvent:true});       
            $('#wpr_listControls > :not(.hidden)').objectSettings({hidden:true});
            $(''+allObjects[elemID].linkTo+'').objectSettings({hidden:false});
            if(allObjects['btn_cmd'].state !== null){
                $('#btn_cmd').objectSettings({state:null});
                $('#wpr_listControls > .secondaryInteraction').objectSettings({state:null});
            }
        },
        
        onResume:function(){
            window.missedcomm.check({callback:'domlCalls.receivers.calls', flag:'calls'});
            window.missedcomm.check({callback:'domlCalls.receivers.sms', flag:'sms'});
            window.volumecontrols.check({stream:'ringer', flag:'mode', success:domlCalls.success.ringerMode});
            window.volumecontrols.check({stream:'ringer', success:domlCalls.success.ringer});
            window.volumecontrols.check({stream:'media', success:domlCalls.success.media});
            window.mobiledata.check({success:domlCalls.checkSuccess.data});
            window.bluetoothcontrols.check({success:domlCalls.checkSuccess.bluetooth});   
            window.brightnesscontrols.check({flag:'value', success:domlCalls.success.brightness});
            window.brightnesscontrols.check({flag:'mode', success:domlCalls.checkSuccess.autoBrightness});    
            window.wificontrols.check({callback:'domlCalls.receivers.wifiSignal', success:domlCalls.checkSuccess.wifi});
            domlCalls.commands.clock.enable();
        },
        
        onPause:function(){
            domlCalls.commands.clock.disable();    
        },
        
        reloadView:function(){
            var endReady = domlCalls.commands.endServices();
            location.reload();    
        },
        
        setDMD:function(){
            var elemID = $(this).attr('id');
            var dmd = allObjects[elemID].label;
            var endReady = domlCalls.commands.endServices();
            window.doml.setDMD({name:dmd});   
        },
        
        endServices:function(){
            window.wificontrols.stop({});
            window.missedcomm.sms({flag:'disable'});
            window.missedcomm.calls({flag:'disable'});
            window.cellsignal.disable({});
            //Cordova Plugin does not have a call to stop listener.  This kills it directly.
            cordova.exec(null, null, "Battery", "stop", []);    
            return true;                       
        },
            
        launchApp:function(){
            var elemID = $(this).attr('id');
            var fx = audioLaunchApp();
            window.launch.app({package:allObjects[elemID].appLaunch.package, activity:allObjects[elemID].appLaunch.activity});            
        },
        
        clock:{
            timer:function(){$('#title_time').text(moment().format('HH:mm:ss'));},
            disable:function(){if(timer_clock !== null){clearInterval(timer_clock); timer_clock = null;} },
            enable:function(){if(timer_clock === null){timer_clock = setInterval(domlCalls.commands.clock.timer, 1000);}}
        },
        
        addToRecent:function(){            
            var fx = audioAccessDataSuccess();
            var elemID = $(this).attr('id');
            var elemDef = allObjects[elemID];
            var newDef = {}
            if(domlCalls.settings.values.recentApplications === null){
                domlCalls.settings.values.recentApplications = []    
            }

            for (var prop in elemDef) {
                if(prop !== 'id' && prop !== 'state'){
                    newDef[prop] = elemDef[prop];    
                }
            }    

            $(newDef).createObject({appendTo:'#wpr_recent'});
            domlCalls.settings.values.recentApplications.push(newDef);
            domlCalls.settings.save();
        },
        
        secondaryInteraction:function(){
            var elemID = $(this).attr('id');
            var fx = audioCommandToggle(); 
            if(allObjects[elemID].state !== 'active'){
                var containerID = $('#wpr_listControls > .column:not(.hidden)').attr('id');
                $('#'+elemID).objectSettings({state:'active'});
                $('#'+containerID).objectSettings({state:'secondaryInteraction'});
            }else{
                var containerID = $('#wpr_listControls > .secondaryInteraction').attr('id');
                $('#'+elemID).objectSettings({state:null});
                $('#'+containerID).objectSettings({state:null});             
            }
                
        },
        
        removeFromRecent:function(){
            var fx = audioAccessDataSuccess();
            domlCalls.settings.values.recentApplications.length = 0;    
            $(this).removeObject();
            $('#wpr_recent .button').each(function(){
                var elemID = $(this).attr('id');
                var elemDef = allObjects[elemID];
                var newDef = {}
                
                for (var prop in elemDef) {
                    if(prop !== 'id' && prop !== 'state'){
                        newDef[prop] = elemDef[prop];    
                    }
                }
                domlCalls.settings.values.recentApplications.push(newDef);
            });

            domlCalls.settings.save();            
        },
        
        moveRecentUp:function(){
            var elemPrev = $(this).prev();
            
            $(this).insertBefore(elemPrev);
            
            var fx = audioWobble(); 
            domlCalls.settings.values.recentApplications.length = 0;    
            $('#wpr_recent .button').each(function(){
                var elemID = $(this).attr('id');
                var elemDef = allObjects[elemID];
                var newDef = {}
                
                for (var prop in elemDef) {
                    if(prop !== 'id' && prop !== 'state'){
                        newDef[prop] = elemDef[prop];    
                    }
                }
                domlCalls.settings.values.recentApplications.push(newDef);
            });

            domlCalls.settings.save();        
        },
        
        moveRecentDown:function(){
            var elemPrev = $(this).next();
            
            $(this).insertAfter(elemPrev);
            
            var fx = audioWobble(); 
            domlCalls.settings.values.recentApplications.length = 0;    
            $('#wpr_recent .button').each(function(){
                var elemID = $(this).attr('id');
                var elemDef = allObjects[elemID];
                var newDef = {}
                
                for (var prop in elemDef) {
                    if(prop !== 'id' && prop !== 'state'){
                        newDef[prop] = elemDef[prop];    
                    }
                }
                domlCalls.settings.values.recentApplications.push(newDef);
            });

            domlCalls.settings.save();         
        },
        
        toggleSoundEffects:function(){
            if(domlCalls.settings.values.soundEffects === false){
                domlCalls.settings.values.soundEffects = true;
                var fx = audioDisableService();
                $('#btn_toggleSoundEffects').objectSettings({state:null});
                $('#btn_media').objectSettings({state:null});
           }else{
                var fx = audioEnableService();
                domlCalls.settings.values.soundEffects = false;
                $('#btn_toggleSoundEffects').objectSettings({state:'sysEnabled'});
                $('#btn_media').objectSettings({state:'darkRed2LightRed'});
            }
            domlCalls.settings.save();                     
        }, 
        
        checkSoundEffects:function(){
            if(domlCalls.settings.values.soundEffects === false){
                $('#btn_toggleSoundEffects').objectSettings({state:'sysEnabled'});
                $('#btn_media').objectSettings({state:'darkRed2LightRed'});
            }else{
                $('#btn_toggleSoundEffects').objectSettings({state:null});
                $('#btn_media').objectSettings({state:null});
            }
        },
        
        voicemail:{
            change:function(){
                $('.dialog > .content:not(.hidden)').objectSettings({hidden:true});
                $('#wpr_setVoicemail').objectSettings({hidden:false});
                $('#wpr_setVoicemail input').objectSettings({text:domlCalls.settings.values.voicemail});
                $('[name="sectionsTabs"').objectSettings({state:'disabled'});
                var fx = audioViewSwitch();
            },
            
            save:function(){
                var newSequence = $('#wpr_setVoicemail input').val();
                $('.dialog > .content:not(.hidden)').objectSettings({hidden:true});
                $('.mainContent').objectSettings({hidden:false});
                domlCalls.settings.values.voicemail = newSequence;
                $('[name="sectionsTabs"').objectSettings({state:null});
                domlCalls.settings.save();
                $('#btn_voicemail').objectSettings({href:'tel:'+newSequence});
                var fx = audioAccessDataSuccess();
            },
            
            cancel:function(){
                $('.dialog > .content:not(.hidden)').objectSettings({hidden:true});
                $('.mainContent').objectSettings({hidden:false});
                $('[name="sectionsTabs"').objectSettings({state:null});
                var fx = audioDeny();
            }
        },
                
        viewDomods:function(){
                var elemID = $(this).attr('id');
                $('[name="sectionsTabs"]').objectSettings({checked:false, noEvent:false});
                $('#wpr_listControls > :not(.hidden)').objectSettings({hidden:true});
                $('#wpr_domodList').objectSettings({hidden:false});
                var fx = audioViewSwitch();
        },
        
        dynamicLinking:{
            init:function(){
                domlCalls.settings.dynamicLinking = $(this).attr('id');
                $('[name="sectionsTabs"').objectSettings({state:'disabled'});
                $('#wpr_listControls > :not(.hidden)').objectSettings({hidden:true});
                $('#wpr_appList').objectSettings({hidden:false, class:'triInteraction'});
                $('#wpr_listControls > *:not(#wpr_appList)').objectSettings({noEvent:true});
                var fx = audioViewSwitch();
           },
            
            set:function(){
                var elemID = $(this).attr('id');
                $('[name="sectionsTabs"').objectSettings({state:null});
                $('#wpr_listControls > :not(.hidden)').objectSettings({hidden:true});
                $('#wpr_comm').objectSettings({hidden:false});
                $('#wpr_appList').objectSettings({hidden:true, class:['triInteraction']});
                
                
                $('#'+domlCalls.settings.dynamicLinking).objectSettings({appLaunch:allObjects[elemID].appLaunch})
                domlCalls.settings.values.sms = allObjects[elemID].appLaunch;
                domlCalls.settings.dynamicLinking = null;
                domlCalls.settings.save();
                var fx = audioAccessDataSuccess();
                setTimeout(function(){
                   $('#wpr_listControls > *').objectSettings({noEvent:false}); 
                });
            }
        },
        
        lockDevice:function(){
            if(allObjects['wpr_homeView'].state === 'isLocked'){
                $('#wpr_homeView').objectSettings({state:null});
                $('#btn_lockDevice').objectSettings({state:null});
                var fx = audioStartup(); 

            }else{
                $('#wpr_homeView').objectSettings({state:'isLocked'});
                $('#btn_lockDevice').objectSettings({state:'darkRed2LightRed'});
                var fx = audioLockTerminal(); 
            }
        },
        
        showInterfacePattern:function(){
            var headerBars = $('#wpr_controlFrame > .header > .row > *');
            var headerColumn = $('#wpr_controlFrame > .header > .button, #wpr_controlFrame > .header > .elbow');
            var mainBars = $('#wpr_controlFrame > .main .row *');
            var mainColumn = $('#wpr_controlFrame > .main > .elbow, #wpr_controlFrame > .main > .column:not(#wpr_levelMeters) > *');
            sequenceHeaderPattern = []
            sequenceFooterPattern = []

            $(headerColumn).each(function(){
                sequenceHeaderPattern.push(this);
            });       

            $(headerBars).each(function(){
                sequenceHeaderPattern.push(this);
            });

            sequenceHeaderPattern.reverse()

            $(mainBars).each(function(){
                sequenceFooterPattern.push(this);
            });

            sequenceFooterPattern.reverse()

            $(mainColumn).each(function(){
                sequenceFooterPattern.push(this); 
            }); 

            $(sequenceHeaderPattern).showObjectSequence({});
            $(sequenceFooterPattern).showObjectSequence({success:function(){
                $('.header > .title, .header > .bracket, #wpr_headerCommandRow, #wpr_levelMeters').showObject({});
            }});
            
        }
    }
}


if(window.cordova){
    document.addEventListener("deviceready", domlCalls.settings.load, false);
}else{
    $(document).ready(function(){
        loadCheck(true)
        $(ui_homeView).createObject({appendTo:'body', success:function(){
                $('#wpr_controlFrame').viewport('childScale', {width:1256, height:692});
                 setTimeout(domlCalls.commands.initInterface, 500);
           }
        });
    });
}

$(document).on('tap', '#wpr_appList:not(.secondaryInteraction):not(.triInteraction) .appLaunch, #wpr_recent:not(.secondaryInteraction) .appLaunch, #wpr_comm .appLaunch', domlCalls.commands.launchApp);

$(document).on('tap', '#wpr_appList.triInteraction .appLaunch', domlCalls.commands.dynamicLinking.set);

$(document).on('swipeLeft', '#wpr_appList.secondaryInteraction .button', domlCalls.commands.addToRecent);
$(document).on('swipeRight', '#wpr_recent.secondaryInteraction .button', domlCalls.commands.removeFromRecent);

$(document).on('swipeUp', '#wpr_recent.secondaryInteraction .button', domlCalls.commands.moveRecentUp);
$(document).on('swipeDown', '#wpr_recent.secondaryInteraction .button', domlCalls.commands.moveRecentDown);
