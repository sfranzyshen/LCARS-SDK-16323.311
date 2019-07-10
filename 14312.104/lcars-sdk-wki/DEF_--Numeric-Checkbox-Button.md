<div class="description">
<p>While the naming of this element says numeric, it is actually Alpha-Numeric so text can be used along with numbers.  Just saves on typing.</p>

<p>Numeric radio buttons are a specialization.  The difference is the additional child element .numericBlock where the large text is stored.  This element is just a normal '.block' element with the additional class for styling differences.</p>

<p></p>
</div>
<pre class="code hidden">
//Sample Definitions
var def = {type:'numericCheckboxButton', label:'Shield Status', template:sdkTemplates.numericCheckboxButtons.typeA, value:75, click:shieldStatus, tap:shieldStatus}

Default Args:

 type			- String, REQUIRED, 'numericCheckboxButton'
 id			- String
 version		- String, 'vertical'
 label			- String
 altLabel		- String
 color			- String
 attrs			- Array, [{attr:'target', value:'_blank'}, {attr:'data-linkto', value:'.content'}]
 nbValue		- String 
 state			- String
 template		- Array, [{type:'button'}, {type:'bar'}]
 noTransition		- Boolean, true
 noEvent		- Boolean, true
 hidden			- Boolean, true
 fade			- Boolean, true			
 class			- String
 flexC			- String, 'h/v'
 name			- String
 checked		- Boolean, true
 children		- Array, [{type:'button'}, {type:'bar'}]
 children		- String, Raw HTML
 click			- Function
 			- Also Available: mouseenter, mouseleave, hover, mousedown, mouseup, tap, singleTap, doubleTap, longTap, swipe, swipeLeft, swipeRight, swipeUp, swipeDown

</pre>