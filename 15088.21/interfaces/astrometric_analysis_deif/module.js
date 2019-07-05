//Custom Bracket
var deifBracket = {type:'wrapper', class:'bracket deif', children:[
    {type:'elbow', version:'topLeft', size:'medium', color:'primary1', children:[{type:'bar'}], noEvent:true},
    {type:'elbow', version:'topRight', size:'medium', color:'primary1', children:[{type:'bar'}], noEvent:true},
    {type:'elbow', version:'bottomRight', size:'medium', color:'primary1', children:[{type:'bar'}], noEvent:true},
    {type:'elbow', version:'bottomLeft', size:'medium', color:'primary1', children:[{type:'bar'}], noEvent:true},
    {type:'wrapper', version:'column', flex:'v', children:[
        {type:'bar', color:'accent1', flexC:'v'},
        {type:'bar', color:'accent1', flexC:'v'},
        {type:'bar', color:'accent1', flexC:'v'},
    ]},
    {type:'wrapper', version:'column', flex:'v', children:[
        {type:'bar', color:'accent2'},
        {type:'bar', color:'primary1', flexC:'v'},
        {type:'bar', color:'primary3', flexC:'v'},
    ]},
    {type:'wrapper', version:'column', flex:'v', children:[
        {type:'bar', color:'accent1', flexC:'v'},
        {type:'bar', color:'accent1', flexC:'v'},
        {type:'bar', color:'accent1', flexC:'v'},
    ]},
    {type:'wrapper', version:'column', flex:'v', children:[
        {type:'bar', color:'accent2'},
        {type:'bar', color:'primary1', flexC:'v'},
        {type:'bar', color:'primary3', flexC:'v'},
    ]},                
    {type:'wrapper', version:'content', children:[
        {type:'title', text:'Offline', state:'darkRed2LightRed'}
    ]},
    {type:'wrapper', class:'markers', flex:'v', children:[
        {type:'bar', flexC:'v', color:'accent1', label:'000'},
        {type:'bar', flexC:'v', color:'accent1', label:'010'},
        {type:'bar', flexC:'v', color:'accent1', label:'020'},
        {type:'bar', flexC:'v', color:'accent1', label:'030'},
        {type:'bar', flexC:'v', color:'accent1', label:'040'},
        {type:'bar', flexC:'v', color:'accent1', label:'050'},
        {type:'bar', flexC:'v', color:'accent1', label:'060'},
        {type:'bar', flexC:'v', color:'accent1', label:'070'},
        {type:'bar', flexC:'v', color:'accent1', label:'080'},
        {type:'bar', flexC:'v', color:'accent1', label:'090'},
    ]},
    {type:'wrapper', class:'markers', flex:'v', children:[
        {type:'bar', flexC:'v', color:'accent1', label:'000'},
        {type:'bar', flexC:'v', color:'accent1', label:'010'},
        {type:'bar', flexC:'v', color:'accent1', label:'020'},
        {type:'bar', flexC:'v', color:'accent1', label:'030'},
        {type:'bar', flexC:'v', color:'accent1', label:'040'},
        {type:'bar', flexC:'v', color:'accent1', label:'050'},
        {type:'bar', flexC:'v', color:'accent1', label:'060'},
        {type:'bar', flexC:'v', color:'accent1', label:'070'},
        {type:'bar', flexC:'v', color:'accent1', label:'080'},
        {type:'bar', flexC:'v', color:'accent1', label:'090'},
    ]}                
]}

//Main UI Definition
var uiRoot = {type:'wrapper', id:'uiRoot', class:'scale', version:'column', flex:'v', children:[
    {type:'wrapper', version:'header', children:[
        {type:'wrapper', version:'column', flex:'v', children:[
            {type:'button', color:'primary3', label:'LCARS-25423', flexC:'v', hidden:true},
            {type:'elbow', version:'bottomLeft', color:'primary1', label:'14-41875', flexC:'v', hidden:true},
        ]},
        {type:'wrapper', version:'row', flex:'h', children:[
            {type:'cap', color:'primary3', hidden:true},
            {type:'bar', color:'primary2', label:'ref set', hidden:true},
            {type:'bar', color:'primary1', flexC:'h', flexC:'h', label:'initate', hidden:true},
            {type:'cap', color:'primary3', label:'init', hidden:true},
        ]},
        {type:'wrapper', version:'content', hidden:true, children:[
            {type:'wrapper', version:'row', flex:'h', children:[
                {type:'radioButton', name:'commandGroup', checked:true, template:[{type:'button', version:'pill'}], label:'1283', flexC:'h', color:'primary2'},
                {type:'radioButton', name:'commandGroup', template:[{type:'button', version:'pill'}], label:'4896', flexC:'h',color:'accent2'},
                {type:'radioButton', name:'commandGroup', template:[{type:'button', version:'pill'}], label:'2561', flexC:'h',color:'primary1'},
                {type:'radioButton', name:'commandGroup', template:[{type:'button', version:'pill'}], label:'3009', flexC:'h',color:'primary3'}
            ]},
            
            {type:'wrapper', id:'wpr_numberReadout', version:'column', children:[
                {type:'wrapper', version:'row', flex:'h', hidden:true, children:[
                    {type:'block', version:'numericBlock', digits:11, text:'42844323320'},
                    {type:'block', version:'numericBlock', digits:4, text:'5694'},
                    {type:'block', version:'numericBlock', digits:6, text:'572149'},
                    {type:'block', version:'numericBlock', digits:11, text:'43672490352'},
                    {type:'block', version:'numericBlock', digits:6, text:'456373'},
                    {type:'block', version:'numericBlock', digits:3, text:'463'},
                    {type:'block', version:'numericBlock', digits:11, text:'45642048457'},
                    {type:'block', version:'numericBlock', digits:6, text:'668747'},
                    {type:'block', version:'numericBlock', digits:6, text:'473728'}
                ]},
                {type:'wrapper', version:'row', flex:'h', hidden:true, children:[
                    {type:'block', version:'numericBlock', digits:11, text:'42844323320'},
                    {type:'block', version:'numericBlock', digits:4, text:'5694'},
                    {type:'block', version:'numericBlock', digits:6, text:'572149'},
                    {type:'block', version:'numericBlock', digits:11, text:'43672490352'},
                    {type:'block', version:'numericBlock', digits:6, text:'456373'},
                    {type:'block', version:'numericBlock', digits:3, text:'463'},
                    {type:'block', version:'numericBlock', digits:11, text:'45642048457'},
                    {type:'block', version:'numericBlock', digits:6, text:'668747'},
                    {type:'block', version:'numericBlock', digits:6, text:'473728'}
                ]},
                {type:'wrapper', version:'row', flex:'h', hidden:true, children:[
                    {type:'block', version:'numericBlock', digits:11, text:'42844323320'},
                    {type:'block', version:'numericBlock', digits:4, text:'5694'},
                    {type:'block', version:'numericBlock', digits:6, text:'572149'},
                    {type:'block', version:'numericBlock', digits:11, text:'43672490352'},
                    {type:'block', version:'numericBlock', digits:6, text:'456373'},
                    {type:'block', version:'numericBlock', digits:3, text:'463'},
                    {type:'block', version:'numericBlock', digits:11, text:'45642048457'},
                    {type:'block', version:'numericBlock', digits:6, text:'668747'},
                    {type:'block', version:'numericBlock', digits:6, text:'473728'}
                ]},
                {type:'wrapper', version:'row', flex:'h', hidden:true, children:[
                    {type:'block', version:'numericBlock', digits:11, text:'42844323320'},
                    {type:'block', version:'numericBlock', digits:4, text:'5694'},
                    {type:'block', version:'numericBlock', digits:6, text:'572149'},
                    {type:'block', version:'numericBlock', digits:11, text:'43672490352'},
                    {type:'block', version:'numericBlock', digits:6, text:'456373'},
                    {type:'block', version:'numericBlock', digits:3, text:'463'},
                    {type:'block', version:'numericBlock', digits:11, text:'45642048457'},
                    {type:'block', version:'numericBlock', digits:6, text:'668747'},
                    {type:'block', version:'numericBlock', digits:6, text:'473728'}
                ]}
            ]},
            {type:'title', color:'primaryText3', text:'Astrometic analysis pulsar g 327'}
        ]}
    
    ]},
    {type:'wrapper', version:'main', flexC:'v', children:[
        {type:'wrapper', version:'column', flex:'v', children:[
            {type:'elbow', version:'topLeft', color:'primary2', flexC:'v', label:'24-31981', flexC:'v', hidden:true},
            {type:'button', color:'primary1', label:'33-51904', flexC:'v', hidden:true},
            {type:'button', color:'accent3', label:'reset', hidden:true},
            {type:'elbow', version:'bottomLeft', color:'primary3', flexC:'v', label:'42-32755', flexC:'v', hidden:true}
        ]},  
        {type:'wrapper', version:'row', flex:'h', children:[
            {type:'cap', color:'accent3', hidden:true},
            {type:'bar', color:'primary1', size:'half', hidden:true},
            {type:'bar', color:'primary2', flexC:'h', flexC:'h', label:'calibrate', hidden:true},
            {type:'cap', color:'primary1', label:'ext', hidden:true},
        ]},
        {type:'wrapper', version:'content', hidden:true, fade:true, children:[
            {type:'bracket', template:deifBracket},
            {type:'wrapper', version:'column', children:[
                {type:'button', label:'1221', color:'primary3', version:'pill'},
                {type:'button', color:'primary3',  color:'transparent', noEvent:true, version:'pill'},
                {type:'button', label:'6226', color:'primary2', version:'pill'},
                {type:'button', label:'7217', color:'primary1', version:'pill'},
                {type:'button', label:'3881', color:'accent2', version:'pill'},
                {type:'button', color:'primary3', color:'transparent', noEvent:true, version:'pill'},
                {type:'button', label:'5264', color:'primary2', version:'pill'},
                {type:'button', label:'4028', color:'accent2', version:'pill'}
            ]}
        ]}
    
    ]}
              
]}



//Button Random Color Swapping
var colorRotation = {
    elements:[],
    colors:['primary1', 'primary2', 'primary3', 'accent1', 'accent2', 'accent3'],
    timer:null,
    stop:function(){
        clearInterval(colorRotation.timer);
        colorRotation.timer === null;
    },
    init:function(){
        $('.button:not(.noEvent)').each(function(){
            var elemID = $(this).attr('id');
            colorRotation.elements.push('#'+elemID);
        });
        if(colorRotation.timer === null){
            colorRotation.timer = setInterval(function(){colorRotation.rotate();}, 2240)   
        }
    },
    rotate:function(){
        var array = colorRotation.elements;
        var elem = array[Math.floor(array.length * Math.random())];  
        var color = LCARS.colorGen(colorRotation.colors)
        $(elem).objectSettings({color:color});
        
    }
    
}

//Maintains the Header Numbers Readout
var headerReadout = {
    timer:null,
    options:[],
    sequence:[],
    columns:{},
    init:function(){
        $('#wpr_numberReadout .row').each(function(){
            var elemID = $(this).attr('id');
            headerReadout.sequence.push('#'+elemID);
        });
        $('#wpr_numberReadout .numericBlock').each(function(){
            var elemID = $(this).attr('id');
            var digits = allObjects[elemID].digits;
            var thisIndex = $(this).index();
            $(this).css('-webkit-transition-delay', .1*thisIndex +'s');
            $(this).css('transition-delay', .1*thisIndex +'s');
            
            headerReadout.options.push({digits:digits, id:'#'+elemID});
            if(!headerReadout.columns['col_' + thisIndex]){
              headerReadout.columns['col_' + thisIndex] = []  
            }
            headerReadout.columns['col_' + thisIndex].push('#'+elemID);
            
        });
         headerReadout.timer = true;
        headerReadout.generate();
       
    },
    generate:function(){
        if(headerReadout.timer === true){  
            $(headerReadout.options).each(function(){
                var ranDigit = Math.floor(Math.random() * this.digits) + 1
                var digitLength = '1';

                for (var i = 0; i < ranDigit; i++) { 
                    digitLength += '0'
                }
                var randomNumber = Math.floor(Math.random()*parseInt(digitLength)+1)

                $(this.id).objectSettings({text:''+randomNumber+''});  
            });
            $(headerReadout.sequence).showObjectSequence({timing:85});
            setTimeout(function(){headerReadout.select();}, 1000);
        }
    },
    select:function(){
        for (prop in headerReadout.columns) {
            var array = headerReadout.columns[prop]
            var selection = array[Math.floor(array.length * Math.random())];    
            $(''+selection+'').objectSettings({color:'accentText3'});
        }
        setTimeout(function(){
            $(headerReadout.sequence).hideObjectSequence({timing:85, success:function(){
                $('#wpr_numberReadout .accentText3').objectSettings({color:null});
                headerReadout.generate();
            }});
        }, 4500);
    }   
}


//Generate the UI and init calls.
$(document).on('ready', function(){
    $(uiRoot).createObject({appendTo:'body', success:function(){
        $('.scale').viewport('scale', {width:1510, height:1080,});
        headerReadout.init();
        colorRotation.init();
        showUI();
    }}); 
});



// Barebones 'Automated' Show Pattern - idea testing a later proper module.
function showUI(){
    var headerBars = $('#uiRoot > .header > .row > *');
    var headerColumn = $('#uiRoot > .header > .column > *');
    var mainBars = $('#uiRoot > .main >.row *');
    var mainColumn = $('#uiRoot > .main >.column > *');
    
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
        $('#uiRoot .header .content, #uiRoot .main > .content').showObject({});  
    }});
}
/*
     FILE ARCHIVED ON 23:16:17 Dec 30, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 05:16:17 Jul 05, 2019.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 72.989 (3)
  esindex: 0.01
  captures_list: 98.116
  CDXLines.iter: 17.074 (3)
  PetaboxLoader3.datanode: 72.247 (4)
  exclusion.robots: 0.231
  exclusion.robots.policy: 0.219
  RedisCDXSource: 2.685
  PetaboxLoader3.resolve: 21.815
  load_resource: 50.724
*/