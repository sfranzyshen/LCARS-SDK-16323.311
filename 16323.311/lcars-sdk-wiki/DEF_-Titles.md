<div class="description">
<p>Currently provided are two types of titles, default (large) and small.  Large titles are header text.  Half Titles take up the standard bar height of 30px.</p>

</div>
<pre class="code">
//Sample Definitions
var def = {type:'title', text:'COMM SYSTEMS', appendTo:'body', color:'text-blue-1'}

//Create Object from Definition
$(def).createObject({});
 
 type			- String, REQUIRED, 'title'
 id			- String
 version                - String, 'large / small'
 label			- String
 text			- String
 altLabel		- String
 color			- String
 attrs			- Array, [{attr:'target', value:'_blank'}, {attr:'data-linkto', value:'.content'}]
 state			- String
 noTransition		- Boolean, true
 noEvent		- Boolean, true
 hidden			- Boolean, true
 fade			- Boolean, true			
 class			- String
</pre>