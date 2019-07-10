<div class="description">
<p>A complex button is a collection of basic button elements within a wrapper.   Complex CSS Active state and the color settings change the complex buttons sub elements, not the wrapper itself.</p>

<p>The parameter 'template' is used to build the structure of the complex button.  The SDK provides some basic layouts under the global variable 'sdkTemplates.numericButtons.typeName'.</p>

<p>If creating a complex button with multiple internal buttons, place the label/altLabel on the individual sub buttons.  The creation API, when the label args are passed from the complex definition will be placed on the first button found if there are multiple sub button elements. Future versions will be providing multi-value block support.</p>

<p>Complex buttons are a flex element.  The children buttons fill the space left over from additional children, like blocks and caps.</p>

<p>There are two specialized versions included, vertical and duo.  Vertical changes the layout of the complex button into a column.  Duo is used with two sub-buttons of a complex button.  Removes the spacing and creates a singular 'dual' button.  Duo works with either default horizontal or vertical layout versions.  </p>


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
 attrs			- Array, [{attr:'target', value:'_blank'}, {attr:'data-linkto', value:'.content'}]
 state			- String
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