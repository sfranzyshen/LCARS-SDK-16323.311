<div class="description">
<p>A checkbox button is a specialized complex button.   Instead of the normal DIV/A tags, these checkboxs are made out of the LABEL tag.  Inside the first child must always be the input, which is fully hidden from view.  When using the create API, the input is automatically handled.</p>

<p>The parameter 'template' is used to build the structure of the checkbox button.  The SDK provides some basic layouts under the global variable 'sdkTemplates.checkboxButtons.typeName'.</p>

<p>Included with the SDK is an additional child element .checkBlock which has a default CSS setting to change style when the checkbox button is checked vs unchecked.  This is not required to be used for any element or just a plain button can be styled to display selection.  This allows for all kinds of styles and visual changes for checkbox buttons.</p>

<p>Radio buttons and checkbox buttons have the native change events prevented.  The function, preventLabelDoubleEvent, is automatically applied to bound events to radio/checkboxes and the checked/uncheck event is handled manually.  This is to prevent the double triggering of bound events.</p>

<p>Radio buttons and checkbox buttons also have their own set/get API call option besides the standard $.objectSettings();</p>

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


//Set-Get
$(element).inputSettings(); => true/false - String - if type text or password

$(element).inputSettings('checked'); => Checks the radio or checkbox

$(element).inputSettings('clear'); => Unchecks - Removes text value if type text or password


/* Radio Button Complex Button Variant */
.radioButton input{display:none;}
.radioButton input~.checkBlock{background-color:transparent;}
.radioButton input:checked~.checkBlock{background-color:#ffffff;}

</pre>