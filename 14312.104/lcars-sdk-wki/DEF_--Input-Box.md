<div class="description">
<p>Simple input text boxes.  Ability to enable/disable password mode.</p>
</div>

<pre class="code hidden">
//Sample Definitions
var def = {type:'inputBox', text:'INPUT VALUE HERE', appendTo:'body'}

//Create Object from Definition
$(def).createObject({});
 
Default Args:

 type			- String, REQUIRED, 'textInput'
 id			- String
 password               - Boolean, true
 value                   - String, Text Content of input.
 color			- String
 attrs			- Array, [{attr:'target', value:'_blank'}, {attr:'data-linkto', value:'.content'}]
 state			- String
 noTransition	        - Boolean, true
 noEvent		- Boolean, true
 hidden			- Boolean, true
 fade			- Boolean, true			
 class			- String
 flexC			- String, 'h/v'
 name			- String
 click			- Function
 			- Also Available: mouseenter, mouseleave, hover, mousedown, mouseup, tap, singleTap, doubleTap, longTap, swipe, swipeLeft, swipeRight, swipeUp, swipeDown


//Set-Get
$(element).inputSettings(); => String - if type text or password

$(element).inputSettings('clear'); => Removes text value if type text or password


</pre>