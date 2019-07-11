This is an **archive** and my (not the developer) **personal workspace** of the LCARS-SDK source code and wiki. Refer to the sub directory for each version for more information. This archive is here to support our (IFL) work, share our changes, and to allow others direct access to older versions of the sdk<br>

### This is only here for reference. Please see the original project found [Here](https://github.com/Aricwithana/LCARS-SDK)

The LCARS SDK is a development kit and environment umbrella designed specifically for generating canon quality and functional interfaces with the LCARS methodology within a webview.  Utilizing a webview the LCARS SDK can be applied to cross-modern internet browsers and both mobile and desktop applications.  Anywhere a webview is in place the SDK could be used.

----------------------------------------------------------------------------------------------------------------------------------------
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

And finally [here](https://sfranzyshen.github.io/LCARS-SDK-ARCHIVE/19182.4/compare.png "Performance Comparison") is a comparison showing the performance gains when using the combinded files and embedded web fonts ...
----------------------------------------------------------------------------------------------------------------------------------------
### [LCARS-SDK Wiki Archive *(for all versions)*](https://github.com/sfranzyshen/LCARS-SDK-ARCHIVE/wiki)
----------------------------------------------------------------------------------------------------------------------------------------
#### 14312.104 (e8cfaff)
----------------------------------------------------------------------------------------------------------------------------------------
[Changelog](https://raw.githubusercontent.com/Aricwithana/LCARS-SDK/9ae172e96acefed20ccc7177c77bade6c24af612/lcarssdk/CHANGELOG.md)<br>
[Wiki Diff](https://github.com/Aricwithana/LCARS-SDK/wiki/_compare/769616aca96f585868c0e2d86b9a4caa0c2992db...9736d87ecb4bc3864310e2c81cd504e8091d8271)<br>
[SDK Diff](https://github.com/Aricwithana/LCARS-SDK/compare/e8cfaff74d83283dad2acb90955658925e67985e...9ae172e96acefed20ccc7177c77bade6c24af612)<br>
----------------------------------------------------------------------------------------------------------------------------------------
#### 14333.2 (9ae172e)
----------------------------------------------------------------------------------------------------------------------------------------
#### 15056.205 (fe3770f)
----------------------------------------------------------------------------------------------------------------------------------------
[Changelog](https://raw.githubusercontent.com/Aricwithana/LCARS-SDK/0a7775ac6ee1b8715e55e82c96bffc94ffc53336/lcarssdk/CHANGELOG.md)<br>
[Wiki Diff](https://github.com/Aricwithana/LCARS-SDK/wiki/_compare/a0ee949fe4725b9f98d9fb03ed19778ae048f6d4...bb4b7d73112b21462c26f8394688b7a71bb225c7)<br>
[SDK Diff](https://github.com/Aricwithana/LCARS-SDK/compare/fe3770fe21be65a675861c469c90f391e610b2da...0a7775ac6ee1b8715e55e82c96bffc94ffc53336)<br>
----------------------------------------------------------------------------------------------------------------------------------------
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
----------------------------------------------------------------------------------------------------------------------------------------
[Changelog](https://raw.githubusercontent.com/Aricwithana/LCARS-SDK/125bcf16998bffef34643b234d7b461a280c9e5d/lcarssdk/CHANGELOG.md)<br>
[Wiki Diff Skipped?](	https://github.com/Aricwithana/LCARS-SDK/wiki/_compare/bb4b7d73112b21462c26f8394688b7a71bb225c7...4ee825b3c54b3a0233926167296936d8de53170e)<br>
[SDK Diff](https://github.com/Aricwithana/LCARS-SDK/compare/0a7775ac6ee1b8715e55e82c96bffc94ffc53336...125bcf16998bffef34643b234d7b461a280c9e5d)<br>
----------------------------------------------------------------------------------------------------------------------------------------
#### 16098.3 (125bcf1)
----------------------------------------------------------------------------------------------------------------------------------------
[Changelog](https://raw.githubusercontent.com/Aricwithana/LCARS-SDK/3f4c93d81a0a96582a0163cb4158d19f70d1a207/lcarssdk/CHANGELOG.md)<br>
[Wiki Diff](https://github.com/Aricwithana/LCARS-SDK/wiki/_compare/4ee825b3c54b3a0233926167296936d8de53170e...ff8def95fbbc4e4cc68f08582cd007922fdbbceb)<br>
[SDK Diff](https://github.com/Aricwithana/LCARS-SDK/compare/125bcf16998bffef34643b234d7b461a280c9e5d...3f4c93d81a0a96582a0163cb4158d19f70d1a207)<br>
----------------------------------------------------------------------------------------------------------------------------------------
#### 16276.31 (3f4c93d)
----------------------------------------------------------------------------------------------------------------------------------------
[Changelog](https://raw.githubusercontent.com/Aricwithana/LCARS-SDK/d14623d43f435a598a89434df1f8416cce8c4656/lcarssdk/CHANGELOG.md)<br>
[Wiki Diff](https://github.com/Aricwithana/LCARS-SDK/wiki/_compare/ff8def95fbbc4e4cc68f08582cd007922fdbbceb...8251400dc3bbb8ec087a1760b644126812a057ad)<br>
[SDK Diff](https://github.com/Aricwithana/LCARS-SDK/compare/3f4c93d81a0a96582a0163cb4158d19f70d1a207...d14623d43f435a598a89434df1f8416cce8c4656)<br>
----------------------------------------------------------------------------------------------------------------------------------------
## 16323.311 (d14623d)
[Source Archive](https://github.com/sfranzyshen/LCARS-SDK-ARCHIVE/tree/gh-pages/16323.311) *(My copy of source code may differ form original material)*<br>
[Wiki Archive](https://github.com/sfranzyshen/LCARS-SDK-ARCHIVE/wiki/16323.311-TOC)
##### LIVE DEMOS
[Hardcoded](https://sfranzyshen.github.io/LCARS-SDK-ARCHIVE/16323.311/interfaces/hardcode/)<br>
[Color Generator](https://sfranzyshen.github.io/LCARS-SDK-ARCHIVE/16323.311/interfaces/color-generator/)<br>
[Color Rotation](https://sfranzyshen.github.io/LCARS-SDK-ARCHIVE/16323.311/interfaces/color-rotation/)<br>
[Visual Guide](https://sfranzyshen.github.io/LCARS-SDK-ARCHIVE/16323.311/interfaces/visual-guide/)<br>
----------------------------------------------------------------------------------------------------------------------------------------
[Changelog](https://raw.githubusercontent.com/Aricwithana/LCARS-SDK/ed338276ba8fd608c3781cf57ff311ecdc791ac4/lcars-sdk/CHANGELOG.md)<br>
[Wiki Diff](https://github.com/Aricwithana/LCARS-SDK/wiki/_compare/8251400dc3bbb8ec087a1760b644126812a057ad...c6d4938a5295735cdc1cc2987b83382a69f215da)<br>
[SDK Diff](https://github.com/Aricwithana/LCARS-SDK/compare/d14623d43f435a598a89434df1f8416cce8c4656...ed338276ba8fd608c3781cf57ff311ecdc791ac4)<br>
----------------------------------------------------------------------------------------------------------------------------------------
## 19182.4 (ed33827)
[Source Archive](https://github.com/sfranzyshen/LCARS-SDK-ARCHIVE/tree/gh-pages/19182.4) *(My copy of source code may differ form original material)*<br>
[Developer Wiki](https://github.com/Aricwithana/LCARS-SDK/wiki)
##### LIVE DEMOS
- [x] [Hardcoded](https://sfranzyshen.github.io/LCARS-SDK-ARCHIVE/19182.4/interfaces/hardcode/)
- [x] [Color Generator](https://sfranzyshen.github.io/LCARS-SDK-ARCHIVE/19182.4/interfaces/color-generator/)
- [ ] [Color Rotation](https://sfranzyshen.github.io/LCARS-SDK-ARCHIVE/19182.4/interfaces/color-rotation/)
- [ ] [Visual Guide](https://sfranzyshen.github.io/LCARS-SDK-ARCHIVE/19182.4/interfaces/visual-guide/)
----------------------------------------------------------------------------------------------------------------------------------------



