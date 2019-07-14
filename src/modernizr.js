/*! modernizr 3.7.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-csspositionsticky-flexboxtweener-objectfit-touchevents-webp-mq-setclasses-cssclassprefix:mod_ !*/
!function(e,n,t){function r(e,n){return typeof e===n}function o(e){var n=C.className,t=Modernizr._config.classPrefix||"";if(_&&(n=n.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(r,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(e.length>0&&(n+=" "+t+e.join(" "+t)),_?C.className.baseVal=n:C.className=n)}function i(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):_?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function s(){var e=n.body;return e||(e=i(_?"svg":"body"),e.fake=!0),e}function a(e,t,r,o){var a,l,u,f,A="modernizr",c=i("div"),d=s();if(parseInt(r,10))for(;r--;)u=i("div"),u.id=o?o[r]:A+(r+1),c.appendChild(u);return a=i("style"),a.type="text/css",a.id="s"+A,(d.fake?d:c).appendChild(a),d.appendChild(c),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(n.createTextNode(e)),c.id=A,d.fake&&(d.style.background="",d.style.overflow="hidden",f=C.style.overflow,C.style.overflow="hidden",C.appendChild(d)),l=t(c,e),d.fake?(d.parentNode.removeChild(d),C.style.overflow=f,C.offsetHeight):c.parentNode.removeChild(c),!!l}function l(e,n){return!!~(""+e).indexOf(n)}function u(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function f(n,t,r){var o;if("getComputedStyle"in e){o=getComputedStyle.call(e,n,t);var i=e.console;if(null!==o)r&&(o=o.getPropertyValue(r));else if(i){var s=i.error?"error":"log";i[s].call(i,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else o=!t&&n.currentStyle&&n.currentStyle[r];return o}function A(n,r){var o=n.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(u(n[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];o--;)i.push("("+u(n[o])+":"+r+")");return i=i.join(" or "),a("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"===f(e,null,"position")})}return t}function c(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function d(e,n,o,s){function a(){f&&(delete Q.style,delete Q.modElem)}if(s=!r(s,"undefined")&&s,!r(o,"undefined")){var u=A(e,o);if(!r(u,"undefined"))return u}for(var f,d,p,m,h,v=["modernizr","tspan","samp"];!Q.style&&v.length;)f=!0,Q.modElem=i(v.shift()),Q.style=Q.modElem.style;for(p=e.length,d=0;d<p;d++)if(m=e[d],h=Q.style[m],l(m,"-")&&(m=c(m)),Q.style[m]!==t){if(s||r(o,"undefined"))return a(),"pfx"!==n||m;try{Q.style[m]=o}catch(e){}if(Q.style[m]!==h)return a(),"pfx"!==n||m}return a(),!1}function p(e,n){return function(){return e.apply(n,arguments)}}function m(e,n,t){var o;for(var i in e)if(e[i]in n)return!1===t?e[i]:(o=n[e[i]],r(o,"function")?p(o,t||n):o);return!1}function h(e,n,t,o,i){var s=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+B.join(s+" ")+s).split(" ");return r(n,"string")||r(n,"undefined")?d(a,n,o,i):(a=(e+" "+U.join(s+" ")+s).split(" "),m(a,n,t))}function v(e,n,r){return h(e,t,t,n,r)}function g(e,n){if("object"==typeof e)for(var t in e)j(e,t)&&g(t,e[t]);else{e=e.toLowerCase();var r=e.split("."),i=Modernizr[r[0]];if(2===r.length&&(i=i[r[1]]),void 0!==i)return Modernizr;n="function"==typeof n?n():n,1===r.length?Modernizr[r[0]]=n:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=n),o([(n&&!1!==n?"":"no-")+r.join("-")]),Modernizr._trigger(e,n)}return Modernizr}var y=[],w={_version:"3.7.0",_config:{classPrefix:'mod_',enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){y.push({name:e,fn:n,options:t})},addAsyncTest:function(e){y.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=w,Modernizr=new Modernizr;var b=[],C=n.documentElement,_="svg"===C.nodeName.toLowerCase(),x=function(){var n=e.matchMedia||e.msMatchMedia;return n?function(e){var t=n(e);return t&&t.matches||!1}:function(n){var t=!1;return a("@media "+n+" { #modernizr { position: absolute; } }",function(n){t="absolute"===(e.getComputedStyle?e.getComputedStyle(n,null):n.currentStyle).position}),t}}();w.mq=x;var S="Moz O ms Webkit",B=w._config.usePrefixes?S.split(" "):[];w._cssomPrefixes=B;var T={elem:i("modernizr")};Modernizr._q.push(function(){delete T.elem});var Q={style:T.elem.style};Modernizr._q.unshift(function(){delete Q.style});var U=w._config.usePrefixes?S.toLowerCase().split(" "):[];w._domPrefixes=U,w.testAllProps=h,w.testAllProps=v,Modernizr.addTest("flexboxtweener",v("flexAlign","end",!0));var R=function(n){var r,o=E.length,i=e.CSSRule;if(void 0===i)return t;if(!n)return!1;if(n=n.replace(/^@/,""),(r=n.replace(/-/g,"_").toUpperCase()+"_RULE")in i)return"@"+n;for(var s=0;s<o;s++){var a=E[s];if(a.toUpperCase()+"_"+r in i)return"@-"+a.toLowerCase()+"-"+n}return!1};w.atRule=R;var k=w.prefixed=function(e,n,t){return 0===e.indexOf("@")?R(e):(-1!==e.indexOf("-")&&(e=c(e)),n?h(e,n,t):h(e,"pfx"))};Modernizr.addTest("objectfit",!!k("objectFit"),{aliases:["object-fit"]});var E=w._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];w._prefixes=E,Modernizr.addTest("touchevents",function(){if("ontouchstart"in e||e.DocumentTouch&&n instanceof DocumentTouch)return!0;var t=["(",E.join("touch-enabled),("),"heartz",")"].join("");return x(t)}),Modernizr.addTest("csspositionsticky",function(){var e="position:",n=i("a"),t=n.style;return t.cssText=e+E.join("sticky;"+e).slice(0,-e.length),-1!==t.position.indexOf("sticky")});var j;!function(){var e={}.hasOwnProperty;j=r(e,"undefined")||r(e.call,"undefined")?function(e,n){return n in e&&r(e.constructor.prototype[n],"undefined")}:function(n,t){return e.call(n,t)}}(),w._l={},w.on=function(e,n){this._l[e]||(this._l[e]=[]),this._l[e].push(n),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},w._trigger=function(e,n){if(this._l[e]){var t=this._l[e];setTimeout(function(){var e;for(e=0;e<t.length;e++)(0,t[e])(n)},0),delete this._l[e]}},Modernizr._q.push(function(){w.addTest=g}),Modernizr.addAsyncTest(function(){function e(e,n,t){function r(n){var r=!(!n||"load"!==n.type)&&1===o.width;g(e,"webp"===e&&r?new Boolean(r):r),t&&t(n)}var o=new Image;o.onerror=r,o.onload=r,o.src=n}var n=[{uri:"data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",name:"webp"},{uri:"data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",name:"webp.alpha"},{uri:"data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",name:"webp.animation"},{uri:"data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",name:"webp.lossless"}],t=n.shift();e(t.name,t.uri,function(t){if(t&&"load"===t.type)for(var r=0;r<n.length;r++)e(n[r].name,n[r].uri)})}),function(){var e,n,t,o,i,s,a;for(var l in y)if(y.hasOwnProperty(l)){if(e=[],n=y[l],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(o=r(n.fn,"function")?n.fn():n.fn,i=0;i<e.length;i++)s=e[i],a=s.split("."),1===a.length?Modernizr[a[0]]=o:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=o),b.push((o?"":"no-")+a.join("-"))}}(),o(b),delete w.addTest,delete w.addAsyncTest;for(var P=0;P<Modernizr._q.length;P++)Modernizr._q[P]();e.Modernizr=Modernizr}(window,document);
