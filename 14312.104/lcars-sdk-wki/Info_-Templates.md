<div class="description">
<p>Templates are easy to create for the SDK.  By passing an object array as the children parameter, complex LCARS layouts can be created in a single shot.  As an example, since there is not currently a Wordpress Plugin for the SDK, this website is a single variable template.  Most templates will start with a type 'wrapper' element.  Depending on the use, sometimes it is best to return a template during creation and then manipulate it before manual appending.  Other times it is easier to do it all at once.</p>

<p>Slimmed templates are used for complex buttons and their variants.  This is due to that the parent container is maintained within the LCARS.create logic.  These slimmed templates just need the included elements to generate.</p>

<p>The SDK provides two variables:  sdkTemplates and sdkAddonTemplates.  The first are templates that are just basic layout structure while the latter are template used specifically for addons.  Basic layout templates can just be used as a reference point for developers to create your own.</p>
</div>

<pre class="code hidden">
//Slimmed Template examples.
var complexButtons = {
        typeA:[{type:'button', version:'tabLeft'}, {type:'block'}],
        typeAR:[{type:'block'}, {type:'button', version:'tabRight'}],
        typeB:[{type:'cap', version:'left'}, {type:'button'}],
        typeBR:[{type:'button'}, {type:'cap', version:'right'}],
        typeC:[{type:'button'}, {type:'block'}, {type:'block'}],
        typeCR:[{type:'block'}, {type:'block'}, {type:'block'}],
        typeD:[{type:'cap', version:'left'}, {type:'button'}, {type:'block'}],
        typeDR:[{type:'block'}, {type:'button'}, {type:'cap', version:'right'}]                
    }

//Full Template
var dialogWindows = {
    typeA:{type:'wrapper', class:'sdk dialog typeA', children:[
            {type:'wrapper', class:'header', flex:'h', children:[{type:'cap', size:'small', version:'left'}, {type:'title', size:'half'}, {type:'bar', flexC:'h'}, {type:'cap', size:'small', version:'right'}]},
            {type:'wrapper', class:'footer', flex:'h', children:[{type:'cap', size:'small', version:'left'}, {type:'bar', flexC:'h'}, {type:'title', size:'half'}, {type:'cap', size:'small', version:'right'}]},
            {type:'wrapper', class:'content'}
        ]
    }
}

