The LCARS SDK does not utilize the Helvetica Ultra Compressed font for it can not be bundled with the library because of cost and licensing issues.  Instead the LCARS SDK utilizes the font Antonio Bold by Vernon Adams via Font Squirrel.

https://www.fontsquirrel.com/fonts/antonio?q%5Bterm%5D=antonio+&q%5Bsearch_check%5D=Y

Antonio Bold is an almost match for the required visual style.  For the minor areas in which it deviates does not break the immersion of the methodology for the standard or advanced users.  While fan fonts have played a stopgap up until now, Antonio Bold will be the official font going forward.  This does not mean your projects can not use the correct font.  Simply replace the CSS font family file paths and tweak your line-heights accordingly.  

Included is a custom block font based on Antonio Bold.  It is only utilized for when when a sequence of characters is required to be monospaced for visual column alignment of the elements.  This is generally only needed for the larger characters seen between or on the ends of buttons.