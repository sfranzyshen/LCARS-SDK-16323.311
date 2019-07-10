<div class="description">
<p>A complex button is a collection of basic button elements within a specialized wrapper.   Complex CSS Active state and the color settings change the complex buttons sub elements, not the wrapper itself.</p>

<p>The parameter 'template' is used to build the structure of the complex button.  The SDK provides some basic layouts under the global variable 'sdkTemplates.complexButtons.typeName/sdkTemplates.numericButtons.typeName'.</p>

<p>Complex buttons can have as many caps and blocks as one wants but only one button and one numeric block.  A complex button should be handled as a single unit with events tied to the parent wrapper.  If multiple buttons, numeric blocks or more are wanted, use the children:[] setting and maintain the sub-elements individually.</p>

<p>Complex buttons are a flex element.  The children buttons fill the space left over.</p>

<p>There are two specialized versions included, vertical and duo.  Vertical changes the layout of the complex button into a column.</p>

<p>Duo is used with two sub-buttons of a complex button.  Removes the spacing and creates a singular 'dual' button.  Duo works with either default horizontal or vertical layout versions.  Duo elements do not come with or use the template setting.  Pass the two buttons via the children:[] setting.</p>

<p>Passing the setting, nbValue will add text to the numeric block (if present in the template/children).  There is no long separate creation calls to create a numeric complex button/radio/checkbox.  nbValue is now built in for use.</p>

<p>Complex buttons come with the ability to set a single color via the parent wrapper but also apply individual colors to the children via the colors:[] setting.  Pass an array of color names and each color will be applied to matching index value sub child.</p>


</div>
<pre class="code hidden">
//Sample Definitions
var def = {type:'complexButton', label:'Alert Status', appendTo:'body', template:sdkTemplates.complexButton.typeA, click:swapAlerts, tap:swapAlerts}

var defMultiButton = {type:'complexButton', label:'Alert Status', appendTo:'body', template:[{type:'block'}, {type:'button', label:'button 1'}, {type:'button', label:'button 2'}], click:swapAlerts, tap:swapAlerts}

//Create Object from Definition
$(def).createObject({});
 
Default Args:

 type			- String, REQUIRED, 'complexButton'
 id			- String
 version		- String, 'vertical, duo'
 label			- String
 altLabel		- String
 color			- String
 colors			- Array, ['blue', 'red', 'yellow']
 attrs			- Array, [{attr:'target', value:'_blank'}, {attr:'data-linkto', value:'.content'}]
 state			- String
 nbValue		- String
 template		- Array, [{type:'button'}, {type:'bar'}]
 noTransition	        - Boolean, true
 noEvent		- Boolean, true
 hidden			- Boolean, true
 fade			- Boolean, true			
 class			- String
 flexC			- String, 'h/v'
 href			- String
 children		- Object, [{type:'button'}, {type:'bar'}]
 children		- String, Raw HTML
 click			- Function
 			- Also Available: mouseenter, mouseleave, hover, mousedown, mouseup, tap, singleTap, doubleTap, longTap, swipe, swipeLeft, swipeRight, swipeUp, swipeDown
</pre>