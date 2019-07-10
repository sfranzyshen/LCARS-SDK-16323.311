<p>This addon creates a horizontal or vertical bar with a cap which animates based upon the passed value.  If the setting labelLink is enabled, the current label in use will auto update with the value number.</p>

<p>The bar works with a value of 0-100 so convert your number to a percentage.  A min-width/height of the child bar element of 40px is the SDK standard.</p>

<p>If no template parameter is supplied the default will be utilized.</p>


 * type                 - String, REQUIRED - 'levelBar'
 * id			- String
 * label		- String
 * direction		- String - 'reverse'
 * orient		- String - 'vertical'
 * color		- String
 * level		- Int - percentage
 * labelLink            - String - 'label', 'altlabel'
 * template		- Array, {type:'wrapper', class:'sdk widget levelBar typeA', children:[{type:'bar'}, {type:'cap'}]} - LCARS.templates.sdk.levelBar.typeA
		

<pre class="code hidden">
//Sample Definitions
var def = {type:'levelBar', label:'50', color:'bg-blue-1', level:50, labelLink:'label'}

//Create Object from Definition
$(def).createObject({});

</pre>

