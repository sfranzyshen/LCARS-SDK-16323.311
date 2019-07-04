var warpControls  = {type:'wrapper', appendTo:'body', id:'wpr_warpControls', class:'column', flex:'v', children:[
    {type:'elbow', version:'topLeft', color:'blue3'},
    {type:'radioButton', template:[{type:'button'}], name:'warpControls', color:'green1', label:'50%', click:speedSlow},
    {type:'radioButton', template:[{type:'button'}], checked:true, name:'warpControls', color:'green2', label:'100%', click:speedNormal},
    {type:'radioButton', template:[{type:'button'}], name:'warpControls', color:'green3', label:'125%', click:speedFast},
    {type:'elbow', version:'bottomLeft', color:'blue4', flexC:'v'},
    {type:'cap', color:'gold1', version:'right', size:'small'},
    {type:'cap', color:'gold1', version:'right', size:'small'},
    {type:'wrapper', class:'content', children:' <div id="wpr_warpCoreDiag"> <div class="nub"></div> <div class="endCap" id="top"><div class="left"><div></div></div><div class="right"><div></div></div></div> <div class="bubble dark" ></div> <div class="bubble light" ></div> <div class="bubble medium" ></div> <div class="bubble dark" ></div> <div class="bubble light" ></div> <div id="core"><div id="center"><div></div></div><div id="circle"></div></div> <div class="bubble light"></div> <div class="bubble dark" ></div> <div class="bubble medium" ></div> <div class="bubble light" ></div> <div class="bubble dark" ></div> <div class="endCap" id="bottom"><div class="left"><div></div></div><div class="right"><div></div></div></div> <div class="nub"></div> </div>'}
    
    
]}

function speedSlow(){
   $('.bubble').removeClass('speedFast').addClass('speedSlow');    
}

function speedFast(){
   $('.bubble').removeClass('speedSlow').addClass('speedFast');    
}

function speedNormal(){
   $('.bubble').removeClass('speedFast speedSlow')
}

$(document).ready(function(){
    $(warpControls).createObject({});
});
