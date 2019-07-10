<div class="description">
<p>Bars are used as a form of framing.  Bars are not used as children elements of complex buttons.  Blocks are used instead.</p>

<p>Labels can be applied to bars but for maintaining an interaction pattern, bars should not have mouse/touch events in place.  There is no CSS active state in place for that reason.</p>

<p>If no size parameter set, default size will be applied.</p>

</div>
<pre class="code hidden">
//Sample Definitions
var def = {type:'bar', appendTo:'body', color:'bg-blue-1'}

//Create Object from Definition
$(def).createObject({});
 

 type			- String, REQUIRED, 'bar'
 id			- String
 label			- String
 altLabel		- String
 color			- String
 attrs			- Array, [{attr:'target', value:'_blank'}, {attr:'data-linkto', value:'.content'}]
 size			- String, 'tiny, small, medium, large, xlarge'
 state			- String
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
