!function(n){var o={};function r(t){if(o[t])return o[t].exports;var e=o[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=n,r.c=o,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=46)}({2:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},25:function(t,e,n){"use strict";n(26);var o=window.location.origin,r=-1!==window.location.hostname.indexOf("localhost")?"https://nike-market.herokuapp.com":o,i=document.getElementById("isModal"),u=document.getElementById("myBtn"),c=document.getElementsByClassName("close-modal")[0],a=document.querySelector(".cancelbtn"),s=document.querySelector("#userName"),f=document.querySelector("#userPassword"),p=(document.querySelector(".container__form"),document.querySelector("#userRegister")),l=(document.getElementById("register"),document.getElementById("userLogin")),d={};u.onclick=function(){(u.textContent="Log in")&&(i.style.display="block")},c.onclick=function(){i.style.display="none"},window.onclick=function(t){t.target==i&&(i.style.display="none")},a.onclick=function(t){t.target===a&&(i.style.display="none")},s.addEventListener("input",function(t){d.email=t.target.value}),f.addEventListener("input",function(t){d.password=t.target.value}),console.log(d),console.log(f),p.addEventListener("click",function(t){event.preventDefault(),fetch("".concat(r,"/api/auth/signup"),{method:"post",headers:{"content-type":"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkYzJhNjMyOWQ0ZDU2ODM5MDJlM2E2ZCIsImlhdCI6MTU3MzA0ODQzOCwiZXhwIjoxNTczNjUzMjM4fQ.oIVNWXUo7GwiDt2o1xXf4r1wqffjEUyBerjZF6b_F-k"},body:JSON.stringify(d)}).then(function(t){return t.json()}).then(function(t){return console.log("data",t)}),i.style.display="none",f.value="",s.value="",l.addEventListener("click",function(t){event.preventDefault(),i.style.display="none",f.value="",s.value="",fetch("".concat(r,"/api/auth/signin"),{method:"post",headers:{"content-type":"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkYzJhNjMyOWQ0ZDU2ODM5MDJlM2E2ZCIsImlhdCI6MTU3MzA0ODQzOCwiZXhwIjoxNTczNjUzMjM4fQ.oIVNWXUo7GwiDt2o1xXf4r1wqffjEUyBerjZF6b_F-k"},body:JSON.stringify(d)}).then(function(t){return t.json()}).then(function(t){localStorage.getItem("token")||(localStorage.setItem("token",t.token),document.location.href="admin-products.html")})})})},26:function(e,t,n){(function(G,$){
/*!
 *
 * Copyright 2009-2017 Kris Kowal under the terms of the MIT
 * license found at https://github.com/kriskowal/q/blob/v1/LICENSE
 *
 * With parts by Tyler Close
 * Copyright 2007-2009 Tyler Close under the terms of the MIT X license found
 * at http://www.opensource.org/licenses/mit-license.html
 * Forked at ref_send.js version: 2009-05-11
 *
 * With parts by Mark Miller
 * Copyright (C) 2011 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */
!function(t){"use strict";"function"==typeof bootstrap?bootstrap("promise",t):e.exports=t()}(function(){"use strict";var c=!1;try{throw new Error}catch(t){c=!!t.stack}function e(){}var r,i=j(),f=function(){var n={task:void 0,next:null},e=n,o=!1,r=void 0,i=!1,u=[];function c(){for(var t,e;n.next;)t=(n=n.next).task,n.task=void 0,(e=n.domain)&&(n.domain=void 0,e.enter()),a(t,e);for(;u.length;)a(t=u.pop());o=!1}function a(t,e){try{t()}catch(t){if(i)throw e&&e.exit(),setTimeout(c,0),e&&e.enter(),t;setTimeout(function(){throw t},0)}e&&e.exit()}if(f=function(t){e=e.next={task:t,domain:i&&G.domain,next:null},o||(o=!0,r())},"object"==typeof G&&"[object process]"===G.toString()&&G.nextTick)i=!0,r=function(){G.nextTick(c)};else if("function"==typeof $)r="undefined"!=typeof window?$.bind(window,c):function(){$(c)};else if("undefined"!=typeof MessageChannel){var t=new MessageChannel;t.port1.onmessage=function(){r=s,(t.port1.onmessage=c)()};var s=function(){t.port2.postMessage(0)};r=function(){setTimeout(c,0),s()}}else r=function(){setTimeout(c,0)};return f.runAfter=function(t){u.push(t),o||(o=!0,r())},f}(),n=Function.call;function t(t){return function(){return n.apply(t,arguments)}}var u,a=t(Array.prototype.slice),s=t(Array.prototype.reduce||function(t,e){var n=0,o=this.length;if(1===arguments.length)for(;;){if(n in this){e=this[n++];break}if(++n>=o)throw new TypeError}for(;n<o;n++)n in this&&(e=t(e,this[n],n));return e}),o=t(Array.prototype.indexOf||function(t){for(var e=0;e<this.length;e++)if(this[e]===t)return e;return-1}),p=t(Array.prototype.map||function(o,r){var i=this,u=[];return s(i,function(t,e,n){u.push(o.call(r,e,n,i))},void 0),u}),l=Object.create||function(t){function e(){}return e.prototype=t,new e},d=Object.defineProperty||function(t,e,n){return t[e]=n.value,t},h=t(Object.prototype.hasOwnProperty),y=Object.keys||function(t){var e=[];for(var n in t)h(t,n)&&e.push(n);return e},v=t(Object.prototype.toString);u="undefined"!=typeof ReturnValue?ReturnValue:function(t){this.value=t};var m="From previous event:";function g(t,e){if(c&&e.stack&&"object"==typeof t&&null!==t&&t.stack){for(var n=[],o=e;o;o=o.source)o.stack&&(!t.__minimumStackCounter__||t.__minimumStackCounter__>o.stackCounter)&&(d(t,"__minimumStackCounter__",{value:o.stackCounter,configurable:!0}),n.unshift(o.stack));n.unshift(t.stack);var r=function(t){for(var e=t.split("\n"),n=[],o=0;o<e.length;++o){var r=e[o];!k(r)&&(-1===(i=r).indexOf("(module.js:")&&-1===i.indexOf("(node.js:"))&&r&&n.push(r)}var i;return n.join("\n")}(n.join("\n"+m+"\n"));d(t,"stack",{value:r,configurable:!0})}}function w(t){var e=/at .+ \((.+):(\d+):(?:\d+)\)$/.exec(t);if(e)return[e[1],Number(e[2])];var n=/at ([^ ]+):(\d+):(?:\d+)$/.exec(t);if(n)return[n[1],Number(n[2])];var o=/.*@(.+):(\d+)$/.exec(t);return o?[o[1],Number(o[2])]:void 0}function k(t){var e=w(t);if(!e)return!1;var n=e[0],o=e[1];return n===r&&i<=o&&o<=q}function j(){if(c)try{throw new Error}catch(t){var e=t.stack.split("\n"),n=w(0<e[0].indexOf("@")?e[1]:e[2]);if(!n)return;return r=n[0],n[1]}}function b(t){return t instanceof E?t:C(t)?function(t){var e=I();return b.nextTick(function(){try{t.then(e.resolve,e.reject,e.notify)}catch(t){e.reject(t)}}),e.promise}(t):B(t)}(b.resolve=b).nextTick=f,b.longStackSupport=!1;var T=1;function I(){var r,i=[],u=[],t=l(I.prototype),e=l(E.prototype);if(e.promiseDispatch=function(t,e,n){var o=a(arguments);i?(i.push(o),"when"===e&&n[1]&&u.push(n[1])):b.nextTick(function(){r.promiseDispatch.apply(r,o)})},e.valueOf=function(){if(i)return e;var t=S(r);return M(t)&&(r=t),t},e.inspect=function(){return r?r.inspect():{state:"pending"}},b.longStackSupport&&c)try{throw new Error}catch(t){e.stack=t.stack.substring(t.stack.indexOf("\n")+1),e.stackCounter=T++}function n(n){r=n,b.longStackSupport&&c&&(e.source=n),s(i,function(t,e){b.nextTick(function(){n.promiseDispatch.apply(n,e)})},void 0),u=i=void 0}return t.promise=e,t.resolve=function(t){r||n(b(t))},t.fulfill=function(t){r||n(B(t))},t.reject=function(t){r||n(L(t))},t.notify=function(n){r||s(u,function(t,e){b.nextTick(function(){e(n)})},void 0)},t}function x(t){if("function"!=typeof t)throw new TypeError("resolver must be a function.");var e=I();try{t(e.resolve,e.reject,e.notify)}catch(t){e.reject(t)}return e.promise}function O(r){return x(function(t,e){for(var n=0,o=r.length;n<o;n++)b(r[n]).then(t,e)})}function E(r,i,e){void 0===i&&(i=function(t){return L(new Error("Promise does not support operation: "+t))}),void 0===e&&(e=function(){return{state:"unknown"}});var u=l(E.prototype);if(u.promiseDispatch=function(t,e,n){var o;try{o=r[e]?r[e].apply(u,n):i.call(u,e,n)}catch(t){o=L(t)}t&&t(o)},u.inspect=e){var t=e();"rejected"===t.state&&(u.exception=t.reason),u.valueOf=function(){var t=e();return"pending"===t.state||"rejected"===t.state?u:t.value}}return u}function _(t,e,n,o){return b(t).then(e,n,o)}function S(t){if(M(t)){var e=t.inspect();if("fulfilled"===e.state)return e.value}return t}function M(t){return t instanceof E}function C(t){return function(t){return t===Object(t)}(t)&&"function"==typeof t.then}"object"==typeof G&&G&&G.env&&G.env.Q_DEBUG&&(b.longStackSupport=!0),(b.defer=I).prototype.makeNodeResolver=function(){var n=this;return function(t,e){t?n.reject(t):2<arguments.length?n.resolve(a(arguments,1)):n.resolve(e)}},b.Promise=x,(b.promise=x).race=O,x.all=Z,x.reject=L,(x.resolve=b).passByCopy=function(t){return t},E.prototype.passByCopy=function(){return this},b.join=function(t,e){return b(t).join(e)},E.prototype.join=function(t){return b([this,t]).spread(function(t,e){if(t===e)return t;throw new Error("Q can't join: not the same: "+t+" "+e)})},b.race=O,E.prototype.race=function(){return this.then(b.race)},(b.makePromise=E).prototype.toString=function(){return"[object Promise]"},E.prototype.then=function(e,n,o){var r=this,i=I(),u=!1;return b.nextTick(function(){r.promiseDispatch(function(t){u||(u=!0,i.resolve(function(t){try{return"function"==typeof e?e(t):t}catch(t){return L(t)}}(t)))},"when",[function(t){u||(u=!0,i.resolve(function(t){if("function"==typeof n){g(t,r);try{return n(t)}catch(t){return L(t)}}return L(t)}(t)))}])}),r.promiseDispatch(void 0,"when",[void 0,function(t){var e,n=!1;try{e=function(t){return"function"==typeof o?o(t):t}(t)}catch(t){if(n=!0,!b.onerror)throw t;b.onerror(t)}n||i.notify(e)}]),i.promise},b.tap=function(t,e){return b(t).tap(e)},E.prototype.tap=function(e){return e=b(e),this.then(function(t){return e.fcall(t).thenResolve(t)})},b.when=_,E.prototype.thenResolve=function(t){return this.then(function(){return t})},b.thenResolve=function(t,e){return b(t).thenResolve(e)},E.prototype.thenReject=function(t){return this.then(function(){throw t})},b.thenReject=function(t,e){return b(t).thenReject(e)},b.nearer=S,b.isPromise=M,b.isPromiseAlike=C,b.isPending=function(t){return M(t)&&"pending"===t.inspect().state},E.prototype.isPending=function(){return"pending"===this.inspect().state},b.isFulfilled=function(t){return!M(t)||"fulfilled"===t.inspect().state},E.prototype.isFulfilled=function(){return"fulfilled"===this.inspect().state},b.isRejected=function(t){return M(t)&&"rejected"===t.inspect().state},E.prototype.isRejected=function(){return"rejected"===this.inspect().state};var R,N,D,P=[],U=[],A=[],z=!0;function J(){P.length=0,U.length=0,z||(z=!0)}function L(e){var t=E({when:function(t){return t&&function(e){if(z){var n=o(U,e);-1!==n&&("object"==typeof G&&"function"==typeof G.emit&&b.nextTick.runAfter(function(){var t=o(A,e);-1!==t&&(G.emit("rejectionHandled",P[n],e),A.splice(t,1))}),U.splice(n,1),P.splice(n,1))}}(this),t?t(e):this}},function(){return this},function(){return{state:"rejected",reason:e}});return function(t,e){z&&("object"==typeof G&&"function"==typeof G.emit&&b.nextTick.runAfter(function(){-1!==o(U,t)&&(G.emit("unhandledRejection",e,t),A.push(t))}),U.push(t),e&&void 0!==e.stack?P.push(e.stack):P.push("(no stack) "+e))}(t,e),t}function B(n){return E({when:function(){return n},get:function(t){return n[t]},set:function(t,e){n[t]=e},delete:function(t){delete n[t]},post:function(t,e){return null==t?n.apply(void 0,e):n[t].apply(n,e)},apply:function(t,e){return n.apply(t,e)},keys:function(){return y(n)}},void 0,function(){return{state:"fulfilled",value:n}})}function F(t,e,n){return b(t).spread(e,n)}function Q(t,e,n){return b(t).dispatch(e,n)}function Z(t){return _(t,function(r){var i=0,u=I();return s(r,function(t,e,n){var o;M(e)&&"fulfilled"===(o=e.inspect()).state?r[n]=o.value:(++i,_(e,function(t){r[n]=t,0==--i&&u.resolve(r)},u.reject,function(t){u.notify({index:n,value:t})}))},void 0),0===i&&u.resolve(r),u.promise})}function V(r){if(0===r.length)return b.resolve();var i=b.defer(),u=0;return s(r,function(t,e,n){var o=r[n];u++,_(o,function(t){i.resolve(t)},function(t){if(0===--u){var e=t||new Error(""+t);e.message="Q can't get fulfillment value from any promise, all promises were rejected. Last error message: "+e.message,i.reject(e)}},function(t){i.notify({index:n,value:t})})},void 0),i.promise}function X(t){return _(t,function(t){return t=p(t,b),_(Z(p(t,function(t){return _(t,e,e)})),function(){return t})})}b.resetUnhandledRejections=J,b.getUnhandledReasons=function(){return P.slice()},b.stopUnhandledRejectionTracking=function(){J(),z=!1},J(),b.reject=L,b.fulfill=B,b.master=function(n){return E({isDef:function(){}},function(t,e){return Q(n,t,e)},function(){return b(n).inspect()})},b.spread=F,E.prototype.spread=function(e,t){return this.all().then(function(t){return e.apply(void 0,t)},t)},b.async=function(e){return function(){function t(t,e){var n;if("undefined"==typeof StopIteration){try{n=o[t](e)}catch(t){return L(t)}return n.done?b(n.value):_(n.value,r,i)}try{n=o[t](e)}catch(t){return function(t){return"[object StopIteration]"===v(t)||t instanceof u}(t)?b(t.value):L(t)}return _(n,r,i)}var o=e.apply(this,arguments),r=t.bind(t,"next"),i=t.bind(t,"throw");return r()}},b.spawn=function(t){b.done(b.async(t)())},b.return=function(t){throw new u(t)},b.promised=function(n){return function(){return F([this,Z(arguments)],function(t,e){return n.apply(t,e)})}},b.dispatch=Q,E.prototype.dispatch=function(t,e){var n=this,o=I();return b.nextTick(function(){n.promiseDispatch(o.resolve,t,e)}),o.promise},b.get=function(t,e){return b(t).dispatch("get",[e])},E.prototype.get=function(t){return this.dispatch("get",[t])},b.set=function(t,e,n){return b(t).dispatch("set",[e,n])},E.prototype.set=function(t,e){return this.dispatch("set",[t,e])},b.del=b.delete=function(t,e){return b(t).dispatch("delete",[e])},E.prototype.del=E.prototype.delete=function(t){return this.dispatch("delete",[t])},b.mapply=b.post=function(t,e,n){return b(t).dispatch("post",[e,n])},E.prototype.mapply=E.prototype.post=function(t,e){return this.dispatch("post",[t,e])},b.send=b.mcall=b.invoke=function(t,e){return b(t).dispatch("post",[e,a(arguments,2)])},E.prototype.send=E.prototype.mcall=E.prototype.invoke=function(t){return this.dispatch("post",[t,a(arguments,1)])},b.fapply=function(t,e){return b(t).dispatch("apply",[void 0,e])},E.prototype.fapply=function(t){return this.dispatch("apply",[void 0,t])},b.try=b.fcall=function(t){return b(t).dispatch("apply",[void 0,a(arguments,1)])},E.prototype.fcall=function(){return this.dispatch("apply",[void 0,a(arguments)])},b.fbind=function(t){var e=b(t),n=a(arguments,1);return function(){return e.dispatch("apply",[this,n.concat(a(arguments))])}},E.prototype.fbind=function(){var t=this,e=a(arguments);return function(){return t.dispatch("apply",[this,e.concat(a(arguments))])}},b.keys=function(t){return b(t).dispatch("keys",[])},E.prototype.keys=function(){return this.dispatch("keys",[])},b.all=Z,E.prototype.all=function(){return Z(this)},b.any=V,E.prototype.any=function(){return V(this)},b.allResolved=(R=X,N="allResolved",D="allSettled",function(){return"undefined"!=typeof console&&"function"==typeof console.warn&&console.warn(N+" is deprecated, use "+D+" instead.",new Error("").stack),R.apply(R,arguments)}),E.prototype.allResolved=function(){return X(this)},b.allSettled=function(t){return b(t).allSettled()},E.prototype.allSettled=function(){return this.then(function(t){return Z(p(t,function(t){function e(){return t.inspect()}return(t=b(t)).then(e,e)}))})},b.fail=b.catch=function(t,e){return b(t).then(void 0,e)},E.prototype.fail=E.prototype.catch=function(t){return this.then(void 0,t)},b.progress=function(t,e){return b(t).then(void 0,void 0,e)},E.prototype.progress=function(t){return this.then(void 0,void 0,t)},b.fin=b.finally=function(t,e){return b(t).finally(e)},E.prototype.fin=E.prototype.finally=function(e){if(!e||"function"!=typeof e.apply)throw new Error("Q can't apply finally callback");return e=b(e),this.then(function(t){return e.fcall().then(function(){return t})},function(t){return e.fcall().then(function(){throw t})})},b.done=function(t,e,n,o){return b(t).done(e,n,o)},E.prototype.done=function(t,e,n){var o=function(t){b.nextTick(function(){if(g(t,r),!b.onerror)throw t;b.onerror(t)})},r=t||e||n?this.then(t,e,n):this;"object"==typeof G&&G&&G.domain&&(o=G.domain.bind(o)),r.then(void 0,o)},b.timeout=function(t,e,n){return b(t).timeout(e,n)},E.prototype.timeout=function(t,e){var n=I(),o=setTimeout(function(){e&&"string"!=typeof e||((e=new Error(e||"Timed out after "+t+" ms")).code="ETIMEDOUT"),n.reject(e)},t);return this.then(function(t){clearTimeout(o),n.resolve(t)},function(t){clearTimeout(o),n.reject(t)},n.notify),n.promise},b.delay=function(t,e){return void 0===e&&(e=t,t=void 0),b(t).delay(e)},E.prototype.delay=function(n){return this.then(function(t){var e=I();return setTimeout(function(){e.resolve(t)},n),e.promise})},b.nfapply=function(t,e){return b(t).nfapply(e)},E.prototype.nfapply=function(t){var e=I(),n=a(t);return n.push(e.makeNodeResolver()),this.fapply(n).fail(e.reject),e.promise},b.nfcall=function(t){var e=a(arguments,1);return b(t).nfapply(e)},E.prototype.nfcall=function(){var t=a(arguments),e=I();return t.push(e.makeNodeResolver()),this.fapply(t).fail(e.reject),e.promise},b.nfbind=b.denodeify=function(n){if(void 0===n)throw new Error("Q can't wrap an undefined function");var o=a(arguments,1);return function(){var t=o.concat(a(arguments)),e=I();return t.push(e.makeNodeResolver()),b(n).fapply(t).fail(e.reject),e.promise}},E.prototype.nfbind=E.prototype.denodeify=function(){var t=a(arguments);return t.unshift(this),b.denodeify.apply(void 0,t)},b.nbind=function(n,o){var r=a(arguments,2);return function(){var t=r.concat(a(arguments)),e=I();return t.push(e.makeNodeResolver()),b(function(){return n.apply(o,arguments)}).fapply(t).fail(e.reject),e.promise}},E.prototype.nbind=function(){var t=a(arguments,0);return t.unshift(this),b.nbind.apply(void 0,t)},b.nmapply=b.npost=function(t,e,n){return b(t).npost(e,n)},E.prototype.nmapply=E.prototype.npost=function(t,e){var n=a(e||[]),o=I();return n.push(o.makeNodeResolver()),this.dispatch("post",[t,n]).fail(o.reject),o.promise},b.nsend=b.nmcall=b.ninvoke=function(t,e){var n=a(arguments,2),o=I();return n.push(o.makeNodeResolver()),b(t).dispatch("post",[e,n]).fail(o.reject),o.promise},E.prototype.nsend=E.prototype.nmcall=E.prototype.ninvoke=function(t){var e=a(arguments,1),n=I();return e.push(n.makeNodeResolver()),this.dispatch("post",[t,e]).fail(n.reject),n.promise},b.nodeify=function(t,e){return b(t).nodeify(e)},E.prototype.nodeify=function(e){if(!e)return this;this.then(function(t){b.nextTick(function(){e(null,t)})},function(t){b.nextTick(function(){e(t)})})},b.noConflict=function(){throw new Error("Q.noConflict only works when Q is used as a global")};var q=j();return b})}).call(this,n(6),n(27).setImmediate)},27:function(t,r,i){(function(t){var e=void 0!==t&&t||"undefined"!=typeof self&&self||window,n=Function.prototype.apply;function o(t,e){this._id=t,this._clearFn=e}r.setTimeout=function(){return new o(n.call(setTimeout,e,arguments),clearTimeout)},r.setInterval=function(){return new o(n.call(setInterval,e,arguments),clearInterval)},r.clearTimeout=r.clearInterval=function(t){t&&t.close()},o.prototype.unref=o.prototype.ref=function(){},o.prototype.close=function(){this._clearFn.call(e,this._id)},r.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},r.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},r._unrefActive=r.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;0<=e&&(t._idleTimeoutId=setTimeout(function(){t._onTimeout&&t._onTimeout()},e))},i(28),r.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==t&&t.setImmediate||this&&this.setImmediate,r.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==t&&t.clearImmediate||this&&this.clearImmediate}).call(this,i(2))},28:function(t,e,n){(function(t,h){!function(n,o){"use strict";if(!n.setImmediate){var r,i,e,u,c=1,a={},s=!1,f=n.document,t=Object.getPrototypeOf&&Object.getPrototypeOf(n);t=t&&t.setTimeout?t:n,r="[object process]"==={}.toString.call(n.process)?function(t){h.nextTick(function(){l(t)})}:function(){if(n.postMessage&&!n.importScripts){var t=!0,e=n.onmessage;return n.onmessage=function(){t=!1},n.postMessage("","*"),n.onmessage=e,t}}()?(u="setImmediate$"+Math.random()+"$",n.addEventListener?n.addEventListener("message",d,!1):n.attachEvent("onmessage",d),function(t){n.postMessage(u+t,"*")}):n.MessageChannel?((e=new MessageChannel).port1.onmessage=function(t){l(t.data)},function(t){e.port2.postMessage(t)}):f&&"onreadystatechange"in f.createElement("script")?(i=f.documentElement,function(t){var e=f.createElement("script");e.onreadystatechange=function(){l(t),e.onreadystatechange=null,i.removeChild(e),e=null},i.appendChild(e)}):function(t){setTimeout(l,0,t)},t.setImmediate=function(t){"function"!=typeof t&&(t=new Function(""+t));for(var e=new Array(arguments.length-1),n=0;n<e.length;n++)e[n]=arguments[n+1];var o={callback:t,args:e};return a[c]=o,r(c),c++},t.clearImmediate=p}function p(t){delete a[t]}function l(t){if(s)setTimeout(l,0,t);else{var e=a[t];if(e){s=!0;try{!function(t){var e=t.callback,n=t.args;switch(n.length){case 0:e();break;case 1:e(n[0]);break;case 2:e(n[0],n[1]);break;case 3:e(n[0],n[1],n[2]);break;default:e.apply(o,n)}}(e)}finally{p(t),s=!1}}}}function d(t){t.source===n&&"string"==typeof t.data&&0===t.data.indexOf(u)&&l(+t.data.slice(u.length))}}("undefined"==typeof self?void 0===t?this:t:self)}).call(this,n(2),n(6))},46:function(t,e,n){"use strict";n.r(e);n(7),n(47),n(25)},47:function(t,e,n){},6:function(t,e){var n,o,r=t.exports={};function i(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function c(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(t){n=i}try{o="function"==typeof clearTimeout?clearTimeout:u}catch(t){o=u}}();var a,s=[],f=!1,p=-1;function l(){f&&a&&(f=!1,a.length?s=a.concat(s):p=-1,s.length&&d())}function d(){if(!f){var t=c(l);f=!0;for(var e=s.length;e;){for(a=s,s=[];++p<e;)a&&a[p].run();p=-1,e=s.length}a=null,f=!1,function(e){if(o===clearTimeout)return clearTimeout(e);if((o===u||!o)&&clearTimeout)return o=clearTimeout,clearTimeout(e);try{o(e)}catch(t){try{return o.call(null,e)}catch(t){return o.call(this,e)}}}(t)}}function h(t,e){this.fun=t,this.array=e}function y(){}r.nextTick=function(t){var e=new Array(arguments.length-1);if(1<arguments.length)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];s.push(new h(t,e)),1!==s.length||f||c(d)},h.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=y,r.addListener=y,r.once=y,r.off=y,r.removeListener=y,r.removeAllListeners=y,r.emit=y,r.prependListener=y,r.prependOnceListener=y,r.listeners=function(t){return[]},r.binding=function(t){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(t){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},7:function(t,e,n){}});
//# sourceMappingURL=adminHome.6f69924f9dfc71a0bcd1.js.map
