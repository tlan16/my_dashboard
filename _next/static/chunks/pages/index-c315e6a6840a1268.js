(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(n,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(5600)}])},5600:function(n,r,t){"use strict";t.r(r),t.d(r,{__N_SSG:function(){return N},default:function(){return E}});var e=t(5893),i=t(4051),a=t.n(i),u=t(9008),c=t(1664),s=t(7294),o={knowledge:36},l=Object.keys(o),f=t(7596),d=t(4098),p=t.n(d),v=t(3690),h=new(t.n(v)());function w(n,r,t,e,i,a,u){try{var c=n[a](u),s=c.value}catch(o){return void t(o)}c.done?r(s):Promise.resolve(s).then(e,i)}var m=function(){var n,r=(n=a().mark((function n(r){var t,e,i;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=new URLSearchParams({rid:o[r].toString(),day:"3"}),n.next=3,p()("".concat("http://api.bilibili.com","/x/web-interface/ranking/region?").concat(t),{redirect:"follow"});case 3:return e=n.sent,n.next=6,e.text();case 6:return i=n.sent,n.abrupt("return",b(i));case 8:case"end":return n.stop()}}),n)})),function(){var r=this,t=arguments;return new Promise((function(e,i){var a=n.apply(r,t);function u(n){w(a,e,i,u,c,"next",n)}function c(n){w(a,e,i,u,c,"throw",n)}u(void 0)}))});return function(n){return r.apply(this,arguments)}}(),x=h.compileParser({properties:{data:{elements:{properties:{title:{type:"string"},subtitle:{type:"string"},author:{type:"string"},description:{type:"string"},bvid:{type:"string"}},additionalProperties:!0}}},additionalProperties:!0}),b=function(n){var r=x(n);if(void 0===r)throw new f.AssertionError({message:x.message,actual:JSON.parse(n)});return r};function j(n){return"fulfilled"===n.status}function k(n){return n.filter(j)}function _(n,r,t,e,i,a,u){try{var c=n[a](u),s=c.value}catch(o){return void t(o)}c.done?r(s):Promise.resolve(s).then(e,i)}function y(n){return function(){var r=this,t=arguments;return new Promise((function(e,i){var a=n.apply(r,t);function u(n){_(a,e,i,u,c,"next",n)}function c(n){_(a,e,i,u,c,"throw",n)}u(void 0)}))}}!function(){var n=y(a().mark((function n(){var r,t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.allSettled(l.map(function(){var n=y(a().mark((function n(r){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,m(r);case 2:return t=n.sent,n.abrupt("return",[r,t]);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}()));case 2:return r=n.sent,t=k(r).map((function(n){return n.value})),n.abrupt("return",{ranks:Object.fromEntries(t)});case 5:case"end":return n.stop()}}),n)})))}();var g=function(n){return(0,e.jsx)(e.Fragment,{children:n.data.map((function(n,r){var t=n.title,i=n.bvid;return(0,e.jsx)("article",{children:(0,e.jsx)(c.default,{href:"https://www.bilibili.com/video/".concat(i),children:t})},r)}))})},P=function(n){var r=n.ranks;return(0,e.jsxs)("div",{className:"container",children:[(0,e.jsx)(u.default,{children:(0,e.jsx)("title",{children:"Bilibili"})}),(0,e.jsxs)("main",{children:[(0,e.jsx)("h1",{className:"title",children:"Bilibili"}),Object.keys(r).map((function(n){var t;return(null===r||void 0===r||null===(t=r[n])||void 0===t?void 0:t.data)?(0,e.jsxs)(s.Fragment,{children:[(0,e.jsx)("h2",{children:n},n),(0,e.jsx)(g,{data:r[n].data})]},n):null}))]})]})},N=!0,E=function(n){var r=n.bilibili;return(0,e.jsx)(P,{ranks:r.ranks})}}},function(n){n.O(0,[774,604,888,179],(function(){return r=5301,n(n.s=r);var r}));var r=n.O();_N_E=r}]);