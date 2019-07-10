<div class="description">
<p>A checkbox button is a specialized complex button.  When the element is created a mouse/touch event is attached to handle the checked state automatically.</p>

<p>The parameter 'template' is used to build the structure of the checkbox button.  The SDK provides some basic layouts under the global variable 'LCARS.templates.sdk.buttons.checkbox.typeName/LCARS.templates.sdk.buttons.checkboxText.typeName'.</p>

<p>Since a checkbox button is a complex button, apply the same techniques.</p>

<p>Included with the SDK is the 'check' block.  This is a block which has a default CSS setting to change style when the checkbox button is checked vs unchecked.  This is not required to be used for any element or just a plain button can be styled to display selection.  This allows for all kinds of styles and visual changes for checkbox buttons.  It is an optional thing  only.</p>

</div>
<pre class="code hidden">
//Sample Definitions
var def = {type:'checkboxButton', label:'Alert Status', appendTo:'body', template:LCARS.templates.sdk.buttons.complex.typeA, click:swapAlerts, tap:swapAlerts}

//Create Object from Definition
$(def).createObject({});
 
Default Args:

 type			- String, REQUIRED, 'checkboxButton'
 id			- String
 version		- String, 'vertical'
 label			- String
 altLabel		- String
 color			- String
 text 		- String
 colors			- Array, ['blue', 'red', 'yellow']
 attrs			- Array, [{attr:'target', value:'_blank'}, {attr:'data-linkto', value:'.content'}]
 state			- String
 template		- Array, [{type:'button'}, {type:'bar'}]
 noTransition	        - Boolean, true
 noEvent		- Boolean, true
 hidden			- Boolean, true
 fade			- Boolean, true			
 class			- String
 flexC			- String, 'h/v'
 name			- String
 checked		- Boolean, true
 children		- Object, [{type:'button'}, {type:'bar'}]
 children		- String, Raw HTML
 click			- Function
 			- Also Available: mouseenter, mouseleave, hover, mousedown, mouseup, tap, singleTap, doubleTap, longTap, swipe, swipeLeft, swipeRight, swipeUp, swipeDown


</pre>