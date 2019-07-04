
var colorArray = ['w1','w2','w3','w4','c1','c2','c3','c4',];

var sampleContent = '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p><p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p><p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat</p>';


var rdr275 = 
    {type:'wrapper', id:'wpr_viewport', class:'scaler', appendTo:'body', hidden:true, fade:true, children:[
        {type:'wrapper', class:'column', id:'column_feedSelection', children:[
            {type:'button', version:'pill', color:'w3', label:'@LCARSSDK'},
            {type:'button', version:'pill', color:'c2', label:'LOREM IPSUM', state:'blink'},
            {type:'button', version:'pill', color:'w1', label:'Facebook'},
            {type:'button', version:'pill', color:'w2', label:'Weather'},
            {type:'button', version:'pill', color:'c3', label:'GNews'},
            {type:'button', version:'pill', color:'c4', label:'FNews'},
            {type:'button', version:'pill', color:'c1', label:'YNews'},
            {type:'button', version:'pill', color:'w3', label:'Messages'},
            {type:'button', version:'pill', color:'c2', label:'Video'},
            {type:'button', version:'pill', color:'w2', label:'Classified'},
            {type:'button', version:'pill', color:'c3', label:'Blog'}
        ]},
        {type:'wrapper', id:'wpr_rightFrame', children:[
            {type:'elbow', version:'topLeft', class:'up', label:'▲', color:'c4', id:'elbow_scrollUp', click:contentScroll, tap:contentScroll},
            {type:'wrapper', class:'row', flex:'h', id:'row_headerFrame', children:[
                {type:'title', size:'half', text:'RDR-275 MARK I COMM FEED'},
                {type:'cap', version:'right', size:'small', color:'w4'},         
            ]},
            {type:'button', label:'0- SP', color:'w4', id:'btn_scrollValue'},
            {type:'elbow', version:'bottomLeft', label:'▼', color:'c1', id:'elbow_scrollDown', click:contentScroll, tap:contentScroll},
            {type:'cap', version:'right', size:'small', color:'w4'},
            {type:'title', class:'postTitle', text:'Lorem Ipsum'},
            {type:'wrapper', class:'content', id:'wpr_loadedContent', children:sampleContent}
        ]}
        
    
    ]};
    
$(document).ready(function(){
    $(rdr275).createObject({success:init});
});

function init(){
    $('.scaler').viewport('scale', {width:1290, height:730, max:true})
    window.onresize = function(event) {
        $('.scaler').viewport('scale', {width:1290, height:730, max:true}) 
    }
    
    setTimeout(function(){$('.scaler').showObject({})}, 500);
}

function contentScroll(){
    if($(this).hasClass('up')){
        $(this).scrollUp({target:['#wpr_loadedContent'], step:65});
    }else{
        $(this).scrollDown({target:['#wpr_loadedContent'], step:65});
    }
    var sTop = $('#wpr_loadedContent').scrollTop();
    var sHeight = $('#wpr_loadedContent')[0].scrollHeight
    var posVal = Math.round((sTop/(sHeight-485))*100)
    $('#btn_scrollValue').objectSettings({label:posVal+'- SP'});
}