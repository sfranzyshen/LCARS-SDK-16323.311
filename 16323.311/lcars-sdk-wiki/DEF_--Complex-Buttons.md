<div class="description">
<p>A complex button is a collection of basic components grouped together as a single button.</p>

<p>The parameter 'template' is used to build the structure of the complex button.  The SDK provides some basic layouts under the global variable 'LCARS.templates.sdk.buttons.complex.typeName/LCARS.templates.sdk.buttons.complexText.typeName'.</p>

<p>Complex buttons can have as many components as one wants but only one button and one text block max by default.  Complex buttons are handled as a single unit with events tied to the complex button element as a whole.  That being said, values can be applied individually to the components by the use of the children:[] setting or providing a custom template.</p>

<p>Complex buttons are a flex element.  The children buttons fill the space left over.</p>

<p>There are two specialized versions included, vertical and duo.  Vertical changes the layout of the complex button into a column.</p>

<p>Duo is created specifically to hold two buttons, each with their own event.  By default it removes the spacing and creates a visually singular button.  Duo works with either default horizontal or vertical layout versions.  Duo elements do not come with or use the template setting.  Pass the two buttons via the children:[] setting and set their events like normal.</p>

<p>Passing a value to the setting 'text' will add text to the large text block (if present in the template/children).</p>

<p>Complex buttons come with the ability to set a single color via the parent wrapper but also apply individual colors to the children via the colors:[] setting.  Pass an array of color names and each color will be applied to matching index value sub child.</p>


</div>
<pre class="code hidden">
//Sample Definitions
var def = {type:'complexButton', label:'Alert Status', appendTo:'body', template:LCARS.templates.sdk.buttons.complex.typeA, click:swapAlerts, tap:swapAlerts}

var defMultiButton = {type:'complexButton', label:'Alert Status', appendTo:'body', template:[{type:'block'}, {type:'button', label:'button 1'}, {type:'button', label:'button 2'}], click:swapAlerts, tap:swapAlerts}

//Create Object from Definition
$(def).createObject({});
 
Default Args:

 type			- String, REQUIRED, 'complexButton'
 id			- String
 version		- String, 'duo'
 direction - String, 'vertical'
 label			- String
 altLabel		- String
 color			- String
 colors			- Array, ['bg-blue-1', 'bg-green-1', 'bg-blue-3']
 attrs			- Array, [{attr:'target', value:'_blank'}, {attr:'data-linkto', value:'.content'}]
 state			- String
 text - String
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