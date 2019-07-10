<p>Elbows are the signature element of the LCARS design.  CSS does not provide an inverse-border-radius setting so elbows are created similar to complex buttons.  Inside an elbow are two elements, a 'bar' and an 'inner radius'.</p>

<p>There are four types of elbow orientation, each with an 'ALT' variant.</p>

<p>Elbows come with a basic default sizing and can be changed via their settings.  Currently there is only 'medium/small/base/large'.  There will be a extra large in the near future. Base is a projects 'custom' elbow developed specifically for that project.  SDK Base is a standard 60px height so the outer radius is a 60px border-radius and modified inner radius.</p>

</div>
<pre class="code hidden">
//Sample Definitions
var def = {type:'elbow', label:'Warp', color:'Blue', version:'bottomLeft', click:gotoWarp, tap:gotoWarp}

//Create Object from Definition
$(def).createObject({});
 
Default Args:

 type			- String, REQUIRED, 'elbow'
 id			- String
 version		- String, 'topLeft/topRight/bottomLeft/bottomRight/topLeftAlt/topRightAlt/bottomLeftAlt/bottomRightAlt/
 label			- String
 altLabel		- String
 color			- String
 attrs			- Array, [{attr:'target', value:'_blank'}, {attr:'data-linkto', value:'.content'}]
 size			- String, 'small/base/medium/large'
 state			- String
 noTransition		- Boolean, true
 noEvent		- Boolean, true
 hidden			- Boolean, true
 fade			- Boolean, true			
 class			- String
 flexC			- String, 'h/v'
 href			- String
 click			- Function
 			- Also Available: mouseenter, mouseleave, hover, mousedown, mouseup, tap, singleTap, doubleTap, longTap, swipe, swipeLeft, swipeRight, swipeUp, swipeDown


</pre>