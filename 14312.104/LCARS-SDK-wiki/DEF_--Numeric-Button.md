<div class="description">
<p>While the naming of this element says numeric, it is actually Alpha-Numeric so text can be used along with numbers.  Just saves on typing.</p>

<p>Numeric Buttons are a specialization of a complex button.  The difference is the additional child element .numericBlock where the large text is stored.  This element is just a normal '.block' element with the additional class for styling differences.</p>

<p>There is an included API call that is used to update the value of the element.  Only use if a single value block.  Future versions will be providing multi-value block support.</p>
</div>

<pre class="code hidden">
//Sample Definitions
var def = {type:'numericButton', label:'Shield Status', template:sdkTemplates.numericButtons.typeA, nbValue:'75', click:shieldStatus, tap:shieldStatus}

//Create Object from Definition
$(def).createObject({});

Default Args:

 type			- String, REQUIRED, 'numericButton'
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
 href			- String
 children		- Array, [{type:'button'}, {type:'bar'}]
 children		- String, Raw HTML
 click			- Function
 			- Also Available: mouseenter, mouseleave, hover, mousedown, mouseup, tap, singleTap, doubleTap, longTap, swipe, swipeLeft, swipeRight, swipeUp, swipeDown

//Set-Get
$(element).nbValue(); => return value else false

$(element).nbValue('65'); => Sets value

$(element).nbValue('remove'); => Removes value

</pre>
