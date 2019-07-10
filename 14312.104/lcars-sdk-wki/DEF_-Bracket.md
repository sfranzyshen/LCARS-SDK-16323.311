<div class="description">
<p>There are all different types of brackets used within LCARS.  While there wasn't a real need for a special {type:'bracket'} since a bracket is full template object but because of their heavy use and varieties of styles, having the ability to segment definitions as a bracket type is useful when reading through a complex UI definition structure.</p>
</div>

<pre class="code hidden">
//Sample Definitions
var def = {type:'bracket', template:sdkTemplates.brackets.typeA, id:'plasmaConstrictor'}

//Create Object from Definition
$(def).createObject({});

Default Args:

 type			- String, REQUIRED, 'bracket'
 id			- String
 version		- String
 attrs			- Array, [{attr:'target', value:'_blank'}, {attr:'data-linkto', value:'.content'}]
 template		- Array, [{type:'button'}, {type:'bar'}]
 noTransition		- Boolean, true
 noEvent		- Boolean, true
 hidden			- Boolean, true
 fade			- Boolean, true			
 class			- String
 flex			- String, 'h/v'
 flexC			- String, 'h/v'
 children		- Array, [{type:'button'}, {type:'bar'}]
 children		- String, Raw HTML
 click			- Function
 			- Also Available: mouseenter, mouseleave, hover, mousedown, mouseup, tap, singleTap, doubleTap, longTap, swipe, swipeLeft, swipeRight, swipeUp, swipeDown
</pre>