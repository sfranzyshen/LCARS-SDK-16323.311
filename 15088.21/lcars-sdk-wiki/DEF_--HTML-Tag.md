<div class="description">
<p>HTML Tag is a creation call that generate basic HTML markup.  Apply inline styles, attributes, styles and content and the like as you would any other object.  Net HTML markup using the children setting. </p>

</div>
<pre class="code">
//Sample Definitions
var def = {type:'htmlTag', tag:'p', children:'COMM SYSTEMS', appendTo:'body'}

//Create Object from Definition
$(def).createObject({});
 
 type			- String, REQUIRED, 'htmlTag'
 id			- String
 attrs			- Array, [{attr:'style', value:'top:10px; width:100%;'}]		
 class			- String
 children               - Object, [{type:'htmlTag', tag:'p', children:'I am child text for paragraph'}]
 children               - String, Raw HTML
</pre>