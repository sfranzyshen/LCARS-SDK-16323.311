<div class="description">
<p>One of the trademarks of LCARS is its use of color.  Many fans have created assortments of color patterns, values and groups based off the original work from Mr. Okuda and Mr. Drexler.  Even more, many of the canon interfaces are backlit and not monitor based RGB making color translation a bit of a pickle.</p>

<p>The SDK does not include any pre-packaged colors except a standard grey (#505050) white and transparent.  All colors used within a project are setup by the developer using whatever color names they prefer to represent their chosen color code values.</p> 

<p>Border color is include in the color settings because Elbows, for their innerRadius, use a border trick to enable a reverse-border-radius.  </p>

<p>Color sets should be the last thing in a projects CSS file mainly to ensure proper overriding with the typical color flashes, changes and states.  Inherited colors go before the direct color placement.</p>
</div>

<pre class="code hidden">

.grey>.bar, .grey>.block, .grey>.button, .grey>.cap{background-color:#505050; border-color:#505050;}
.white>.bar, .white>.block, .white>.button, .white>.cap{background-color:#ffffff; border-color:#ffffff;}
.transparent>.bar, .transparent>.block, .transparent>.button, .transparent>.cap{background-color:transparent; border-color:transparent;}

.grey:not(.complexButton){background-color:#505050; border-color:#505050;}
.white:not(.complexButton){background-color:#ffffff; border-color:#ffffff;}
.transparent:not(.complexButton){background-color:transparent; border-color:transparent;}

//Sample object definition.
{type:'button', label:'text', color:'burnt-orange'}

//translates to DOM Object:
&lt;div class="button" data-type="button" data-label="text" data-color="burnt orange"&gt;&lt;/div&gt;

//Set-Get-Clear
$(element).objectColor() => Get
$(element).objectColor('red'); => Set

$(element).objectColor(['red', 'burnt orange', 'blue']); => Set randomly selected color from array

var colorArray = ['red', 'burnt orange', 'blue'];
$(element).objectColor(colorArray); => Set randomly selected color from array

$(element).objectColor('remove'); => Remove
</pre> 