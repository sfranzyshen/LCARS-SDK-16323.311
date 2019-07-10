<div class="description">
<p>Caps are used to end layout or content.  There is a size variant 'small' for caps that end at a bar instead of the default button height size.  There generally are no children within a cap element, nor mouse/touch events.  The 'version' parameter rounds the cap.</p>

</div>
<pre class="code hidden">
//Sample Definitions
var def = {type:'cap', appendTo:'body', color:'blue'}

//Create Object from Definition
$(def).createObject({});
 
 type			- String, REQUIRED, 'cap'
 id			- String
 label			- String
 altLabel		- String
 color			- String
 version		- String, 'left/right'
 attrs			- Array, [{attr:'target', value:'_blank'}, {attr:'data-linkto', value:'.content'}]
 size			- String, 'small'
 state			- String
 noTransition		- Boolean, true
 noEvent		- Boolean, true
 hidden			- Boolean, true
 fade			- Boolean, true			
 class			- String
 flexC			- String, 'h/v'
</pre>