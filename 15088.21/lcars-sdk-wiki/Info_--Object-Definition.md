Objects are defined within an object literal.

`{type:'button', id:'elementID', appendTo:'#customWrapper', label:':Label Text', color:'light blue'}`

The most important of the definition is the 'type' argument. This setting is directly tied to the SDK Object Create Logic.

All other arguments are tied to the LCARS.defintion/LCARS.settings. When passing CSS selector targets, pass a string with a selector symbol.

Upon creation, each definition stored within the global variable 'allObjects'. If an element does not have an ID set, one will be dynamically created. All settings for an element are maintained in the stored definition. When an element is removed from the webview with the SDK API, its definition within the global variable is removed.

All objects are put into the global array as a singleton definition. As an example, a complex button is made up of a cap, bar and button. The complex button, when created has the passed ID applied. The sub cap, block and button would get a dynamically set ID and also placed into the global variable as a separate, singleton definition. This allows sub elements of larger elements to be manipulated separately while still maintaining the original 'copy' of the whole element stored under the complex button ID.


`allObjects = {	`<br>

	btn_LCARS:{
		type:'button',
		color:'red',
		appendTo:'#customWrapper',
		label:'alert',
		click:swapAlerts,
		tap:swapAlerts
	},
	elbow_hideUI:{
		type:'elbow',
		color:'blue',
		appendTo:'.templateFrame.typeA .dialog.typeB',
		label:'hide ui',
		version:'topLeft',
		click:hideUI,
		tap:hideUI
	}
`}`<br>

`//Access definition directly`<br>
`allObjects.btn_lcars`<br>
`allObjects.btn_lcars.type`<br>

`//Retrieve full definition via $.fn`<br>
`$(element).getDefinition(); => Get {} else false`<br>

`//Retrieve direct chilren via $.fn`<br>
`$(element).getChildren(); => Array - [{type:'button', label:'bleh'}, {type:'block', color:'red'}] - Returns children definitions `<br>
`$(element).getChildren(true); => Array - ['block_13', 'btn_ClickMe'] - Returns children IDs `<br>
