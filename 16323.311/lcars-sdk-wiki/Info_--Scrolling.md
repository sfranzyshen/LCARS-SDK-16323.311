<p>LCARS does not have scrollbars insofar as I can find.  This makes scrolling content a little trickier.  LCARS does have canon scroll buttons that can scroll content, included with the scroll button addon within the SDK.</p>

<p>Step argument is a pixel value.  Target pass an array of targets. </p>

<p>CSS Scrollbars have been disabled in all the browsers that support such a feature.  For multi-browser or for fancier scrolling utilize the following, very awesome 3rd party plugin: http://idangero.us/swiper/</p>

<pre>
$(element).scrollingUp({step:250, target:['body']});

$(element).scrollingDown({step:250, target:['body']});

$(element).scrollingLeft({step:250, target:['.content']});

$(element).scrollingRight({step:250, target:['#content1, #content2']});

</pre>
