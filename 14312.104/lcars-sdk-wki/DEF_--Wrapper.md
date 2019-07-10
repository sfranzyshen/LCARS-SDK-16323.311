<div class="description">
<p>Wrappers do as they are named.  Apply a version arg of 'row/column/content' to have special settings.</p>

</div>
<pre class="code hidden">
//Sample Definitions
var def = {type:'wrapper', flex:'h', appendTo:'body', id:'wpr_topLevel'}

//Create Object from Definition
$(def).createObject({});
 
 type			- String, REQUIRED, 'wrapper'
 id			- String
 version		- String, 'row/column/content'
 attrs			- Array, [{attr:'target', value:'_blank'}, {attr:'data-linkto', value:'.content'}]
 noTransition		- Boolean, true
 noEvent		- Boolean, true
 hidden			- Boolean, true
 fade			- Boolean, true			
 class			- String
 flex			- String, 'h/v'
 flexC			- String, 'h/v'
 children		- Array, [{type:'button'}, {type:'bar'}]
 children		- String, Raw HTML
</pre>