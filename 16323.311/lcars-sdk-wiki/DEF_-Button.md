<div class="description">
<p>Buttons are one of the most basic elements of LCARS.  The come in a variety of types, sizes and colors.  Each button has two label options, as do most elements, positioned at the top and bottom.</p>

<p>Also provided is an 'endcap' variant.  There is currently only one size 'large' provided. Reference the Visual Guide provided with the LCARS SDK library for reference.</p>
</div>
<pre class="code">
//Sample Definition
var def = {type:'button', label:'Alert Status', altLabel:'Blue', appendTo:'body', color:'bg-blue-1', version:'left', click:swapAlerts, tap:swapAlerts}

//Create Object from Definition
$(def).createObject({});

//Default Args

 type         - String, REQUIRED, 'button'
 id           - String
 version      - String, 'pill/right/left'
 endcap       - Boolean, true
 size         - String, REQUIRED FOR ENDCAP, 'large'
 label        - String
 altLabel     - String
 color        - String
 attrs        - Array, [{attr:'target', value:'_blank'}, {attr:'data-linkto', value:'.content'}]
 state        - String
 noTransition - Boolean, true
 noEvent      - Boolean, true
 hidden       - Boolean, true
 fade         - Boolean, true			
 class        - String
 flexC        - String, 'h/v'
 href         - String
 children     - Object, [{type:'button'}, {type:'bar'}]
 children     - String, Raw HTML
 click        - Function
              - Also Available: mouseenter, mouseleave, hover, mousedown, mouseup, tap, singleTap, doubleTap, longTap, swipe, swipeLeft, swipeRight, swipeUp, swipeDown

</pre>