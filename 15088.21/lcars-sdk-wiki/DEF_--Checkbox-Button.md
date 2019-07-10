<div class="description">
<p>A checkbox button is a specialized complex button.   Instead of the normal DIV/A tags, these checkboxs are made out of the LABEL tag.  Inside the first child must always be the input, which is fully hidden from view.  When using the create API, the input is automatically handled.</p>

<p>The parameter 'template' is used to build the structure of the checkbox button.  The SDK provides some basic layouts under the global variable 'sdkTemplates.checkboxButtons.typeName/sdkTemplates.numericCheckboxButtons.typeName'.</p>

<p>Since a checkbox button is a complex button, apply the same techniques.</p>

<p>Included with the SDK is an additional child element .checkBlock which has a default CSS setting to change style when the checkbox button is checked vs unchecked.  This is not required to be used for any element or just a plain button can be styled to display selection.  This allows for all kinds of styles and visual changes for checkbox buttons.  It is an optional thing  only.</p>

<p>checkbox buttons and checkbox buttons have the native change events prevented.  The function, labelPreventSet/labelPreventDefault, is automatically applied to bound events to radio/checkboxes and the checked/uncheck event is handled manually.  This is to prevent the double triggering of bound events and not triggering the checked/unchecked state via specific events.</p>

</div>
<pre class="code hidden">
//Sample Definitions
var def = {type:'checkboxButton', label:'Alert Status', appendTo:'body', template:sdkTemplates.checkboxButtons.typeA, click:swapAlerts, tap:swapAlerts}

//Create Object from Definition
$(def).createObject({});
 
Default Args:

 type			- String, REQUIRED, 'checkboxButton'
 id			- String
 version		- String, 'vertical'
 label			- String
 altLabel		- String
 color			- String
 nbValue		- String
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


/* Radio Button Complex Button Variant */
.radioButton input{display:none;}
.radioButton input~.checkBlock{background-color:transparent;}
.radioButton input:checked~.checkBlock{background-color:#ffffff;}

</pre>