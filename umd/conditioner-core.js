/* conditioner-core 2.0.6 */!function(n,t){if("function"==typeof define&&define.amd)define(["exports"],t);else if("undefined"!=typeof exports)t(exports);else{var e={exports:{}};t(e.exports),n.conditioner=e.exports}}(this,function(n){"use strict";function t(n){if(Array.isArray(n)){for(var t=0,e=Array(n.length);t<n.length;t++)e[t]=n[t];return e}return Array.from(n)}Object.defineProperty(n,"__esModule",{value:!0});var e=function(n){var e=d("moduleGetName",n),r=m("moduleSetName",e),o={destroy:null},u={alias:e,name:r,element:n,unmount:function(){o.destroy&&(l("moduleWillUnmount",u),o.destroy(),l("moduleDidUnmount",u),u.onunmount.apply(n))},mount:function(){return l("moduleWillMount",u),d("moduleImport",r).catch(function(t){l("moduleDidCatch",t,u),u.onmounterror.apply(n,[t,u]),console.warn(t)}).then(function(e){o.destroy=d("moduleGetDestructor",d("moduleGetConstructor",e).apply(void 0,t(d("moduleSetConstructorArguments",r,n,e)))),l("moduleDidMount",u),u.onmount.apply(n,[u])}),u},onmounterror:function(){},onmount:function(){},onunmount:function(){}};return u},r=function(n){return n.substr(1).split(" and @").map(function(n){return/^([a-z]+) (.+)/.exec(n).splice(1)})},o=function(n,t,e){return a("monitor").find(function(t){return t.name===n}).create(t,e)},u=function(n,e){var u=r(n).map(function(n){return o.apply(void 0,t(n).concat([e.element]))}),i=function(){u.reduce(function(n,t){return!!n&&t.matches},!0)?e.mount():e.unmount()};return u.forEach(function(n){return n.addListener(i)}),i(),e},i=function(n){var t=e(n),r=d("moduleGetContext",n);return r?u(r,t):t.mount()},c=[],f=function(n){return c.push(n)},a=function(n){return c.filter(function(t){return Object.keys(t).includes(n)}).map(function(t){return t[n]})},l=function(n){for(var t=arguments.length,e=Array(t>1?t-1:0),r=1;r<t;r++)e[r-1]=arguments[r];return a(n).forEach(function(n){return n.apply(void 0,e)})},m=function(n){for(var e=arguments.length,r=Array(e>1?e-1:0),o=1;o<e;o++)r[o-1]=arguments[o];return a(n).reduce(function(n,e){return[e.apply(void 0,t(n))]},r).shift()},d=function(n){for(var t=arguments.length,e=Array(t>1?t-1:0),r=1;r<t;r++)e[r-1]=arguments[r];return a(n).pop().apply(void 0,e)};f({moduleSelector:function(n){return n.querySelectorAll("[data-module]")},moduleGetContext:function(n){return n.dataset.context},moduleImport:function(n){return new Promise(function(t){return t(self[n])})},moduleGetConstructor:function(n){return n},moduleGetDestructor:function(n){return n},moduleSetConstructorArguments:function(n,t){return[t]},moduleGetName:function(n){return n.dataset.module},monitor:{name:"media",create:function(n){return self.matchMedia(n)}}}),n.hydrate=function(n){return[].concat(t(d("moduleSelector",n))).map(i)},n.addPlugin=f});