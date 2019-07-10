<div class="description">
<p>LCARS presents multiple element state visuals.  From color transitions/changes, blinking, active states and more.  The SDK does not presume to be able to maintain all canon state types so instead there is just a handful provided as a template for addons.</p>

<p>The SDK API applies states via a class name: disabled, blink, darkRed2LightRed, whiteFLash and darkRedBlink are built in options.</p>

<p>Disabled is a usability state.  This fully disables mouse interaction with the element and changes the element color to the standard grey.  There is no predefined state for things like selected, checked, etc...  Other than disabled, this is meant to be open ended.</p>

<p>There is a predefined CSS Active state.  An :active element changes to white and done through a CSS animation.  This is so that the active state will always override all color settings or other assorted color animations.</p>

<p>On IE, when an elements children are clicked it does not trigger the parent CSS Active state. IE uses JS to handle the state change.  For many mobile webviews it is best to copy the IE events and make them the default for the CSS :active is slow on some (mainly Chromium based webviews).</p>
</div>
<pre class="code hidden">
.blink:not(.complexButton){ -webkit-animation: blink 1.25s step-end infinite; animation: blink 1.25s step-end infinite;}
.blink.complexButton :not(.numericBlock){ -webkit-animation: blink 1.25s step-end infinite; animation: blink 1.25s step-end infinite;}

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