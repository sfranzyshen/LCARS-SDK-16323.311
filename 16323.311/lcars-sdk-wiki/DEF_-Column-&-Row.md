<div class="description">
<p>Columns and rows are exactly what they say they are.  Both provide a standard spacing pattern which can be changed per row/column or universally.  Rows, by default, is a flex parent to allow for the horizontal layout.  In reverse columns do not provide flex settings by default.</p>

</div>
<pre class="code hidden">
//Sample Definitions
var colum = {type:'column', appendTo:'body'}
var row = {type:'row', flex:'h', appendTo:'body'}

//Create Object from Definition
$(def).createObject({});
 
 type			- String, REQUIRED, 'column/row'
 id			- String
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