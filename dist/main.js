var Client=function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=11)}([function(e,n,t){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),A=[];function a(e){for(var n=-1,t=0;t<A.length;t++)if(A[t].identifier===e){n=t;break}return n}function s(e,n){for(var t={},r=[],o=0;o<e.length;o++){var i=e[o],s=n.base?i[0]+n.base:i[0],c=t[s]||0,l="".concat(s," ").concat(c);t[s]=c+1;var d=a(l),u={css:i[1],media:i[2],sourceMap:i[3]};-1!==d?(A[d].references++,A[d].updater(u)):A.push({identifier:l,updater:p(u,n),references:1}),r.push(l)}return r}function c(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=t.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach(function(e){n.setAttribute(e,r[e])}),"function"==typeof e.insert)e.insert(n);else{var A=i(e.insert||"head");if(!A)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");A.appendChild(n)}return n}var l,d=(l=[],function(e,n){return l[e]=n,l.filter(Boolean).join("\n")});function u(e,n,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(n,o);else{var i=document.createTextNode(o),A=e.childNodes;A[n]&&e.removeChild(A[n]),A.length?e.insertBefore(i,A[n]):e.appendChild(i)}}var f=null,C=0;function p(e,n){var t,r,o;if(n.singleton){var i=C++;t=f||(f=c(n)),r=u.bind(null,t,i,!1),o=u.bind(null,t,i,!0)}else t=c(n),r=function(e,n,t){var r=t.css,o=t.media,i=t.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}.bind(null,t,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=o());var t=s(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var o=a(t[r]);A[o].references--}for(var i=s(e,n),c=0;c<t.length;c++){var l=a(t[c]);0===A[l].references&&(A[l].updater(),A.splice(l,1))}t=i}}}},function(e,n,t){"use strict";function r(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var t=[],r=!0,o=!1,i=void 0;try{for(var A,a=e[Symbol.iterator]();!(r=(A=a.next()).done)&&(t.push(A.value),!n||t.length!==n);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return t}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return o(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return o(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}e.exports=function(e){var n=r(e,4),t=n[1],o=n[3];if("function"==typeof btoa){var i=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),A="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),a="/*# ".concat(A," */"),s=o.sources.map(function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")});return[t].concat(s).concat([a]).join("\n")}return[t].join("\n")}},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map(function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t}).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var A=this[i][0];null!=A&&(o[A]=!0)}for(var a=0;a<e.length;a++){var s=[].concat(e[a]);r&&o[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),n.push(s))}},n}},function(e,n,t){"use strict";var r=t(1),o=t.n(r),i=t(2),A=t.n(i)()(o.a);A.push([e.i,'html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:"";content:none}table{border-collapse:collapse;border-spacing:0}',"",{version:3,sources:["webpack://./src/client/styles/resets.scss"],names:[],mappings:"AAKA,2ZACI,QAAA,CACA,SAAA,CACA,QAAA,CACA,cAAA,CACA,YAAA,CACA,uBAAA,CAKJ,8EACI,aAAA,CAGJ,KACI,aAAA,CAGJ,MACI,eAAA,CAGJ,aACI,WAAA,CAEA,oDACI,UAAA,CACA,YAAA,CAIR,MACI,wBAAA,CACA,gBAAA",sourcesContent:["/* http://meyerweb.com/eric/tools/css/reset/\n    v2.0 | 20110126\n    License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\n\narticle, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {\n    display: block;\n}\n\nbody {\n    line-height: 1;\n}\n\nol, ul {\n    list-style: none;\n}\n\nblockquote, q {\n    quotes: none;\n    \n    &:before, &:after {\n        content: '';\n        content: none;\n    }\n}\n\ntable {\n    border-collapse: collapse;\n    border-spacing: 0;\n}\n"],sourceRoot:""}]),n.a=A},function(e,n,t){"use strict";var r=t(1),o=t.n(r),i=t(2),A=t.n(i)()(o.a);A.push([e.i,'body{display:flex;flex-direction:column;min-height:100vh;background-color:#070a13;font-family:"Open Sans",sans-serif;font-weight:400;font-size:calc(0.7em + 0.5vw);line-height:calc(1.3em + 0.8vw)}h1,h2,h3,h4,h5,h6{font-family:"Montserrat",sans-serif;font-weight:600;text-transform:uppercase;letter-spacing:.7vmin}h1{font-size:calc(1.7em + 2vw);line-height:calc(1em + 0.8vw)}h2{font-size:calc(1.5em + 1.8vw);line-height:calc(1em + 0.8vw)}h3{font-size:calc(1.3em + 1.6vw);line-height:calc(1em + 0.8vw)}h4{font-size:calc(1.1em + 1.4vw);line-height:calc(1em + 0.8vw)}h5{font-size:calc(0.9em + 1.2vw)}h6{font-size:calc(0.7em + 1vw)}main{flex:2}',"",{version:3,sources:["webpack://./src/client/styles/base.scss"],names:[],mappings:"AAAA,KACI,YAAA,CACA,qBAAA,CACA,gBAAA,CACA,wBAAA,CACA,kCAAA,CACA,eAAA,CACA,6BAAA,CACA,+BAAA,CAGJ,kBACI,mCAAA,CACA,eAAA,CACA,wBAAA,CACA,qBAAA,CAGJ,GACI,2BAAA,CACA,6BAAA,CAGJ,GACI,6BAAA,CACA,6BAAA,CAGJ,GACI,6BAAA,CACA,6BAAA,CAGJ,GACI,6BAAA,CACA,6BAAA,CAGJ,GACI,6BAAA,CAGJ,GACI,2BAAA,CAGJ,KACI,MAAA",sourcesContent:["body {\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n    background-color: #070A13;\n    font-family: 'Open Sans', sans-serif;\n    font-weight: 400;\n    font-size: calc(0.7em + 0.5vw);\n    line-height: calc(1.3em + 0.8vw);\n}\n\nh1, h2, h3, h4, h5, h6 {\n    font-family:'Montserrat', sans-serif;\n    font-weight: 600;\n    text-transform: uppercase;\n    letter-spacing: 0.7vmin;\n}\n\nh1 {\n    font-size: calc(1.7em + 2vw);\n    line-height: calc(1em + 0.8vw);\n}\n\nh2 {\n    font-size: calc(1.5em + 1.8vw);\n    line-height: calc(1em + 0.8vw);\n}\n\nh3 {\n    font-size: calc(1.3em + 1.6vw);\n    line-height: calc(1em + 0.8vw);\n}\n\nh4 {\n    font-size: calc(1.1em + 1.4vw);\n    line-height: calc(1em + 0.8vw);\n}\n\nh5 {\n    font-size: calc(0.9em + 1.2vw);\n}\n\nh6 {\n    font-size: calc(0.7em + 1vw);\n}\n\nmain {\n    flex: 2;\n}\n\n\n\n"],sourceRoot:""}]),n.a=A},function(e,n,t){"use strict";var r=t(1),o=t.n(r),i=t(2),A=t.n(i)()(o.a);A.push([e.i,".footer__copyright{margin:2em;text-align:left;color:#a5b8cc}","",{version:3,sources:["webpack://./src/client/styles/footer.scss"],names:[],mappings:"AAAA,mBACI,UAAA,CACA,eAAA,CACA,aAAA",sourcesContent:[".footer__copyright {\n    margin: 2em;\n    text-align: left;\n    color: #a5b8cc;\n}"],sourceRoot:""}]),n.a=A},function(e,n,t){"use strict";var r=t(1),o=t.n(r),i=t(2),A=t.n(i)()(o.a);A.push([e.i,".form{display:flex;flex-direction:column;height:fit-content;overflow:hidden;margin-top:1vw}.user__form{display:flex;flex-direction:column;justify-items:center;align-items:center}.user__input{border-radius:8px;width:70%;padding:.8vw;margin:1vw;display:flex}input.user__input,textarea{background:#a5b8cc;border:2px solid #c0cddb;font:inherit}input.user__input,textarea:focus{color:#f5f5f5;text-indent:10px}input:focus{color:#f5f5f5;text-indent:10px}input.user__input::placeholder{color:#f5f5f5;opacity:1;text-indent:10px}.btn{background-color:#645c72;border:2px solid #717981;color:#e7e9eb;font-weight:300;font-size:inherit;letter-spacing:.4vw;padding:.8vw;border-radius:8px;width:40vw;margin:1vw;cursor:pointer}.btn:hover{background-color:#b3c1cf;border:2px solid #6a90b8}","",{version:3,sources:["webpack://./src/client/styles/form.scss"],names:[],mappings:"AAAA,MACI,YAAA,CACA,qBAAA,CACA,kBAAA,CACA,eAAA,CACA,cAAA,CAGJ,YACI,YAAA,CACA,qBAAA,CACA,oBAAA,CACA,kBAAA,CAEJ,aACI,iBAAA,CACA,SAAA,CACA,YAAA,CACA,UAAA,CACA,YAAA,CAGF,2BACE,kBAAA,CACA,wBAAA,CACA,YAAA,CAGF,iCACE,aAAA,CACA,gBAAA,CAIA,YACE,aAAA,CACA,gBAAA,CAGF,+BACE,aAAA,CACA,SAAA,CACA,gBAAA,CAIN,KACI,wBAAA,CACA,wBAAA,CACA,aAAA,CACA,eAAA,CACA,iBAAA,CACA,mBAAA,CACA,YAAA,CACA,iBAAA,CACA,UAAA,CACA,UAAA,CACA,cAAA,CAEA,WACE,wBAAA,CACA,wBAAA",sourcesContent:[".form {\n    display: flex;\n    flex-direction: column;\n    height: fit-content;\n    overflow: hidden;\n    margin-top: 1vw;\n}\n\n.user__form {\n    display: flex;\n    flex-direction: column;\n    justify-items: center;\n    align-items: center;\n}\n.user__input {\n    border-radius: 8px;\n    width: 70%;\n    padding: 0.8vw;\n    margin: 1vw;\n    display: flex;\n  }\n  \n  input.user__input, textarea {\n    background: #a5b8cc;\n    border: 2px solid rgb(192, 205, 219);\n    font: inherit;\n  }\n  \n  input.user__input, textarea:focus {\n    color: whitesmoke;\n    text-indent: 10px;\n  }\n  \n  input {\n    &:focus {\n      color: whitesmoke;\n      text-indent: 10px;\n    }\n  \n    &.user__input::placeholder {\n      color: whitesmoke;\n      opacity: 1;\n      text-indent: 10px;\n    }\n  }\n\n.btn {\n    background-color: #645c72;\n    border: 2px solid rgb(113, 121, 129);\n    color: #e7e9eb;\n    font-weight: 300;\n    font-size: inherit;\n    letter-spacing: 0.4vw;\n    padding: 0.8vw;\n    border-radius: 8px;\n    width: 40vw;\n    margin: 1vw;\n    cursor: pointer;\n  \n    &:hover {\n      background-color: #b3c1cf;\n      border: 2px solid rgb(106, 144, 184);\n    }\n  }\n"],sourceRoot:""}]),n.a=A},function(e,n,t){"use strict";var r=t(1),o=t.n(r),i=t(2),A=t.n(i)()(o.a);A.push([e.i,'header{display:grid;grid-template-columns:1fr 6fr 1fr;grid-template-rows:1fr;grid-template-areas:"icon" "heading" "col";justify-content:space-between;padding:10px 40px;color:#a5b8cc;height:20vh}.icon{font-size:4em;grid-area:"icon";color:#645c72;padding:.2em}.header__wrapper{grid-area:"heading";display:flex;flex-direction:column;padding:3em 1em 1em 1em;overflow:hidden;flex-wrap:wrap;justify-content:center}.header__head{padding:0 .5vw 1vw .5vw;color:#b63a4e;text-align:center;width:100%}.header__sub{padding:0 .5vw 0 .5vw;text-align:center;width:100%}',"",{version:3,sources:["webpack://./src/client/styles/header.scss"],names:[],mappings:"AAAA,OACI,YAAA,CACA,iCAAA,CACA,sBAAA,CACA,0CACA,CACA,6BAAA,CACA,iBAAA,CACA,aAAA,CACA,WAAA,CAGJ,MACI,aAAA,CACA,gBAAA,CACA,aAAA,CACA,YAAA,CAGJ,iBACI,mBAAA,CACA,YAAA,CACA,qBAAA,CACA,uBAAA,CACA,eAAA,CACA,cAAA,CACA,sBAAA,CAGJ,cACI,uBAAA,CACA,aAAA,CACA,iBAAA,CACA,UAAA,CAGJ,aACC,qBAAA,CACA,iBAAA,CACA,UAAA",sourcesContent:['header {\n    display: grid;\n    grid-template-columns: 1fr 6fr 1fr;\n    grid-template-rows: 1fr;\n    grid-template-areas: \n    "icon" "heading" "col";\n    justify-content: space-between;\n    padding: 10px 40px;\n    color: #a5b8cc;\n    height: 20vh;\n}\n\n.icon {\n    font-size: 4em;\n    grid-area: "icon";\n    color: #645c72;\n    padding: 0.2em;\n}\n\n.header__wrapper {\n    grid-area: "heading";\n    display: flex;\n    flex-direction: column;\n    padding: 3em 1em 1em 1em;\n    overflow: hidden;\n    flex-wrap: wrap;\n    justify-content: center;\n}\n\n.header__head {\n    padding: 0 0.5vw 1vw 0.5vw;\n    color: #b63a4e;\n    text-align: center;\n    width: 100%;\n}\n\n.header__sub {\n padding: 0 0.5vw 0 0.5vw;\n text-align: center;\n width: 100%;\n}'],sourceRoot:""}]),n.a=A},function(e,n,t){"use strict";var r=t(1),o=t.n(r),i=t(2),A=t.n(i)()(o.a);A.push([e.i,".results{color:#f5f5f5;display:flex;margin-top:1em}.results--hidden{display:none}.results__wrapper{background-color:#6d869f;margin:1em;height:auto;width:30vw;border-radius:8px}.results__head{text-align:center;padding:1em .2em .2em .2em;height:2.8em}.results__bread{text-align:left;padding:1em}","",{version:3,sources:["webpack://./src/client/styles/results.scss"],names:[],mappings:"AAAA,SACI,aAAA,CACA,YAAA,CACA,cAAA,CAGJ,iBACI,YAAA,CAGJ,kBACI,wBAAA,CACA,UAAA,CACA,WAAA,CACA,UAAA,CACA,iBAAA,CAGJ,eACI,iBAAA,CACA,0BAAA,CACA,YAAA,CAGJ,gBACI,eAAA,CACA,WAAA",sourcesContent:[".results {\n    color: whitesmoke;\n    display: flex;\n    margin-top: 1em;\n}\n\n.results--hidden {\n    display: none;\n}\n   \n.results__wrapper {\n    background-color:#6d869f;\n    margin: 1em;\n    height: auto;\n    width: 30vw;\n    border-radius: 8px;\n}\n\n.results__head {\n    text-align: center;\n    padding: 1em 0.2em 0.2em 0.2em;\n    height: 2.8em;\n}\n\n.results__bread {\n    text-align: left;\n    padding: 1em;\n}"],sourceRoot:""}]),n.a=A},function(e,n,t){"use strict";var r=t(1),o=t.n(r),i=t(2),A=t.n(i)()(o.a);A.push([e.i,".intro{color:#a5b8cc;width:100vw;min-height:15vh;overflow:hidden;display:grid;justify-content:center;align-items:flex-start}.intro__bread{width:90vw;margin-bottom:1em}","",{version:3,sources:["webpack://./src/client/styles/intro.scss"],names:[],mappings:"AAAA,OACI,aAAA,CACA,WAAA,CACA,eAAA,CACA,eAAA,CACA,YAAA,CACA,sBAAA,CACA,sBAAA,CAGJ,cACI,UAAA,CACA,iBAAA",sourcesContent:[".intro {\n    color: #a5b8cc;\n    width: 100vw;\n    min-height: 15vh;\n    overflow: hidden;\n    display: grid;\n    justify-content: center; \n    align-items: flex-start;\n}\n\n.intro__bread {\n    width: 90vw;\n    margin-bottom: 1em;\n}\n"],sourceRoot:""}]),n.a=A},function(e,n,t){"use strict";var r=t(1),o=t.n(r),i=t(2),A=t.n(i)()(o.a);A.push([e.i,".pending{color:#f5f5f5;margin-top:3em;text-align:center;animation:blinker 3s linear infinite}@keyframes blinker{50%{opacity:0}}.pending--hidden{display:none}","",{version:3,sources:["webpack://./src/client/styles/pending.scss"],names:[],mappings:"AAAA,SACI,aAAA,CACA,cAAA,CACA,iBAAA,CACA,oCAAA,CAGJ,mBACI,IACE,SAAA,CAAA,CAIN,iBACI,YAAA",sourcesContent:[".pending {\n    color: whitesmoke;\n    margin-top: 3em;\n    text-align: center;\n    animation: blinker 3s linear infinite;\n}\n\n@keyframes blinker {\n    50% {\n      opacity: 0;\n    }\n  }\n\n.pending--hidden {\n    display: none;\n}"],sourceRoot:""}]),n.a=A},function(e,n,t){"use strict";t.r(n);const r=e=>{console.log("::: Running validation check on url :::",e);try{new URL(e)}catch(e){return console.log("error:",e),console.log("::: CheckUrl result: Invalid Url :::"),!1}return console.log("::: CheckUrl result: Valid Url :::"),!0};async function o(e){e.preventDefault(),console.log("::: Url submitted :::"),document.getElementById("results").classList.add("results--hidden"),document.getElementById("pending").classList.remove("pending--hidden");let n=document.getElementById("name").value;if(!Client.checkUrl(n))return console.log("::: Invalid Url, break! :::"),void alert("Please enter a valid URL and try again");console.log("::: Valid Url, continue :::"),fetch("/test2",{method:"POST",body:JSON.stringify(n)}).then(e=>e.json()).then(function(e){if("0"!==e.status.code)console.log("Error due to respons code:",e.status.code),document.getElementById("pending").classList.add("pending--hidden"),alert("Something went wrong! Make sure you enter a valid URL.");else{console.log(e);const n=document.getElementById("score"),t=document.getElementById("subj"),r=document.getElementById("irony");"NEU"===e.score_tag?e.score_tag="Neutral":"P+"===e.score_tag?e.score_tag="Strong Positive":"P"===e.score_tag?e.score_tag="Positive":"N"===e.score_tag?e.score_tag="Negative":"N+"===e.score_tag?e.score_tag="Strong Negative":"NONE"===e.score_tag&&(e.score_tag="Without Sentiment"),n.innerHTML=e.score_tag,t.innerHTML=e.subjectivity,r.innerHTML=e.irony,document.getElementById("pending").classList.add("pending--hidden"),document.getElementById("results").classList.remove("results--hidden")}}).catch(e=>{console.log("error:",e),document.getElementById("pending").classList.add("pending--hidden"),alert("Something went wrong! Make sure you enter a valid URL.")})}var i=t(0),A=t.n(i),a=t(3),s={insert:"head",singleton:!1},c=(A()(a.a,s),a.a.locals,t(4)),l={insert:"head",singleton:!1},d=(A()(c.a,l),c.a.locals,t(5)),u={insert:"head",singleton:!1},f=(A()(d.a,u),d.a.locals,t(6)),C={insert:"head",singleton:!1},p=(A()(f.a,C),f.a.locals,t(7)),m={insert:"head",singleton:!1},g=(A()(p.a,m),p.a.locals,t(8)),h={insert:"head",singleton:!1},v=(A()(g.a,h),g.a.locals,t(9)),b={insert:"head",singleton:!1},y=(A()(v.a,b),v.a.locals,t(10)),w={insert:"head",singleton:!1};A()(y.a,w),y.a.locals;t.d(n,"checkUrl",function(){return r}),t.d(n,"handleSubmit",function(){return o})}]);
//# sourceMappingURL=main.js.map