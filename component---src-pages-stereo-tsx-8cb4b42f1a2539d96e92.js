(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"9Ew8":function(n,e,r){"use strict";r.r(e);r("a1Th"),r("Btvt"),r("xfY5");var o=r("q1tI"),t=r.n(o),a=r("vOnD"),c=r("cosw"),l=r("Nn3z");e.default=function(){var n=Object(o.useState)(""),e=n[0],r=n[1],a=Object(o.useState)(1),s=a[0],g=a[1],b=new FileReader;return t.a.createElement(c.a,null,t.a.createElement(l.a,null,"Check Stereo"),t.a.createElement(i,null,t.a.createElement("img",{src:e.toString()}),t.a.createElement(u,{theme:{offset:s,image:e.toString()}})),t.a.createElement("input",{type:"file",onChange:function(n){var e=n.currentTarget.files[0];b.readAsDataURL(e),b.onload=function(){r(b.result),console.log(b.result)}}}),t.a.createElement("input",{type:"range",onChange:function(n){var e=Number(n.currentTarget.value);console.log(e),g(e)},min:1,value:s,max:420}))};var i=a.d.div.withConfig({componentId:"sc-15qw4m1-0"})(["width:480px;height:auto;position:relative;img{display:block;width:100%;opacity:0;}"]),u=a.d.div.withConfig({componentId:"sc-15qw4m1-1"})(["display:block;width:100%;position:absolute;top:0;left:0;width:100%;height:100%;background:url(",") no-repeat left top,url(",") no-repeat ","px top;background-size:100%;will-change:background;transform:translate3d(0);background-blend-mode:difference;"],(function(n){return n.theme.image}),(function(n){return n.theme.image}),(function(n){return n.theme.offset||1}))},cosw:function(n,e,r){"use strict";r("tUrg");var o=r("q1tI"),t=r.n(o),a=r("vOnD"),c=r("fGkQ"),l=r("JaMa");function i(){var n=s(["\n      font-size: 14px;\n    "]);return i=function(){return n},n}function u(){var n=s(["\n  body, html {\n    ","\n    ","\n    margin: 0;\n    width: 100vw;\n    min-height: 100vh;\n  }\n\n  * {\n    box-sizing: border-box;\n  }\n\n  h1, h2, h3, h4, h5, h6 {\n    margin: 0;\n  }\n\n  p {\n    font-size: 16px;\n    line-height: 1.5;\n    color: ",";\n    margin: 10px 0;\n\n    &:first-child {\n      margin-top: 0;\n    }\n\n    &:last-child {\n      margin-bottom: 0;\n    }\n\n    ","\n  }\n\n  a {\n    color: ",";\n    text-decoration: none;\n    font-weight: 500;\n    ","\n    \n    &:hover {\n      ","\n    }\n  }\n"]);return u=function(){return n},n}function s(n,e){return e||(e=n.slice(0)),n.raw=e,n}e.a=function(n){return t.a.createElement(g,null,t.a.createElement(b,null),n.children)};var g=a.d.div.withConfig({componentId:"sc-19a4ta8-0"})(["width:100%;min-height:100%;background:",";"],c.b.CSS.bg),b=Object(a.b)(u(),c.c,c.a,c.b.CSS.text,l.a.Phone(i()),c.b.CSS.link,Object(c.d)({color:c.b.CSS.blue20,position:1.2}),Object(c.d)({color:c.b.CSS.blue60,position:1.2}))},fGkQ:function(n,e,r){"use strict";r.d(e,"c",(function(){return t})),r.d(e,"b",(function(){return a})),r.d(e,"a",(function(){return c})),r.d(e,"d",(function(){return l}));var o=r("vOnD"),t=Object(o.c)(["font-family:'Montserrat',sans-serif;"]),a={Black:function(n){return void 0===n&&(n=100),"rgba(0, 0, 0, "+.01*n+")"},White:function(n){return void 0===n&&(n=100),"rgba(255, 255, 255, "+.01*n+")"},Blue:function(n){return void 0===n&&(n=100),"rgba(0, 166, 200, "+.01*n+")"},Gray100:"#FAFAFA",CSS:{gray10:"var(--colors-gray10)",gray20:"var(--colors-gray20)",gray40:"var(--colors-gray40)",gray60:"var(--colors-gray60)",gray80:"var(--colors-gray80)",blue:"var(--colors-blue)",blue20:"var(--colors-blue20)",blue40:"var(--colors-blue40)",blue60:"var(--colors-blue60)",blue80:"var(--colors-blue80)",bg:"var(--colors-bg)",text:"var(--colors-text)",link:"var(--colors-link)"}},c=Object(o.c)(["--colors-bg:",";--colors-text:",";--colors-link:",";--colors-blue:",";--colors-blue20:",";--colors-blue40:",";--colors-blue60:",";--colors-blue80:",";--colors-gray10:",";--colors-gray20:",";--colors-gray40:",";--colors-gray60:",";--colors-gray80:",";@media (","){--colors-bg:",";--colors-text:",";--colors-gray10:",";--colors-gray20:",";--colors-gray40:",";--colors-gray60:",";--colors-gray80:",";}"],a.Gray100,a.Black(90),a.Blue(),a.Blue(),a.Blue(20),a.Blue(40),a.Blue(60),a.Blue(80),a.Black(10),a.Black(20),a.Black(40),a.Black(60),a.Black(80),"prefers-color-scheme: dark",a.Black(90),a.White(90),a.White(10),a.White(20),a.White(40),a.White(60),a.White(80)),l=function(n){var e=n.color,r=void 0===e?"currentColor":e,t=n.position,a=void 0===t?1.05:t;return Object(o.c)(["background-image:linear-gradient(to right,"," 100%,"," 0%);background-position:0 ","em;background-repeat:repeat-x;background-size:1px 0.5px;"],r,r,a)}},tUrg:function(n,e,r){"use strict";r("OGtf")("link",(function(n){return function(e){return n(this,"a","href",e)}}))}}]);
//# sourceMappingURL=component---src-pages-stereo-tsx-8cb4b42f1a2539d96e92.js.map