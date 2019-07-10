<div class="description">
<p>LCARS presents multiple element state visuals.  From color transitions/changes, blinking, active states and more.  The SDK does not presume to be able to maintain all canon state types so instead there is just a handful provided as a template for addons.</p>

<p>The SDK API applies states via a class name: disabled, blink, red-dark-blink, white-flash and red-dark-light provided</p>

<p>Disabled, hidden, fade, no-event and no-transition are usability states provided with the sdk.</p>

<p>There is a predefined CSS Active state that is commented out in the lcarssd.css file.  An :active element changes to white and done through a CSS animation.  This is so that the active state will always override all color settings or other assorted color animations.  Both the background color and border color are applied for complex element inheritance (like elbow inner radius).</p>


</div>
<pre class="code hidden">
.blink:not(.complexButton){ 
	-webkit-animation: blink 1.25s step-end infinite; 
	animation: blink 1.25s step-end infinite;
}

.blink.complexButton :not(.text){ 
	-webkit-animation: blink 1.25s step-end infinite; 
	animation: blink 1.25s step-end infinite;
}

@-webkit-keyframes blink {
   from, to { }
     50% {background-color:transparent; color:transparent; border-color:transparent;}
}

@keyframes blink {
   from, to { }
     50% {background-color:transparent; color:transparent; border-color:transparent;}
}

	
$(element).objectSettings('state') => Get
$(element).objectSettings({state:'blink'}); => Set
$(element).objectSettings({state:null}); => Remove

</pre>