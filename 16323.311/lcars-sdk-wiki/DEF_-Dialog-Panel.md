<div class="description">
<p>There are all different types of dialogs used within LCARS.  While there wasn't a real need for a special {type:'dialog'} since a dialog is full template object but because of their heavy use and varieties of styles, having the ability to segment definitions as a dialog type is useful when reading through a complex UI definition structure.</p>

<p>The built in dialog create call has two optional titles, one in the footer and one in the header.  If either of the args (or both) are passed, it will try and find a title element in the headers and footers of the dialog and set the value.</p>
</div>

<pre class="code hidden">
//Sample Definitions
var def = {type:'dialog', template:LCARS.templates.sdk.dialog.typeA, id:'saveWindow', headerTitle:'Confirmation'}

//Create Object from Definition
$(def).createObject({});

Default Args:

 type			- String, REQUIRED, 'dialog'
 id			- String
 headerTitle		- String
 footerTitle		- String
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