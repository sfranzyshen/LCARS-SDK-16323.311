<div class="description">
<p>Caps are used to end layout or content. There generally are no children within a cap element, nor mouse/touch events.  A label can be applied until the element is too small to support a label.  When the size parameter is not utilized it will generate the default 60px height cap.</p>

</div>
<pre class="code hidden">
//Sample Definitions
var def = {type:'cap', appendTo:'body', color:'bg-blue-1'}

//Create Object from Definition
$(def).createObject({});
 
 type			- String, REQUIRED, 'cap'
 id			- String
 label			- String
 altLabel		- String
 color			- String
 version		- String, 'left / right'
 attrs			- Array, [{attr:'target', value:'_blank'}, {attr:'data-linkto', value:'.content'}]
 size			- String, 'tiny / small / medium / large / xlarge'
 state			- String
 noTransition		- Boolean, true
 noEvent		- Boolean, true
 hidden			- Boolean, true
 fade			- Boolean, true			
 class			- String
 flexC			- String, 'h/v'
</pre>