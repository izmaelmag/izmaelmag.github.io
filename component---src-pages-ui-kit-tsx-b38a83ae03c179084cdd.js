(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"/8I9":function(e,n,t){var r=t("q1tI");function o(e){return r.createElement("svg",e,r.createElement("path",{d:"M0.505492 8.6832C0.612692 8.5512 0.792692 8.5024 0.951092 8.5592C1.39509 8.7184 1.87669 8.8 2.38389 8.8C4.81029 8.8 6.78389 6.8256 6.78389 4.4C6.78389 2.94 6.06309 1.5808 4.85589 0.7632C4.71909 0.6704 4.65349 0.5032 4.69029 0.3424C4.72709 0.1816 4.85909 0.06 5.02309 0.036C5.21029 0.0088 5.39669 0 5.58389 0C8.89269 0 11.5839 2.6912 11.5839 6C11.5839 9.3088 8.89269 12 5.58389 12C3.48389 12 1.57349 10.9328 0.475093 9.1456C0.386293 9.0008 0.399092 8.816 0.505492 8.6832Z",fill:"currentColor"}))}o.defaultProps={width:"12",height:"12",viewBox:"0 0 12 12",fill:"none"},e.exports=o,o.default=o},cosw:function(e,n,t){"use strict";t("tUrg");var r=t("q1tI"),o=t.n(r),i=t("vOnD"),a=t("fGkQ"),l=t("JaMa");function c(){var e=s(["\n      font-size: 14px;\n    "]);return c=function(){return e},e}function u(){var e=s(["\n  body, html {\n    ","\n    ","\n    margin: 0;\n    width: 100vw;\n    min-height: 100vh;\n  }\n\n  * {\n    box-sizing: border-box;\n  }\n\n  h1, h2, h3, h4, h5, h6 {\n    margin: 0;\n  }\n\n  p {\n    font-size: 16px;\n    line-height: 1.5;\n    color: ",";\n    margin: 10px 0;\n\n    &:first-child {\n      margin-top: 0;\n    }\n\n    &:last-child {\n      margin-bottom: 0;\n    }\n\n    ","\n  }\n\n  a {\n    color: ",";\n    text-decoration: none;\n    font-weight: 500;\n    ","\n    \n    &:hover {\n      ","\n    }\n  }\n"]);return u=function(){return e},e}function s(e,n){return n||(n=e.slice(0)),e.raw=n,e}n.a=function(e){return o.a.createElement(g,null,o.a.createElement(h,null),e.children)};var g=i.d.div.withConfig({componentId:"sc-19a4ta8-0"})(["width:100%;min-height:100%;background:",";"],a.b.CSS.bg),h=Object(i.b)(u(),a.c,a.a,a.b.CSS.text,l.a.Phone(c()),a.b.CSS.link,Object(a.d)({color:a.b.CSS.blue20,position:1.2}),Object(a.d)({color:a.b.CSS.blue60,position:1.2}))},f1EV:function(e,n,t){"use strict";t.r(n);var r=t("q1tI"),o=t.n(r),i=t("vOnD"),a=t("cosw"),l=t("fGkQ"),c=i.d.div.withConfig({componentId:"sc-397p3a-0"})(["display:flex;align-items:center;"]),u=i.d.button.withConfig({componentId:"sc-397p3a-1"})(["position:relative;width:","px;height:24px;padding:4px;border:none;border-radius:14px;background:",";cursor:pointer;"],(function(e){return e.theme.withText?62:48}),l.b.CSS.gray20),s=i.d.div.withConfig({componentId:"sc-397p3a-2"})(["position:absolute;top:3px;left:3px;width:","px;height:18px;border-radius:9px;transform:translateX(","px);background:",";transition:all .15s cubic-bezier(.8,0,.2,1);text-transform:uppercase;line-height:18px;font-size:10px;font-weight:600;color:",";"],(function(e){return e.theme.withText?32:18}),(function(e){return e.theme.isActive?24:0}),(function(e){return e.theme.isActive?l.b.CSS.blue:l.b.CSS.gray60}),l.b.CSS.bg),g=i.d.span.withConfig({componentId:"sc-397p3a-3"})(["font-size:12px;color:",";margin-right:8px;"],l.b.CSS.text),h=i.d.div.withConfig({componentId:"sc-397p3a-4"})(["width:12px;height:12px;position:absolute;top:2px;left:3px;svg{width:100%;height:100%;}"]),d=function(e){var n=e.onChange,t=e.withText,a=e.state,l=e.label,d=e.children,b=Object(r.useState)(a),p=b[0],f=b[1];return o.a.createElement(i.a,{theme:{isActive:p,withText:t}},o.a.createElement(c,null,l&&o.a.createElement(g,null,l),o.a.createElement(u,{onClick:function(){f(!p),n(!p)}},o.a.createElement(s,null,t&&o.a.createElement("span",null,p?"On":"Off"),o.a.createElement(h,null,d)))))},b=function(e){var n=e.children,t=e.title;return o.a.createElement(p,null,t&&o.a.createElement(f,null,t),n)},p=i.d.div.withConfig({componentId:"sc-1i7qwbl-0"})(["margin:16px 0;padding:16px;border:1px solid ",";border-radius:6px;position:relative;&:first-child{margin-top:0;}&:last-child{margin-bottom:0;}"],l.b.CSS.gray20),f=i.d.div.withConfig({componentId:"sc-1i7qwbl-1"})(["position:absolute;top:-8px;left:12px;background:",";color:",";padding:0 4px;font-size:10px;font-weight:600;text-transform:uppercase;line-height:1;"],l.b.CSS.bg,l.b.CSS.text),m=i.d.hr.withConfig({componentId:"sc-1i7qwbl-2"})(["margin:16px 0;border:none;height:1px;background:",";"],l.b.CSS.gray10),x=t("/8I9"),v=t.n(x),C=function(){return o.a.createElement(b,{title:"Toggle"},o.a.createElement(d,{onChange:console.log}),o.a.createElement(m,null),o.a.createElement(d,{label:"With label",onChange:console.log}),o.a.createElement(m,null),o.a.createElement(d,{label:"With text",withText:!0,onChange:console.log}),o.a.createElement(m,null),o.a.createElement(d,{label:"With icon",onChange:console.log},o.a.createElement(v.a,null)))},w=(n.default=function(){return o.a.createElement(a.a,null,o.a.createElement(w,null,o.a.createElement(C,null)))},i.d.div.withConfig({componentId:"lfzrqj-0"})(["padding:32px;min-height:100vh;background:",";"],l.b.CSS.bg))},fGkQ:function(e,n,t){"use strict";t.d(n,"c",(function(){return o})),t.d(n,"b",(function(){return i})),t.d(n,"a",(function(){return a})),t.d(n,"d",(function(){return l}));var r=t("vOnD"),o=Object(r.c)(["font-family:'Montserrat',sans-serif;"]),i={Black:function(e){return void 0===e&&(e=100),"rgba(0, 0, 0, "+.01*e+")"},White:function(e){return void 0===e&&(e=100),"rgba(255, 255, 255, "+.01*e+")"},Blue:function(e){return void 0===e&&(e=100),"rgba(0, 166, 200, "+.01*e+")"},Gray100:"#FAFAFA",CSS:{gray10:"var(--colors-gray10)",gray20:"var(--colors-gray20)",gray40:"var(--colors-gray40)",gray60:"var(--colors-gray60)",gray80:"var(--colors-gray80)",blue:"var(--colors-blue)",blue20:"var(--colors-blue20)",blue40:"var(--colors-blue40)",blue60:"var(--colors-blue60)",blue80:"var(--colors-blue80)",bg:"var(--colors-bg)",text:"var(--colors-text)",link:"var(--colors-link)"}},a=Object(r.c)(["--colors-bg:",";--colors-text:",";--colors-link:",";--colors-blue:",";--colors-blue20:",";--colors-blue40:",";--colors-blue60:",";--colors-blue80:",";--colors-gray10:",";--colors-gray20:",";--colors-gray40:",";--colors-gray60:",";--colors-gray80:",";@media (","){--colors-bg:",";--colors-text:",";--colors-gray10:",";--colors-gray20:",";--colors-gray40:",";--colors-gray60:",";--colors-gray80:",";}"],i.Gray100,i.Black(90),i.Blue(),i.Blue(),i.Blue(20),i.Blue(40),i.Blue(60),i.Blue(80),i.Black(10),i.Black(20),i.Black(40),i.Black(60),i.Black(80),"prefers-color-scheme: dark",i.Black(90),i.White(90),i.White(10),i.White(20),i.White(40),i.White(60),i.White(80)),l=function(e){var n=e.color,t=void 0===n?"currentColor":n,o=e.position,i=void 0===o?1.05:o;return Object(r.c)(["background-image:linear-gradient(to right,"," 100%,"," 0%);background-position:0 ","em;background-repeat:repeat-x;background-size:1px 0.5px;"],t,t,i)}},tUrg:function(e,n,t){"use strict";t("OGtf")("link",(function(e){return function(n){return e(this,"a","href",n)}}))}}]);
//# sourceMappingURL=component---src-pages-ui-kit-tsx-b38a83ae03c179084cdd.js.map