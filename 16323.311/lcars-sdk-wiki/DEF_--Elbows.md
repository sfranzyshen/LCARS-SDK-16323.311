<p>Elbows are the signature element of the LCARS logic methodology.  CSS does not provide an inverse-border-radius setting so elbows are created similar to complex buttons.  Inside an elbow are two elements, a bar and within that bar, a block (which the block provides the inner-radius visual).</p>

<p>There are four types of elbow orientation, each with an vertical variant.</p>

<p>Elbows come with a basic default sizing and can be changed via their settings.  Outside the default setting there are four options - 'large / medium / base / small'  Base is generally a projects 'custom' elbow developed specifically for that project.  SDK Base is a standard 60px height so the outer radius is a 60px border-radius and modified inner radius.</p>

</div>
<pre class="code hidden">
//Sample Definitions
var def = {type:'elbow', label:'Warp', color:'bg-blue-1', version:'bottom-left', click:gotoWarp, tap:gotoWarp}

//Create Object from Definition
$(def).createObject({});
 
Default Args:

 type			- String, REQUIRED, 'elbow'
 id			- String
 version		- String, 'top-left / top-right / bottom-left / bottom-right'
 orient - String, 'vertical'
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