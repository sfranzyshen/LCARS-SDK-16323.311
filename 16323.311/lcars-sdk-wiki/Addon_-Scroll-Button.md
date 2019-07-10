<p>A complex duo button with stylized labels.  Pass the target to scroll and the amount to scroll with each fire.</p><p>If no template parameter is passed the default vertical version will be utilized.</p>



 * type         - String, REQUIRED - 'scrollBar'
 * id		- String
 * target	- String - '#wpr_iholdContent > .content' - Element to scroll the contents of.
 * step	        - Int - Value to scroll by.
 * template     - Array or premade like: LCARS.templates.sdk.scrollButton.typeAV
		

<pre class="code hidden">
//Sample Definitions
var def = {type:'scrollButton', target:'#wpr_iholdContent', step:65, color:'bg-blue-1', template:LCARS.templates.sdk.scrollButton.typeAV}

//Create Object from Definition
$(def).createObject({appendTo:'body'});


</pre>
