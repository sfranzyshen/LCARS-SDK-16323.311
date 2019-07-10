<div class="description">
<p>The core logic of the SDK lies within an expression function. This maintains the viewport sizing functionality, base element creation calls, event binders and object settings.</p>

<p>Objects settings can be redefined to allow for custom settings for 3rd party projects.  The included settings are required and should be included if the call is redefined.  When creating elements, event binders can set.  The function checks if the main input is touch or mouse and applies the correct binder.</p>

<p>The most important part of the LCARS function expression is the creation calls.  The 'type' variable of a definition references the specific create function.  The SDK provides the base elements LCARS is made from.  Extend the create ability for new elements and full fledged widgets!</p>

<p>Every create function should return the created element.</p>
</div>

<pre class="code hidden">
//Refer to the file, lcarssdk.js for more detailed examples.

//Example of the LCARS expression
var LCARS = {
	objectDefinition: function(args, setGet, element){
		//Creates-updates object definition stored globally.
	},

	setObjectSettings: function(element, args, getSet){
		//Set parameters on created object.
	},
	
	eventBinders: function(element, args){
		//Bind events to created object.
	},
	
	create:{
		//Built in creation calls	
	}
	
}
</pre>
