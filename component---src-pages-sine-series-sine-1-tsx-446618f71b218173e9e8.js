(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"3nd3":function(e,t,n){"use strict";n("91GP");var i=n("q1tI"),r=n.n(i),a=n("vOnD"),s=n("aIsS"),c=n.n(s),o=n("jCbj"),u=n.n(o);function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var h=function(e){var t,n;function i(){for(var t,n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];return d(l(t=e.call.apply(e,[this].concat(i))||this),"canvasRef",r.a.createRef()),d(l(t),"state",{isFullscreen:!1}),d(l(t),"runSketch",(function(){var e=t.props.sketch;e?(e.setCanvas(t.canvasRef.current),e.run()):console.warn("Sketch is not provided")})),d(l(t),"toggleFullScreen",(function(){t.runSketch(),t.props.sketch.sizeSetup(),t.setState({isFullscreen:!t.state.isFullscreen})})),d(l(t),"componentDidUpdate",(function(){t.runSketch()})),t}n=e,(t=i).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var a=i.prototype;return a.componentDidMount=function(){this.runSketch()},a.render=function(){var e=this.state.isFullscreen,t=this.props,n=t.canvasProps,i=t.controls;return r.a.createElement(p,Object.assign({},this.props,{isFullscreen:e}),r.a.createElement("canvas",Object.assign({},n,{ref:this.canvasRef})),i.fullscreen&&r.a.createElement(M,{isFullscreen:e,onClick:this.toggleFullScreen}))},i}(r.a.Component);t.a=h;var p=a.d.div.withConfig({componentId:"rh2r59-0"})(["position:relative;"," canvas{position:absolute;top:0;left:0;width:100%;height:100%;}"],(function(e){var t=e.isFullscreen,n=e.bgColor,i=e.w,r=e.h;return t?Object(a.c)(["position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:100;background-color:",";"],(function(e){var t=e.theme;return n||t.background})):Object(a.c)(["width:",";height:",";"],i||"100%",r||"100%")})),M=a.d.button.withConfig({componentId:"rh2r59-1"})(["position:absolute;bottom:4px;right:4px;border:none;border-radius:4px;padding:0;width:32px;height:32px;transition:all .3s ease;cursor:pointer;opacity:0.75;"," background-color:",";&:hover{opacity:1;}"],(function(e){var t=e.isFullscreen;return Object(a.c)(["background:url(",") no-repeat center;background-size:32px;"],t?u.a:c.a)}),(function(e){return e.theme.gray}))},SsPF:function(e,t,n){"use strict";n.r(t);var i=n("q1tI"),r=n.n(i),a=n("vOnD"),s=n("w8Zf"),c=n("ksXw"),o=n("3nd3"),u=n("TbPc");n("91GP"),n("bHtr");function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var d=function(e){var t=this;l(this,"props",void 0),l(this,"render",(function(e){for(var t=e.ctx,n=e.vertices,i=e.center,r=e.radius,a=e.angle||Math.PI,s=0;s<n;s++){t.beginPath();var c=a+2*Math.PI/n*s,o=i.x+Math.sin(c)*r,u=i.y+Math.cos(c)*r;t.arc(o,u,4,0,2*Math.PI,!1),t.fill()}})),l(this,"update",(function(e){t.render(Object.assign({},t.props,{},e))})),this.props=e};function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var M=new(function(e){var t,n;function i(){for(var t,n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return p(h(t=e.call.apply(e,[this].concat(i))||this),"shapes",[]),p(h(t),"angle",0),p(h(t),"init",(function(){t.draw(),t.shapes.push(new d({center:{x:t.CW/2,y:t.CH/2},angle:Math.PI,vertices:10,radius:200,ctx:t.ctx})),t.shapes.push(new d({center:{x:t.CW/2,y:t.CH/2},angle:Math.PI/2,vertices:10,radius:150,ctx:t.ctx})),t.shapes.push(new d({center:{x:t.CW/2,y:t.CH/2},angle:Math.PI,vertices:10,radius:100,ctx:t.ctx})),t.shapes.push(new d({center:{x:t.CW/2,y:t.CH/2},angle:Math.PI/2,vertices:10,radius:50,ctx:t.ctx}))})),p(h(t),"draw",(function(e){var n=h(t),i=n.ctx,r=n.CW,a=n.CH,s=n.shapes;i.clearRect(0,0,r,a),t.angle+=Math.PI/360;s.forEach((function(e,n){n%2==0?(-1,i.fillStyle="red"):(1,i.fillStyle="white");var r=e.props.radius;e.update({radius:r+20*Math.sin(10*(t.angle+10*n))})})),window.requestAnimationFrame(t.draw)})),t}return n=e,(t=i).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,i}(u.a)),g=(t.default=function(){return r.a.createElement(c.a,{titleLink:"/sine-series",layoutTheme:s.b.dark,title:"Sine series"},r.a.createElement(g,null,r.a.createElement(o.a,{controls:{fullscreen:!0},sketch:M})))},a.d.div.withConfig({componentId:"aszlrf-0"})(["width:100%;height:640px;overflow:hidden;border-radius:4px;border:1px solid ",";"],(function(e){return e.theme.gray})))},TbPc:function(e,t,n){"use strict";function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}));var r=function(){function e(){var e=this;i(this,"canvas",void 0),i(this,"ctx",void 0),i(this,"CW",0),i(this,"CH",0),i(this,"isRun",!1),i(this,"resizeListener",void 0),i(this,"dt",0),i(this,"tau",2*Math.PI),i(this,"setCanvas",(function(t){e.canvas=t,e.ctx=t.getContext("2d")})),i(this,"tick",(function(t){return void 0===t&&(t=1),e.dt+=t})),i(this,"start",(function(){e.isRun=!0})),i(this,"sizeSetup",(function(){var t=e.canvas.clientWidth*window.devicePixelRatio,n=e.canvas.clientHeight*window.devicePixelRatio;e.ctx.canvas.width=e.CW=t,e.ctx.canvas.height=e.CH=n})),i(this,"onResize",(function(){e.sizeSetup()})),i(this,"run",(function(){e.canvas?(e.sizeSetup(),e.isRun||(e.isRun=!0,e.init()),e.resizeListener=window.addEventListener("resize",e.onResize)):console.warn("HTML Canvas element is not provided. Use setCanvas() method")}))}var t=e.prototype;return t.init=function(){alert("You must specify init() and draw() methods")},t.draw=function(){},e}()},aIsS:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9Inpvb21fb3V0X21hcF8yNHB4Ij4KPHBhdGggaWQ9Imljb24vbWFwcy96b29tX291dF9tYXBfMjRweCIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik01LjMwMDA1IDYuNzAwMDFMMyA5VjNIOUw2LjY5OTk1IDUuMjk5OTlMOS41ODk5NyA4LjE2OTk4TDguMTcwMDQgOS41OTAwM0w1LjMwMDA1IDYuNzAwMDFaTTE3LjMgNS4yOTk5OUwxNSAzSDIxVjlMMTguNzAwMSA2LjcwMDAxTDE1LjgzMDEgOS41OTAwM0wxNC40MSA4LjE2OTk4TDE3LjMgNS4yOTk5OVpNOSAyMUw2LjY5OTk1IDE4LjdMOS41ODk5NyAxNS44M0w4LjE3MDA0IDE0LjQxTDUuMzAwMDUgMTcuM0wzIDE1VjIxSDlaTTE4LjcwMDEgMTcuM0wyMSAxNVYyMUgxNUwxNy4zIDE4LjdMMTQuNDEgMTUuODNMMTUuODMwMSAxNC40MUwxOC43MDAxIDE3LjNaIiBmaWxsPSJibGFjayIgZmlsbC1vcGFjaXR5PSIwLjU0Ii8+CjwvZz4KPC9zdmc+Cg=="},bHtr:function(e,t,n){var i=n("XKFU");i(i.P,"Array",{fill:n("Nr18")}),n("nGyu")("fill")},jCbj:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9ImNyb3BfZGluXzI0cHgiPgo8cGF0aCBpZD0iaWNvbi9pbWFnZS9jcm9wX2Rpbl8yNHB4IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTUgM0gxOUMyMC4xIDMgMjEgMy44OTk5OSAyMSA1VjE5QzIxIDIwLjEgMjAuMSAyMSAxOSAyMUg1QzMuOTAwMDIgMjEgMyAyMC4xIDMgMTlWNUMzIDMuODk5OTkgMy45MDAwMiAzIDUgM1pNNSAxOUgxOVY1SDVWMTlaIiBmaWxsPSJibGFjayIgZmlsbC1vcGFjaXR5PSIwLjU0Ii8+CjwvZz4KPC9zdmc+Cg=="}}]);
//# sourceMappingURL=component---src-pages-sine-series-sine-1-tsx-446618f71b218173e9e8.js.map