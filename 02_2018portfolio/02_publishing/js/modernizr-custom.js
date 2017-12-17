/*! modernizr 3.5.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-animation-cssanimations-cssfilters-filereader-formattribute-opacity-rgba-shapes-smil-supports-svg-svgfilters-textshadow-video-setclasses !*/
!function(e,t,n){function r(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):C?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function o(e){var t=w.className,n=Modernizr._config.classPrefix||"";if(C&&(t=t.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),C?w.className.baseVal=t:w.className=t)}function s(e,t){return typeof e===t}function a(){var e,t,n,r,o,a,i;for(var l in T)if(T.hasOwnProperty(l)){if(e=[],t=T[l],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(r=s(t.fn,"function")?t.fn():t.fn,o=0;o<e.length;o++)a=e[o],i=a.split("."),1===i.length?Modernizr[i[0]]=r:(!Modernizr[i[0]]||Modernizr[i[0]]instanceof Boolean||(Modernizr[i[0]]=new Boolean(Modernizr[i[0]])),Modernizr[i[0]][i[1]]=r),S.push((r?"":"no-")+i.join("-"))}}function i(e,t){return!!~(""+e).indexOf(t)}function l(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function u(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function c(t,n,r){var o;if("getComputedStyle"in e){o=getComputedStyle.call(e,t,n);var s=e.console;if(null!==o)r&&(o=o.getPropertyValue(r));else if(s){var a=s.error?"error":"log";s[a].call(s,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else o=!n&&t.currentStyle&&t.currentStyle[r];return o}function d(e,t){return function(){return e.apply(t,arguments)}}function f(e,t,n){var r;for(var o in e)if(e[o]in t)return n===!1?e[o]:(r=t[e[o]],s(r,"function")?d(r,n||t):r);return!1}function p(){var e=t.body;return e||(e=r(C?"svg":"body"),e.fake=!0),e}function m(e,n,o,s){var a,i,l,u,c="modernizr",d=r("div"),f=p();if(parseInt(o,10))for(;o--;)l=r("div"),l.id=s?s[o]:c+(o+1),d.appendChild(l);return a=r("style"),a.type="text/css",a.id="s"+c,(f.fake?f:d).appendChild(a),f.appendChild(d),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(t.createTextNode(e)),d.id=c,f.fake&&(f.style.background="",f.style.overflow="hidden",u=w.style.overflow,w.style.overflow="hidden",w.appendChild(f)),i=n(d,e),f.fake?(f.parentNode.removeChild(f),w.style.overflow=u,w.offsetHeight):d.parentNode.removeChild(d),!!i}function v(t,r){var o=t.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(u(t[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var s=[];o--;)s.push("("+u(t[o])+":"+r+")");return s=s.join(" or "),m("@supports ("+s+") { #modernizr { position: absolute; } }",function(e){return"absolute"==c(e,null,"position")})}return n}function y(e,t,o,a){function u(){d&&(delete A.style,delete A.modElem)}if(a=s(a,"undefined")?!1:a,!s(o,"undefined")){var c=v(e,o);if(!s(c,"undefined"))return c}for(var d,f,p,m,y,g=["modernizr","tspan","samp"];!A.style&&g.length;)d=!0,A.modElem=r(g.shift()),A.style=A.modElem.style;for(p=e.length,f=0;p>f;f++)if(m=e[f],y=A.style[m],i(m,"-")&&(m=l(m)),A.style[m]!==n){if(a||s(o,"undefined"))return u(),"pfx"==t?m:!0;try{A.style[m]=o}catch(h){}if(A.style[m]!=y)return u(),"pfx"==t?m:!0}return u(),!1}function g(e,t,n,r,o){var a=e.charAt(0).toUpperCase()+e.slice(1),i=(e+" "+V.join(a+" ")+a).split(" ");return s(t,"string")||s(t,"undefined")?y(i,t,r,o):(i=(e+" "+j.join(a+" ")+a).split(" "),f(i,t,n))}function h(e,t,r){return g(e,n,n,t,r)}var S=[],w=t.documentElement,C="svg"===w.nodeName.toLowerCase(),T=[],b={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){T.push({name:e,fn:t,options:n})},addAsyncTest:function(e){T.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=b,Modernizr=new Modernizr;var x="CSS"in e&&"supports"in e.CSS,E="supportsCSS"in e;Modernizr.addTest("supports",x||E),Modernizr.addTest("svg",!!t.createElementNS&&!!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect),Modernizr.addTest("filereader",!!(e.File&&e.FileList&&e.FileReader)),Modernizr.addTest("video",function(){var e=r("video"),t=!1;try{t=!!e.canPlayType,t&&(t=new Boolean(t),t.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),t.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),t.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""),t.vp9=e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/,""),t.hls=e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/,""))}catch(n){}return t}),Modernizr.addTest("formattribute",function(){var e,n=r("form"),o=r("input"),s=r("div"),a="formtest"+(new Date).getTime(),i=!1;n.id=a;try{o.setAttribute("form",a)}catch(l){t.createAttribute&&(e=t.createAttribute("form"),e.nodeValue=a,o.setAttributeNode(e))}return s.appendChild(n),s.appendChild(o),w.appendChild(s),i=n.elements&&1===n.elements.length&&o.form==n,s.parentNode.removeChild(s),i}),Modernizr.addTest("svgfilters",function(){var t=!1;try{t="SVGFEColorMatrixElement"in e&&2==SVGFEColorMatrixElement.SVG_FECOLORMATRIX_TYPE_SATURATE}catch(n){}return t}),Modernizr.addTest("webanimations","animate"in r("div")),Modernizr.addTest("rgba",function(){var e=r("a").style;return e.cssText="background-color:rgba(150,255,150,.5)",(""+e.backgroundColor).indexOf("rgba")>-1});var _=b._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];b._prefixes=_,Modernizr.addTest("opacity",function(){var e=r("a").style;return e.cssText=_.join("opacity:.55;"),/^0.55$/.test(e.opacity)});var P={}.toString;Modernizr.addTest("smil",function(){return!!t.createElementNS&&/SVGAnimate/.test(P.call(t.createElementNS("http://www.w3.org/2000/svg","animate")))});var N={elem:r("modernizr")};Modernizr._q.push(function(){delete N.elem});var A={style:N.elem.style};Modernizr._q.unshift(function(){delete A.style});var z="Moz O ms Webkit",V=b._config.usePrefixes?z.split(" "):[];b._cssomPrefixes=V;var j=b._config.usePrefixes?z.toLowerCase().split(" "):[];b._domPrefixes=j;var k=b.testProp=function(e,t,r){return y([e],n,t,r)};Modernizr.addTest("textshadow",k("textShadow","1px 1px")),b.testAllProps=g,b.testAllProps=h,Modernizr.addTest("cssfilters",function(){if(Modernizr.supports)return h("filter","blur(2px)");var e=r("a");return e.style.cssText=_.join("filter:blur(2px); "),!!e.style.length&&(t.documentMode===n||t.documentMode>9)}),Modernizr.addTest("shapes",h("shapeOutside","content-box",!0)),Modernizr.addTest("cssanimations",h("animationName","a",!0)),a(),o(S),delete b.addTest,delete b.addAsyncTest;for(var R=0;R<Modernizr._q.length;R++)Modernizr._q[R]();e.Modernizr=Modernizr}(window,document);