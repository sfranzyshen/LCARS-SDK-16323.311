<div class="description">
<p>One of the trademarks of LCARS methodology is its use of color.  Many fans have created assortments of color patterns and color groups based off the original work from Mr. Okuda and Mr. Drexler.  Even more, many of the canon interfaces are backlit and not monitor based RGB making color translation a bit of a pickle.</p>

<p>The SDK does not include any pre-packaged colors.  All colors used within a project are setup by the developer using whatever color names they prefer to represent their chosen color code values.  The SDK uses the prefix 'bg-' for the color classes by default and it encouraged for others to do the same. Text also has color options using the 'text-' prefix for the color class.</p>  

<p>Border color is include in the color settings because Elbows, for their inner radius, use a border trick to enable a reverse-border-radius.</p>

<p>Color sets should be the last thing in a projects CSS file mainly to ensure proper overriding with the typical color flashes, changes and states.  Inherited colors go before the direct color placement.</p>
</div>

<p>There is an optional color theme provided width the SDK called the USS Not Affiliated, Aricwithana's personal color theme.  The theme utilizes eight primary colors (blue/green palette), and a couple of specific red and grey accessory colors.  Also included is a red alert variant when the class 'red-alert' is applied to the top most level of the interface.</p>

<p>Provided within the API is the function call LCARS.colorGen and LCARS.colorGroupGen which, when passed an array of color values and will return a random color from the array.  LCARS.colorGroupGen requires the color array and number of colors requested in an returned array.</p>

<pre class="code hidden">
/* Default Color CSS within lcarssdk.css */
[class*="bg-"],
[class*="bg-"] > *:not([class*="bg-"]){
	background-color:#999999;
	border-color:#999999;
}


/* Theme USS Not Affiliated */
.bg-blue-1,
.bg-blue-1 > *:not([class*="bg-"]){
	background-color:#99ccff;
	border-color:#99ccff;	
}

.text-blue-1{color:#99ccff;}

.red-alert .bg-blue-1,
.red-alert .bg-blue-1 > *:not([class*="bg-"]){
	background-color:#cccccc;
	border-color:#cccccc;	
}

.red-alert .text-blue-1{color:#ffff66;}

//Sample object definition.
{type:'button', label:'text', color:'burnt-orange'}

//translates to DOM Object:
&lt;div class="button bg-blue-1" data-label="label"&gt;&lt;/div&gt;

//Set-Get-Clear
$(element).objecSettings('color') => Get
$(element).objecSettings({color:'bg-blue-1'}); => Set

var colorArray = ['bg-blue-1', 'bg-blue-3', 'bg-green-4'];
$(element).objecSettings({color:LCARS.colorGen(colorArray)}); => Set randomly selected color from array
$(element).objecSettings({color:LCARS.colorGen(colorArray).replace('bg-', 'text-')}); => Set randomly selected color and swap it for a text color

$(element).objecSettings({color:null}); => Remove

LCARS.colorGen(['bg-blue-1', 'bg-green-3', 'bg-green-2', 'bg-blue-4']); => Returns a single string selection from passed array.
LCARS.colorGenGroup(['bg-blue-1', 'bg-green-3', 'bg-green-2', 'bg-blue-4'], 2); => Returns an array with a selection of colors matching the passed amount. ex: ['bg-green-3', 'bg-blue-4']
</pre> 