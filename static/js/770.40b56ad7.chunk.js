/*! For license information please see 770.40b56ad7.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[770],{770:function(t,r,n){n.r(r),n.d(r,{default:function(){return L}});var e,a,o,i,c,u=n(861),p=n(439),f=n(791),s=n(689),l=n(690),h=n(168),d=n(867),g=d.ZP.ul(e||(e=(0,h.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 20px;\n  margin: 0 0 20px 0;\n  padding: 0;\n\n  @media screen and (min-width: 900px) {\n    width: 900px;\n    height: 600px;\n    overflow-y: scroll;\n    scroll-behavior: smooth;\n\n    &::-webkit-scrollbar {\n      width: 8px;\n      height: 100px;\n    }\n\n    &::-webkit-scrollbar-track {\n      background: #f6f6f6;\n    }\n\n    &::-webkit-scrollbar-thumb {\n      border-radius: 12px;\n      background: #0e1841;\n    }\n    &::-webkit-scrollbar-thumb:hover {\n      background: #249fa3;\n    }\n  }\n  @media screen and (min-width: 1400px) {\n    width: 480px;\n    height: 600px;\n  }\n"]))),v=d.ZP.li(a||(a=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  width: 200px;\n"]))),x=d.ZP.img(o||(o=(0,h.Z)(["\n  display: block;\n  width: 200px;\n  height: 300px;\n  object-fit: cover;\n"]))),y=d.ZP.h4(i||(i=(0,h.Z)(["\n  font-family: 'Prompt', sans-serif;\n  font-size: 20px;\n  font-weight: 500;\n  color: #0e1841;\n  margin: 0;\n  padding: 0;\n"]))),m=d.ZP.h4(c||(c=(0,h.Z)(["\n  font-family: 'Prompt', sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  color: #0e1841;\n  margin: 0;\n  padding: 0;\n"]))),w=n(359),b=n(184);function k(){k=function(){return r};var t,r={},n=Object.prototype,e=n.hasOwnProperty,a=Object.defineProperty||function(t,r,n){t[r]=n.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function p(t,r,n){return Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{p({},"")}catch(t){p=function(t,r,n){return t[r]=n}}function f(t,r,n,e){var o=r&&r.prototype instanceof v?r:v,i=Object.create(o.prototype),c=new S(e||[]);return a(i,"_invoke",{value:j(t,n,c)}),i}function s(t,r,n){try{return{type:"normal",arg:t.call(r,n)}}catch(t){return{type:"throw",arg:t}}}r.wrap=f;var l="suspendedStart",h="executing",d="completed",g={};function v(){}function x(){}function y(){}var m={};p(m,i,(function(){return this}));var w=Object.getPrototypeOf,b=w&&w(w(G([])));b&&b!==n&&e.call(b,i)&&(m=b);var L=y.prototype=v.prototype=Object.create(m);function E(t){["next","throw","return"].forEach((function(r){p(t,r,(function(t){return this._invoke(r,t)}))}))}function _(t,r){function n(a,o,i,c){var u=s(t[a],t,o);if("throw"!==u.type){var p=u.arg,f=p.value;return f&&"object"==typeof f&&e.call(f,"__await")?r.resolve(f.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):r.resolve(f).then((function(t){p.value=t,i(p)}),(function(t){return n("throw",t,i,c)}))}c(u.arg)}var o;a(this,"_invoke",{value:function(t,e){function a(){return new r((function(r,a){n(t,e,r,a)}))}return o=o?o.then(a,a):a()}})}function j(r,n,e){var a=l;return function(o,i){if(a===h)throw new Error("Generator is already running");if(a===d){if("throw"===o)throw i;return{value:t,done:!0}}for(e.method=o,e.arg=i;;){var c=e.delegate;if(c){var u=O(c,e);if(u){if(u===g)continue;return u}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(a===l)throw a=d,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);a=h;var p=s(r,n,e);if("normal"===p.type){if(a=e.done?d:"suspendedYield",p.arg===g)continue;return{value:p.arg,done:e.done}}"throw"===p.type&&(a=d,e.method="throw",e.arg=p.arg)}}}function O(r,n){var e=n.method,a=r.iterator[e];if(a===t)return n.delegate=null,"throw"===e&&r.iterator.return&&(n.method="return",n.arg=t,O(r,n),"throw"===n.method)||"return"!==e&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+e+"' method")),g;var o=s(a,r.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,g;var i=o.arg;return i?i.done?(n[r.resultName]=i.value,n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,g):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,g)}function Z(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function P(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(Z,this),this.reset(!0)}function G(r){if(r||""===r){var n=r[i];if(n)return n.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var a=-1,o=function n(){for(;++a<r.length;)if(e.call(r,a))return n.value=r[a],n.done=!1,n;return n.value=t,n.done=!0,n};return o.next=o}}throw new TypeError(typeof r+" is not iterable")}return x.prototype=y,a(L,"constructor",{value:y,configurable:!0}),a(y,"constructor",{value:x,configurable:!0}),x.displayName=p(y,u,"GeneratorFunction"),r.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===x||"GeneratorFunction"===(r.displayName||r.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,p(t,u,"GeneratorFunction")),t.prototype=Object.create(L),t},r.awrap=function(t){return{__await:t}},E(_.prototype),p(_.prototype,c,(function(){return this})),r.AsyncIterator=_,r.async=function(t,n,e,a,o){void 0===o&&(o=Promise);var i=new _(f(t,n,e,a),o);return r.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},E(L),p(L,u,"Generator"),p(L,i,(function(){return this})),p(L,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var r=Object(t),n=[];for(var e in r)n.push(e);return n.reverse(),function t(){for(;n.length;){var e=n.pop();if(e in r)return t.value=e,t.done=!1,t}return t.done=!0,t}},r.values=G,S.prototype={constructor:S,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(P),!r)for(var n in this)"t"===n.charAt(0)&&e.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var n=this;function a(e,a){return c.type="throw",c.arg=r,n.next=e,a&&(n.method="next",n.arg=t),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var u=e.call(i,"catchLoc"),p=e.call(i,"finallyLoc");if(u&&p){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!p)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(t,r){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&e.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=r&&r<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=r,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(i)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),g},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),P(n),g}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc===t){var e=n.completion;if("throw"===e.type){var a=e.arg;P(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(r,n,e){return this.delegate={iterator:G(r),resultName:n,nextLoc:e},"next"===this.method&&(this.arg=t),g}},r}function L(){var t=(0,s.UO)().movieId,r=(0,f.useState)(null),n=(0,p.Z)(r,2),e=n[0],a=n[1],o=(0,f.useState)(!1),i=(0,p.Z)(o,2),c=i[0],h=i[1];if((0,f.useEffect)((function(){if(t){var r=function(){var r=(0,u.Z)(k().mark((function r(){var n;return k().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,h(!0),r.next=4,(0,l.d5)(t);case 4:n=r.sent,console.log(t),console.log(n.cast),a(n.cast),r.next=13;break;case 10:r.prev=10,r.t0=r.catch(0),r.t0(r.t0.message);case 13:return r.prev=13,h(!1),r.finish(13);case 16:case"end":return r.stop()}}),r,null,[[0,10,13,16]])})));return function(){return r.apply(this,arguments)}}();r()}}),[t]),e){var d=Array.isArray(e)&&e.length;return(0,b.jsxs)(b.Fragment,{children:[c&&(0,b.jsx)(w.g,{}),(0,b.jsx)(g,{children:d&&e.map((function(t){var r=t.id,n=t.profile_path,e=t.name,a=t.character;return(0,b.jsxs)(v,{children:[(0,b.jsx)(x,{src:n?"https://image.tmdb.org/t/p/w500/".concat(n):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",alt:e}),(0,b.jsx)(y,{children:e}),(0,b.jsx)(m,{children:a})]},r)}))})]})}}},359:function(t,r,n){n.d(r,{g:function(){return f}});n(791);var e,a,o=n(168),i=n(867),c=i.zo.div(e||(e=(0,o.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 90;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(46, 47, 66, 0.4);\n"]))),u=i.zo.span(a||(a=(0,o.Z)(["\n  position: absolute;\n  top: 300px;\n  margin-left: auto;\n  margin-right: auto;\n\n  width: 175px;\n  height: 80px;\n  display: block;\n  margin: auto;\n  background-image: radial-gradient(\n      circle 25px at 25px 25px,\n      #fff 100%,\n      transparent 0\n    ),\n    radial-gradient(circle 50px at 50px 50px, #fff 100%, transparent 0),\n    radial-gradient(circle 25px at 25px 25px, #fff 100%, transparent 0),\n    linear-gradient(#fff 50px, transparent 0);\n  background-size: 50px 50px, 100px 76px, 50px 50px, 120px 40px;\n  background-position: 0px 30px, 37px 0px, 122px 30px, 25px 40px;\n  background-repeat: no-repeat;\n  position: relative;\n  box-sizing: border-box;\n\n  &::before {\n    content: '';\n    left: 60px;\n    bottom: 18px;\n    position: absolute;\n    width: 36px;\n    height: 36px;\n    border-radius: 50%;\n    background-color: #249fa3;\n    background-image: radial-gradient(\n        circle 8px at 18px 18px,\n        #fff 100%,\n        transparent 0\n      ),\n      radial-gradient(circle 4px at 18px 0px, #fff 100%, transparent 0),\n      radial-gradient(circle 4px at 0px 18px, #fff 100%, transparent 0),\n      radial-gradient(circle 4px at 36px 18px, #fff 100%, transparent 0),\n      radial-gradient(circle 4px at 18px 36px, #fff 100%, transparent 0),\n      radial-gradient(circle 4px at 30px 5px, #fff 100%, transparent 0),\n      radial-gradient(circle 4px at 30px 5px, #fff 100%, transparent 0),\n      radial-gradient(circle 4px at 30px 30px, #fff 100%, transparent 0),\n      radial-gradient(circle 4px at 5px 30px, #fff 100%, transparent 0),\n      radial-gradient(circle 4px at 5px 5px, #fff 100%, transparent 0);\n    background-repeat: no-repeat;\n    box-sizing: border-box;\n    animation: rotationBack 3s linear infinite;\n  }\n  &::after {\n    content: '';\n    left: 94px;\n    bottom: 15px;\n    position: absolute;\n    width: 24px;\n    height: 24px;\n    border-radius: 50%;\n    background-color: #0e1841;\n    background-image: radial-gradient(\n        circle 5px at 12px 12px,\n        #fff 100%,\n        transparent 0\n      ),\n      radial-gradient(circle 2.5px at 12px 0px, #fff 100%, transparent 0),\n      radial-gradient(circle 2.5px at 0px 12px, #fff 100%, transparent 0),\n      radial-gradient(circle 2.5px at 24px 12px, #fff 100%, transparent 0),\n      radial-gradient(circle 2.5px at 12px 24px, #fff 100%, transparent 0),\n      radial-gradient(circle 2.5px at 20px 3px, #fff 100%, transparent 0),\n      radial-gradient(circle 2.5px at 20px 3px, #fff 100%, transparent 0),\n      radial-gradient(circle 2.5px at 20px 20px, #fff 100%, transparent 0),\n      radial-gradient(circle 2.5px at 3px 20px, #fff 100%, transparent 0),\n      radial-gradient(circle 2.5px at 3px 3px, #fff 100%, transparent 0);\n    background-repeat: no-repeat;\n    box-sizing: border-box;\n    animation: rotationBack 4s linear infinite reverse;\n  }\n\n  @keyframes rotationBack {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(-360deg);\n    }\n  }\n"]))),p=n(184);function f(){return(0,p.jsx)(c,{children:(0,p.jsx)(u,{})})}},690:function(t,r,n){n.d(r,{Bt:function(){return g},Y5:function(){return s},d5:function(){return h},df:function(){return p},vw:function(){return c}});var e=n(861),a=n(243);function o(){o=function(){return r};var t,r={},n=Object.prototype,e=n.hasOwnProperty,a=Object.defineProperty||function(t,r,n){t[r]=n.value},i="function"==typeof Symbol?Symbol:{},c=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",p=i.toStringTag||"@@toStringTag";function f(t,r,n){return Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{f({},"")}catch(t){f=function(t,r,n){return t[r]=n}}function s(t,r,n,e){var o=r&&r.prototype instanceof x?r:x,i=Object.create(o.prototype),c=new S(e||[]);return a(i,"_invoke",{value:j(t,n,c)}),i}function l(t,r,n){try{return{type:"normal",arg:t.call(r,n)}}catch(t){return{type:"throw",arg:t}}}r.wrap=s;var h="suspendedStart",d="executing",g="completed",v={};function x(){}function y(){}function m(){}var w={};f(w,c,(function(){return this}));var b=Object.getPrototypeOf,k=b&&b(b(G([])));k&&k!==n&&e.call(k,c)&&(w=k);var L=m.prototype=x.prototype=Object.create(w);function E(t){["next","throw","return"].forEach((function(r){f(t,r,(function(t){return this._invoke(r,t)}))}))}function _(t,r){function n(a,o,i,c){var u=l(t[a],t,o);if("throw"!==u.type){var p=u.arg,f=p.value;return f&&"object"==typeof f&&e.call(f,"__await")?r.resolve(f.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):r.resolve(f).then((function(t){p.value=t,i(p)}),(function(t){return n("throw",t,i,c)}))}c(u.arg)}var o;a(this,"_invoke",{value:function(t,e){function a(){return new r((function(r,a){n(t,e,r,a)}))}return o=o?o.then(a,a):a()}})}function j(r,n,e){var a=h;return function(o,i){if(a===d)throw new Error("Generator is already running");if(a===g){if("throw"===o)throw i;return{value:t,done:!0}}for(e.method=o,e.arg=i;;){var c=e.delegate;if(c){var u=O(c,e);if(u){if(u===v)continue;return u}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(a===h)throw a=g,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);a=d;var p=l(r,n,e);if("normal"===p.type){if(a=e.done?g:"suspendedYield",p.arg===v)continue;return{value:p.arg,done:e.done}}"throw"===p.type&&(a=g,e.method="throw",e.arg=p.arg)}}}function O(r,n){var e=n.method,a=r.iterator[e];if(a===t)return n.delegate=null,"throw"===e&&r.iterator.return&&(n.method="return",n.arg=t,O(r,n),"throw"===n.method)||"return"!==e&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+e+"' method")),v;var o=l(a,r.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,v;var i=o.arg;return i?i.done?(n[r.resultName]=i.value,n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,v):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function Z(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function P(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(Z,this),this.reset(!0)}function G(r){if(r||""===r){var n=r[c];if(n)return n.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var a=-1,o=function n(){for(;++a<r.length;)if(e.call(r,a))return n.value=r[a],n.done=!1,n;return n.value=t,n.done=!0,n};return o.next=o}}throw new TypeError(typeof r+" is not iterable")}return y.prototype=m,a(L,"constructor",{value:m,configurable:!0}),a(m,"constructor",{value:y,configurable:!0}),y.displayName=f(m,p,"GeneratorFunction"),r.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===y||"GeneratorFunction"===(r.displayName||r.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,f(t,p,"GeneratorFunction")),t.prototype=Object.create(L),t},r.awrap=function(t){return{__await:t}},E(_.prototype),f(_.prototype,u,(function(){return this})),r.AsyncIterator=_,r.async=function(t,n,e,a,o){void 0===o&&(o=Promise);var i=new _(s(t,n,e,a),o);return r.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},E(L),f(L,p,"Generator"),f(L,c,(function(){return this})),f(L,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var r=Object(t),n=[];for(var e in r)n.push(e);return n.reverse(),function t(){for(;n.length;){var e=n.pop();if(e in r)return t.value=e,t.done=!1,t}return t.done=!0,t}},r.values=G,S.prototype={constructor:S,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(P),!r)for(var n in this)"t"===n.charAt(0)&&e.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var n=this;function a(e,a){return c.type="throw",c.arg=r,n.next=e,a&&(n.method="next",n.arg=t),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var u=e.call(i,"catchLoc"),p=e.call(i,"finallyLoc");if(u&&p){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!p)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(t,r){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&e.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=r&&r<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=r,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(i)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),v},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),P(n),v}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc===t){var e=n.completion;if("throw"===e.type){var a=e.arg;P(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(r,n,e){return this.delegate={iterator:G(r),resultName:n,nextLoc:e},"next"===this.method&&(this.arg=t),v}},r}var i="af080b5b2907815101ad1910e044b3b8";function c(){return u.apply(this,arguments)}function u(){return(u=(0,e.Z)(o().mark((function t(){var r,n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,a.Z.get("https://api.themoviedb.org/3/trending/movie/day",{params:{api_key:i}});case 3:return r=t.sent,n=r.data,t.abrupt("return",n);case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}function p(t){return f.apply(this,arguments)}function f(){return(f=(0,e.Z)(o().mark((function t(r){var n,e;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,a.Z.get("https://api.themoviedb.org/3/search/movie",{params:{query:"".concat(r),include_adult:!1,language:"en-US",page:1,api_key:i}});case 3:return n=t.sent,e=n.data,t.abrupt("return",e);case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}function s(t){return l.apply(this,arguments)}function l(){return(l=(0,e.Z)(o().mark((function t(r){var n,e;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,a.Z.get("https://api.themoviedb.org/3/movie/".concat(r),{params:{api_key:i,language:"en-US"}});case 3:return n=t.sent,e=n.data,t.abrupt("return",e);case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}function h(t){return d.apply(this,arguments)}function d(){return(d=(0,e.Z)(o().mark((function t(r){var n,e;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,a.Z.get("https://api.themoviedb.org/3/movie/".concat(r,"/credits"),{params:{api_key:i,language:"en-US"}});case 3:return n=t.sent,e=n.data,t.abrupt("return",e);case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}function g(t){return v.apply(this,arguments)}function v(){return(v=(0,e.Z)(o().mark((function t(r){var n,e;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(r),t.prev=1,t.next=4,a.Z.get("https://api.themoviedb.org/3/movie/".concat(r,"/reviews"),{params:{api_key:i,language:"en-US"}});case 4:return n=t.sent,e=n.data,t.abrupt("return",e);case 9:t.prev=9,t.t0=t.catch(1),console.error(t.t0);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=770.40b56ad7.chunk.js.map