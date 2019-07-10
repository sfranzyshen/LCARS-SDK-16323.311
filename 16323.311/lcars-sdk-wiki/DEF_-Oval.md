<div class="description">
<p>Ovals are used generally as list markers and similar visual cues.  Currently there is the default and a small version.</p>



</div>
<pre class="code hidden">
//Sample Definitions
var def = {type:'oval', appendTo:'body', color:'bg-blue'}

//Create Object from Definition
$(def).createObject({});
 

 type			- String, REQUIRED, 'oval'
 id			- String
 color			- String
 attrs			- Array, [{attr:'target', value:'_blank'}, {attr:'data-linkto', value:'.content'}]
 size			- String, 'small'
 state			- String
 noTransition		- Boolean, true
 noEvent		- Boolean, true
 hidden			- Boolean, true
 fade			- Boolean, true			
 class			- String
</pre>
