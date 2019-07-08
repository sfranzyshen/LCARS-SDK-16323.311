This is an **archive** and my (not the developer) **personal workspace** of the LCARS-SDK source code and wiki. Refer to the sub directory for each version for more information. This archive is here to support our (IFL) work, share our changes, and to allow others direct access to older versions of the sdk<br>

### This is only here for reference. Please see the original project found [Here](https://github.com/Aricwithana/LCARS-SDK)

The LCARS SDK is a development kit and environment umbrella designed specifically for generating canon quality and functional interfaces with the LCARS methodology within a webview.  Utilizing a webview the LCARS SDK can be applied to cross-modern internet browsers and both mobile and desktop applications.  Anywhere a webview is in place the SDK could be used.

-----------------------------------------------------------------------------------------------------------------------------------------
### [LCARS-SDK Wiki Archive *(for all versions)*](https://github.com/sfranzyshen/LCARS-SDK-ARCHIVE/wiki)

## 15088.21 (0a7775a)
[Source Archive](https://github.com/sfranzyshen/LCARS-SDK-ARCHIVE/tree/gh-pages/15088.21) *(My copy of source code may differ form original material)*<br>
[Wiki Archive](https://github.com/sfranzyshen/LCARS-SDK-ARCHIVE/wiki/15088.21-TOC)
##### LIVE DEMOS
[Astrometric Analysis](https://sfranzyshen.github.io/LCARS-SDK-ARCHIVE/15088.21/interfaces/astrometric_analysis_deif/)<br>
[Shield Status](https://sfranzyshen.github.io/LCARS-SDK-ARCHIVE/15088.21/interfaces/voyager_shield_status/)<br>
[Warpcore](https://sfranzyshen.github.io/LCARS-SDK-ARCHIVE/15088.21/interfaces/warpcore/)<br>
[Feed Reader](https://sfranzyshen.github.io/LCARS-SDK-ARCHIVE/15088.21/interfaces/reader_feed/)<br>
##### DOMod based
Captains Chair [Video](https://sfranzyshen.github.io/LCARS-SDK-ARCHIVE/15088.21/interfaces/captains-chair-15130.1/index.webm), [Demo](https://sfranzyshen.github.io/LCARS-SDK-ARCHIVE/15088.21/interfaces/captains-chair-15130.1/index.html) *(right click -> inspect ... then right click -> reload to get audio and interactivness working)*<br>

## 16323.311 (d14623d)
[Source Archive](https://github.com/sfranzyshen/LCARS-SDK-ARCHIVE/tree/gh-pages/16323.311) *(My copy of source code may differ form original material)*<br>
[Wiki Archive](https://github.com/sfranzyshen/LCARS-SDK-ARCHIVE/wiki/16323.311-TOC)
##### LIVE DEMOS
[Hardcoded](https://sfranzyshen.github.io/LCARS-SDK-ARCHIVE/16323.311/interfaces/hardcode/)<br>
[Color Generator](https://sfranzyshen.github.io/LCARS-SDK-ARCHIVE/16323.311/interfaces/color-generator/)<br>
[Color Rotation](https://sfranzyshen.github.io/LCARS-SDK-ARCHIVE/16323.311/interfaces/color-rotation/)<br>
[Visual Guide](https://sfranzyshen.github.io/LCARS-SDK-ARCHIVE/16323.311/interfaces/visual-guide/)<br>

## 19182.4 (ed33827)
[Source Archive](https://github.com/sfranzyshen/LCARS-SDK-ARCHIVE/tree/gh-pages/19182.4) *(My copy of source code may differ form original material)*<br>
[Developer Wiki](https://github.com/Aricwithana/LCARS-SDK/wiki)
##### LIVE DEMOS
- [x] [Hardcoded](https://sfranzyshen.github.io/LCARS-SDK-ARCHIVE/19182.4/interfaces/hardcode/)
- [x] [Color Generator](https://sfranzyshen.github.io/LCARS-SDK-ARCHIVE/19182.4/interfaces/color-generator/)
- [ ] [Color Rotation](https://sfranzyshen.github.io/LCARS-SDK-ARCHIVE/19182.4/interfaces/color-rotation/)
- [ ] [Visual Guide](https://sfranzyshen.github.io/LCARS-SDK-ARCHIVE/19182.4/interfaces/visual-guide/)

#### ALTERNATE DEPLOYMENT MODELS
We are hosting our deployment models right here on github ... so that everyone has access to them!

##### Internet Deployment:
To use this model take a look at the [blank template here](https://github.com/sfranzyshen/LCARS-SDK-ARCHIVE/blob/gh-pages/19182.4/interfaces/index.html)<br>

By adding the code snippit below to your interface ... you can deploy to the internet without downloading or hosting any other files besides your interface html, javascript and css files. Everything else is host in the cloud ... and fast!
```html
<!-- LCARS SDK 19182.4
- This file is a part of the LCARS SDK.
- https://github.com/AricwithanA/LCARS-SDK/blob/master/LICENSE.md
- For more information please go to http://www.lcarssdk.org.
-->
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery-touch-events/2.0.0/jquery.mobile-events.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/arrive/2.4.1/arrive.min.js"></script>
<script type="text/javascript" src="https://sfranzyshen.github.io/LCARS-SDK-ARCHIVE/19182.4/lcars-sdk-19182.4.js"></script>
<link rel="stylesheet" type="text/css" href="https://sfranzyshen.github.io/LCARS-SDK-ARCHIVE/19182.4/lcars-sdk-19182.4.css">
```
##### OFFLINE Deployment:
By downloading all dependency javascript files locally a offline deployment model can be created for a kiosk or as a native app (using NW.js, Electron, PhoneGap, etc)

[Here Is a convenient archive - lcars-sdk-19182.4.zip](https://github.com/sfranzyshen/LCARS-SDK-ARCHIVE/raw/gh-pages/19182.4/lcars-sdk-19182.4.zip)<br>
Incase you need support for a font format other than woff2 [here are the rest of the fonts - lcars-sdk-fonts-19182.4.zip](https://github.com/sfranzyshen/LCARS-SDK-ARCHIVE/raw/gh-pages/19182.4/lcars-sdk-fonts-19182.4.zip)

And finally here is a comparison showing the performance gains when using the combinded files and embedded web fonts
![Performance Comparison](https://sfranzyshen.github.io/LCARS-SDK-ARCHIVE/19182.4/compare.png "Performance Comparison")

