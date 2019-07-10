<div class="description">
<p>Blocks are generally used as sub elements of complex buttons, non-bar framing and filler areas.</p>
</div>

<pre class="code">
//Sample Definitions
var def = {type:'block', appendTo:'body', color:'bg-blue-1'}

//Create Object from Definition
$(def).createObject({});
 
 type			- String, REQUIRED, 'block'
 id			- String
 label			- String
 altLabel		- String
 color			- String
 size			- String, xlarge/large/medium/small/tiny
 attrs			- Array, [{attr:'target', value:'_blank'}, {attr:'data-linkto', value:'.content'}]
 state			- String
 noTransition		- Boolean, true
 noEvent		- Boolean, true
 hidden			- Boolean, true
 fade			- Boolean, true			
 class			- String
 flexC			- String, 'h/v'
</pre>