<p>LCARS does not have scrollbars insofar as I can find.  This makes scrolling content a little trickier.  LCARS does have canon scroll buttons that can scroll content, included with the Scrollbutton Addon within the SDK.  Currently the mousewheel does not scroll content but may be allowed via the SDK in the future.</p>

<p>Step argument is a pixel value.  Target pass an array of targets. </p>

<pre>
$(element).scrollUp({step:250, target:['body']});

$(element).scrollDown({step:250, target:['body']});

$(element).scrollLeft({step:250, target:['.content']});

$(element).scrollRight({step:250, target:['#content1, #content2']});

</pre>
