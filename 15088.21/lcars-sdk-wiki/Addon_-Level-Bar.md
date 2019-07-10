<p>This addon creates a horizontal or vertical bar with a cap which animates based upon the passed value.  If the setting labelLink is enabled, the current label in use will auto update with the value number.</p>

<p>The bar works with a value of 0-100 so convert your number to a percentage.  If using a label ad a min-width of the child bar element (25px is a SDK standard).</p>

<p>Do not use the altLabel option with levelbars, only the Label setting is utilized here.</p>


 * type                 - String, REQUIRED - 'levelBar'
 * id			- String
 * label		- String
 * direction		- String - 'reverse'
 * orient		- String - 'vertical'
 * color		- String
 * level		- Int - percentage
 * labelLink            - Boolean - true
 * template		- Array, {type:'wrapper', class:'sdk widget levelBar typeA', children:[{type:'bar'}, {type:'cap'}]} - sdkAddonTemplates.levelBar.typeA
		

<pre class="code hidden">
//Sample Definitions
var def = {type:'levelBar', label:50, color:'primary4', level:50}

//Create Object from Definition
$(def).createObject({});

</pre>

