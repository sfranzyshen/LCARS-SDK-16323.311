var nemesisBracket = {type:'wrapper', class:'sdk bracket typeA', children:[
        {type:'wrapper', class:'content', children:[
            {type:'title', text:''+moment().format('HH:mm:ss')+'', id:'title_time', arrive:domlCalls.commands.clock.enable}
        ]},
        {type:'elbow', version:'topLeft', size:'small', class:'backet_typeA_elbow1', color:'accent3', children:[{type:'bar'}], noEvent:true},	
        {type:'elbow', version:'topRight', size:'small', class:'backet_typeA_elbow2', color:'accent3', children:[{type:'bar'}], noEvent:true},	
        {type:'elbow', version:'bottomLeft', size:'small', class:'backet_typeA_elbow3', color:'accent3', children:[{type:'bar'}], noEvent:true},	
        {type:'elbow', version:'bottomRight', size:'small', class:'backet_typeA_elbow4', color:'accent3', children:[{type:'bar'}], noEvent:true},        
        {type:'wrapper', class:'wrapper_leftColumn1', flex:'v', children:[
            {type:'bar', class:'backet_typeA_leftColumn1_bar1', color:'primary5'},
            {type:'bar', class:'backet_typeA_leftColumn1_bar2', color:'secondary4', children:[{type:'bar', color:'white'}]},
            {type:'bar', class:'backet_typeA_leftColumn1_bar3', color:'primary5'}                     
        ]},
        {type:'wrapper', class:'wrapper_leftColumn2', flex:'v', children:[
            {type:'bar', class:'backet_typeA_leftColumn2_bar1', color:'primary3'},
            {type:'bar', class:'backet_typeA_leftColumn2_bar1', color:'secondary3'},
            {type:'bar', class:'backet_typeA_leftColumn2_bar3', color:'primary3'}                     
        ]},
        {type:'wrapper', class:'wrapper_leftColumn3', flex:'v', children:[
            {type:'bar', class:'backet_typeA_leftColumn3_bar1', color:'primary5'},
            {type:'bar', class:'backet_typeA_leftColumn3_bar2', color:'secondary4', children:[{type:'bar', color:'white'}]},
            {type:'bar', class:'backet_typeA_leftColumn3_bar3', color:'primary5'}                     
        ]},
        {type:'wrapper', class:'wrapper_leftColumn4', flex:'v', children:[
            {type:'bar', class:'backet_typeA_leftColumn4_bar1', color:'primary3'},
            {type:'bar', class:'backet_typeA_leftColumn4_bar2', color:'secondary3'},
            {type:'bar', class:'backet_typeA_leftColumn4_bar3', color:'primary3'}                     
        ]}       
    ]
}  



var ui_homeView = {type:'wrapper', id:'wpr_homeView', flex:'v', class:'column', arrive:function(){$('#wpr_homeView').viewport('zoom', {width:360, height:640});}, children:[
    //Header Bars
    {type:'wrapper', class:'row', flex:'h', hidden:true, children:[
        {type:'bar', size:'half', color:'accent3'},
        {type:'bar', size:'half', color:'accent3', flexC:'h'}
    ]},
    
    //Top Dialog
    {type:'dialog', fade:true, template:
        {type:'wrapper', fade:true, class:'sdk dialog typeT', flexC:'v', children:[
                {type:'wrapper', class:'header row', flex:'h', children:[
                    {type:'cap', size:'tiny', version:'left', color:'primary1'}, 
                    {type:'bar', flexC:'h', color:'primary5'}, 
                    {type:'cap', size:'tiny', version:'right', color:'primary1'}
                ]},
                {type:'wrapper', class:'footer row', flex:'h', children:[
                    {type:'cap', size:'tiny', version:'left', color:'primary1'}, 
                    {type:'bar', flexC:'h', color:'primary5'},
                    {type:'cap', size:'tiny', version:'right', color:'primary1'}
                ]},
            
                {type:'wrapper', id:'wpr_setVoicemail', version:'content',  hidden:true, children:[
                    {type:'title', size:'half', text:'Input VM Sequence'},
                    {type:'textInput', value:domlCalls.settings.values.voicemail},
                    {type:'wrapper', version:'row', flex:'h', children:[
                        {type:'button', label:'save', flexC:'h', version:'pill', color:'primary3', tap:domlCalls.commands.voicemail.save},
                        {type:'button', label:'Cancel', flexC:'h', version:'pill', color:'secondary1', tap:domlCalls.commands.voicemail.cancel}
                    ]},
                ]},
                {type:'wrapper', version:'content', class:'mainContent', children:[
                    {type:'wrapper', version:'column', class:'childScale scaler', flex:'v', id:'wpr_controlFrame', arrive:function(){$('#wpr_controlFrame').viewport('childScale', {width:1256, height:692});}, children:[
                        {type:'wrapper', version:'header', children:[
                            {type:'button', label:'LCARS', color:'secondary2', hidden:true},
                            {type:'title', text:'system analysis 52684-5', hidden:true},
                            {type:'wrapper', id:'wpr_headerCommandRow', flex:'h', hidden:true, children:[
                                {type:'button', version:'pill', flexC:'h', color:'secondary3', label:'25-6485'},
                                {type:'button', version:'pill', flexC:'h', color:'secondary1', label:'50-4768'},
                                {type:'button', version:'pill', flexC:'h', color:'secondary4', label:'32-9824'}
                            ]},
                            {type:'bracket', template:nemesisBracket, hidden:true},
                            {type:'wrapper', version:'row', flex:'h', children:[
                                {type:'bar', color:'accent3', hidden:true},
                                {type:'bar', color:'primary5', hidden:true},
                                {type:'bar', color:'accent3', hidden:true},
                                {type:'bar', color:'primary4', flexC:'h', hidden:true},
                                {type:'bar', color:'primary2', hidden:true},
                                {type:'bar', color:'secondary3', hidden:true},
                                {type:'bar', color:'accent3', hidden:true}
                            ]},
                            {type:'elbow', version:'bottomLeft', color:'primary4', label:'Metrology', hidden:true}
                        ]},
                        {type:'wrapper', version:'main', flexC:'v', children:[
                            {type:'wrapper', id:'wpr_levelMeters', hidden:true, version:'column', children:[
                                {type:'levelBar', id:'level_battery', level:0, labelLink:'label', label:'0', color:'primary5', template:sdkAddonTemplates.levelBar.typeA, arrive:function(){window.addEventListener("batterystatus", domlCalls.receivers.batteryLevel, false);}},
                                {type:'levelBar', id:'level_wifi', level:0, labelLink:'label', label:'0', color:'primary4', template:sdkAddonTemplates.levelBar.typeA },
                                {type:'levelBar', id:'level_cellular', level:0, labelLink:'label', label:'0', color:'primary3', template:sdkAddonTemplates.levelBar.typeA, arrive:function(){window.cellsignal.enable({callback:'domlCalls.receivers.cellularSignal'});}},
                                {type:'levelBar', id:'level_media', level:0, labelLink:'label', label:'0', color:'primary2', template:sdkAddonTemplates.levelBar.typeA },
                                {type:'levelBar', id:'level_ringer', level:0, labelLink:'label', label:'0', color:'primary1', template:sdkAddonTemplates.levelBar.typeA, arrive:function(){window.volumecontrols.check({stream:'ringer', success:domlCalls.success.ringer})}},
                                {type:'levelBar', id:'level_brightness', level:0, labelLink:'label', label:'0', color:'secondary2', template:sdkAddonTemplates.levelBar.typeA }
                            ]},
                            
                            
                            
                            {type:'wrapper', version:'row', flex:'h', children:[
                                {type:'bar', color:'accent3', hidden:true},
                                {type:'bar', color:'accent2', hidden:true, size:'half'},
                                {type:'bar', color:'accent3', hidden:true},
                                {type:'bar', color:'primary5', hidden:true, flexC:'h'},
                                {type:'bar', color:'primary2', hidden:true},
                                {type:'bar', color:'secondary3', hidden:true},
                                {type:'bar', color:'accent3', hidden:true}
                            ]},
                            {type:'elbow', version:'topLeft', color:'primary5', hidden:true}  ,

                            {type:'wrapper', version:'column', children:[
                                {type:'button', color:'primary4', hidden:true, label:'LI-ION Core', id:'btn_battery'},
                                {type:'button', color:'primary3', hidden:true, label:'WLAN'},
                                {type:'button', color:'primary2', hidden:true, label:'cellular array', id:'btn_cellularArray'},
                                {type:'button', color:'primary1', hidden:true, label:'media', id:'btn_media'},
                                {type:'button', color:'primary2', hidden:true, label:'ringer', id:'btn_ringer'},
                                {type:'button', color:'primary4', hidden:true, label:'brightness', id:'btn_brightness'}   
                            ]}
                        ]}                        
                    ]}
                ]}
            ]
        }
    },
    
    //Main Wrapper
    {type:'wrapper', class:'content row', flex:'h', hidden:true, id:'wpr_columns', children:[
        
        //Left Tabs
        {type:'wrapper', class:'column', children:[
            {type:'radioButton', name:'sectionsTabs', template:[{type:'button', version:'tabLeft'}], adoViewSwitch:true, color:'secondary3', label:'SSD', linkTo:'#wpr_appList', tap:domlCalls.commands.swapListViews, checked:true, noEvent:true,},
            {type:'radioButton', name:'sectionsTabs', template:[{type:'button', version:'tabLeft'}], adoViewSwitch:true, color:'primary3', label:'RCNT', linkTo:'#wpr_recent', tap:domlCalls.commands.swapListViews},
            {type:'radioButton', name:'sectionsTabs', template:[{type:'button', version:'tabLeft'}], adoViewSwitch:true, color:'secondary2', label:'COMM', linkTo:'#wpr_comm', tap:domlCalls.commands.swapListViews},
            {type:'radioButton', name:'sectionsTabs', template:[{type:'button', version:'tabLeft'}], adoViewSwitch:true, color:'accent2', label:'SYS', linkTo:'#wpr_system', tap:domlCalls.commands.swapListViews}
        ]},
        
        
        //Center Column
        {type:'wrapper', id:'wpr_listControls', flex:'v', flexC:'h', children:[
            
            //App List
            {type:'wrapper', id:'wpr_appList', flexC:'v', class:'column noScrollBar', arrive:function(){$(domlCalls.settings.values.installedApplications).createObject({appendTo:'#wpr_appList'});}},
            
            //System Config
            {type:'wrapper', id:'wpr_system', flexC:'v', class:'column noScrollBar', sectionTitle:'engineering', sectionSubTitle:'Level 7 Access', hidden:true, children:[
                {type:'button', label:'Direct Access', color:'primary2', version:'pill', tap:domlCalls.commands.launchApp, appLaunch:{activity:'.Settings', package:'com.android.settings'}},
                {type:'button', label:'Restart LCARS', color:'secondary3', version:'pill', tap:domlCalls.commands.reloadView},
                {type:'button', label:'DOMods', color:'secondary2', version:'pill', tap:domlCalls.commands.viewDomods, adoAccessDataSuccess:true, longTap:function(){window.doml.getDMD({success:domlCalls.success.domods});} },
                {type:'button', label:'Sync Subsys', color:'primary4', version:'pill', adoBtnPress:true, tap:function(){var fx = audioAccessData(); setTimeout(function(){window.installedapps.getApps({success:domlCalls.success.generateApps});}, 500);}}
            ]},
            
            //Ringer Controls
            {type:'wrapper', id:'wpr_rado', flexC:'v', class:'column noScrollBar', hidden:true, children:[
                {type:'button', label:'Increase', color:'primary1', version:'pill', adoBtnPress:true, tap:function(){window.volumecontrols.up({stream:'ringer', success:domlCalls.success.ringer});}},
                {type:'button', label:'Decrease', color:'secondary1', version:'pill', adoBtnPress:true, tap:function(){window.volumecontrols.down({stream:'ringer', success:domlCalls.success.ringer});}},
                {type:'radioButton', name:'ringerModes', id:'btn_ringerVibrate', template:[{type:'button', version:'pill'}], label:'Vibrate', color:'primary3', version:'pill', adoBtnPress:true, tap:function(){window.volumecontrols.vibrate({success:domlCalls.success.ringerMode});}},
                {type:'radioButton', name:'ringerModes', id:'btn_ringerSilent', template:[{type:'button', version:'pill'}], label:'Silent', color:'secondary3', adoBtnPress:true, tap:function(){window.volumecontrols.silent({success:domlCalls.success.ringerMode});}, arrive:function(){window.volumecontrols.check({stream:'ringer', success:domlCalls.success.ringerMode});}}                 
            ]},
            
            //Media Controls
            {type:'wrapper', id:'wpr_mado', flexC:'v', class:'column noScrollBar', hidden:true, children:[
                {type:'button', label:'Increase', adoBtnPress:true, color:'secondary1', version:'pill', tap:function(){window.volumecontrols.up({stream:'media', success:domlCalls.success.media});}},
                {type:'button', label:'Decrease', adoBtnPress:true, color:'accent1', version:'pill', tap:function(){window.volumecontrols.down({stream:'media', success:domlCalls.success.media});}},
                {type:'radioButton', id:'btn_mediaMute', adoBtnPress:true, template:[{type:'button', version:'pill'}], label:'mute', color:'secondary4', tap:function(){window.volumecontrols.percentage({stream:'media', value:0, success:domlCalls.success.media});}, arrive:function(){window.volumecontrols.check({stream:'media', success:domlCalls.success.media});}},
                {type:'button', label:'Disable Effects', adoBtnPress:true, color:'secondary2', version:'pill', tap:domlCalls.commands.toggleSoundEffects, id:'btn_toggleSoundEffects', arrive:domlCalls.commands.checkSoundEffects}               
            ]},
            
            //Recent Apps
            {type:'wrapper', id:'wpr_recent', flexC:'v', class:'column noScrollBar', hidden:true, arrive:function(){$(domlCalls.settings.values.recentApplications).createObject({appendTo:'#wpr_recent'});}},
            
            //DOMODS
            {type:'wrapper', id:'wpr_domodList', flexC:'v', version:'column noScrollBar', hidden:true, children:[{type:'button', color:'primary1', label:'label'}], arrive:function(){window.doml.getDMD({success:domlCalls.success.domods});}},
            
            //Connections
            {type:'wrapper', id:'wpr_conn', flexC:'v', class:'column noScrollBar', hidden:true, children:[
                {type:'button', id:'btn_wifiToggle', label:'Wifi', color:'secondary2', version:'pill', adoBtnPress:true, arrive:function(){window.wificontrols.check({callback:'domlCalls.receivers.wifiSignal', success:domlCalls.checkSuccess.wifi});},
                    tap:function(){
                        window.wificontrols.toggle({callback:'domlCalls.receivers.wifiSignal', success:domlCalls.success.wifi});
                    }, 
                    longTap:function(){
                        var fx = audioLaunchApp();
                        window.launch.setting({setting:'wifi'}); 
                    }
                },
                {type:'button', label:'Data', id:'btn_toggleData', color:'primary1', version:'pill', adoBtnPress:true, arrive:function(){window.mobiledata.check({success:domlCalls.checkSuccess.data});},
                    tap:function(){
                       window.mobiledata.toggle({success:domlCalls.success.data});
                    },
                    longTap:function(){
                        var fx = audioLaunchApp();
                        window.launch.setting({setting:'dataroaming'});   
                    }                
                },
                {type:'button', id:'btn_toggleBlueTooth', label:'Bluetooth', color:'accent1', version:'pill', adoBtnPress:true, arrive:function(){window.bluetoothcontrols.check({success:domlCalls.checkSuccess.bluetooth});},
                    tap:function(){
                        window.bluetoothcontrols.toggle({success:domlCalls.success.bluetooth});
                    },
                    longTap:function(){
                        var fx = audioLaunchApp();
                        window.launch.setting({setting:'bluetooth'});   
                    }
                },
                {type:'button', label:'Geoposition', color:'secondary4', version:'pill',
                    tap:function(){
                        var fx = audioLaunchApp();
                        window.launch.setting({setting:'locationsource'});   
                    },
                }               
            ]},
            
    
            //Communications
            {type:'wrapper', id:'wpr_comm', flexC:'v', class:'column noScrollBar', hidden:true, children:[
                {type:'button', href:'tel:', label:'Dialer', id:'btn_dialer', color:'secondary4', version:'pill', arrive:function(){window.missedcomm.check({callback:'domlCalls.receivers.calls', flag:'calls'});}},
                {type:'button', href:'tel:000', label:'Voicemail', color:'accent2', version:'pill', id:"btn_voicemail", longTap:domlCalls.commands.voicemail.change, arrive:function(){$('#btn_voicemail').objectSettings({href:'tel:'+domlCalls.settings.values.voicemail});}},
                {type:'button', label:'SMS', color:'primary4', id:'btn_sms', class:'appLaunch', arrive:function(){$(this).objectSettings({appLaunch:domlCalls.settings.values.sms}); window.missedcomm.check({callback:'domlCalls.receivers.sms', flag:'sms'});}, longTap:domlCalls.commands.dynamicLinking.init, version:'pill'},
                {type:'button', label:'Geoposition', color:'secondary1', version:'pill'}             
            ]},
            
    
            //Screen Brightness
            {type:'wrapper', id:'wpr_sbc', flexC:'v', class:'column noScrollBar', hidden:true, children:[
                {type:'button', adoBtnPress:true, label:'Increase', color:'primary3', version:'pill', tap:function(){window.brightnesscontrols.up({step:26, success:domlCalls.success.brightness});}},
                {type:'button', adoBtnPress:true, label:'Decrease', color:'primary4', version:'pill', tap:function(){window.brightnesscontrols.down({step:26, success:domlCalls.success.brightness});}, arrive:function(){window.brightnesscontrols.check({flag:'value', success:domlCalls.success.brightness});}},
                {type:'checkboxButton', template:[{type:'button', version:'pill'}], adoBtnPress:true, id:'btn_autoBrightness', label:'Auto', color:'secondary4', version:'pill', arrive:function(){window.brightnesscontrols.check({flag:'mode', success:domlCalls.checkSuccess.autoBrightness});}, tap:function(){window.brightnesscontrols.toggle({success:domlCalls.success.autoBrightness});}},
                {type:'button', label:'Direct Access', color:'primary1', version:'pill',
                    tap:function(){
                        var fx = audioLaunchApp();
                        window.launch.setting({setting:'display'}); 
                    }
                }            
            ]}
            
        ]},
        
        //Right Tab Column
        {type:'wrapper', class:'column', children:[
            {type:'radioButton', name:'sectionsTabs', template:[{type:'button', version:'tabRight'}], adoViewSwitch:true, color:'primary4', label:'CONN', linkTo:'#wpr_conn', tap:domlCalls.commands.swapListViews},
            {type:'radioButton', name:'sectionsTabs', template:[{type:'button', version:'tabRight'}], adoViewSwitch:true, color:'accent1', label:'RVOL', linkTo:'#wpr_rado', tap:domlCalls.commands.swapListViews},
            {type:'radioButton', name:'sectionsTabs', template:[{type:'button', version:'tabRight'}], adoViewSwitch:true, color:'secondary4', label:'MVOL', linkTo:'#wpr_mado', tap:domlCalls.commands.swapListViews},
            {type:'radioButton', name:'sectionsTabs', template:[{type:'button', version:'tabRight'}], adoViewSwitch:true, color:'primary5', label:'SBC', linkTo:'#wpr_sbc', tap:domlCalls.commands.swapListViews}        
        ]},
    
    ]},
    
    //Spacer Bar
    {type:'wrapper', class:'row', hidden:true, flex:'h', children:[
        {type:'bar', size:'half', color:'accent3', flexC:'h'}
    ]},
    
    //Footer Controls
    {type:'wrapper', class:'row', hidden:true, flex:'h', id:'wpr_commandRow', children:[
        {type:'button', color:'red1', label:'lock', doubleTap:domlCalls.commands.lockDevice, id:'btn_lockDevice'},
        {type:'wrapper', class:'row', flexC:'h', flex:'h', children:[
            {type:'button', flexC:'h', adoBtnPress:true, version:'tabLeft', label:'icon-scrollDown', color:'primary3', tap:function(){$(this).scrollUp({target:['#wpr_listControls > .wrapper:not(.hidden)'], step:280});},}  ,  
            {type:'button', flexC:'h', adoBtnPress:true, label:'icon-scrollUp', color:'primary3', tap:function(){$(this).scrollDown({target:['#wpr_listControls > .wrapper:not(.hidden)'], step:280});},},     
            {type:'button', flexC:'h', id:'btn_cmd', version:'tabRight', color:'primary4', label:'CMD', doubleTap:domlCalls.commands.secondaryInteraction}  
        ]}
        
    ]},    
    
    //Footer Bars
    {type:'wrapper', class:'row', hidden:true, flex:'h', children:[
        {type:'bar', size:'half', color:'accent3'},
        {type:'bar', size:'half', color:'accent3', flexC:'h'}
    ]}     
     
]}




