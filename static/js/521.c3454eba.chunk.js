"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[521],{521:function(t,e,a){a.r(e),a.d(e,{default:function(){return f}});var n=a(861),c=a(439),r=a(757),s=a.n(r),o=a(791),i=a(689),u=a(87),l=a(139),d=a(184),f=function(){var t=(0,i.UO)().movieId,e=(0,o.useState)([]),a=(0,c.Z)(e,2),r=a[0],f=a[1],m=(0,l.v)();return(0,o.useEffect)((function(){var e=function(){var e=(0,n.Z)(s().mark((function e(){var a,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"9a72da818298f390a1dbda79726b9d32",e.next=4,fetch("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat("9a72da818298f390a1dbda79726b9d32"));case 4:return a=e.sent,e.next=7,a.json();case 7:n=e.sent,f(n.cast),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error("Error while fetching data:",e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();e()}),[t]),(0,d.jsxs)("div",{className:"cast-container ".concat(m?"dark-mode":""),children:[(0,d.jsx)("h2",{className:"cast-title",children:"Cast"}),(0,d.jsx)("ul",{className:"cast-list",children:r.map((function(t){return(0,d.jsxs)("li",{className:"cast-item",children:[(0,d.jsx)("img",{className:"actor-image",src:"".concat("https://image.tmdb.org/t/p/w200").concat(t.profile_path),alt:t.name}),(0,d.jsx)("p",{className:"actor-name",children:t.name})]},t.id)}))}),(0,d.jsx)(u.rU,{to:"/movies/".concat(t),className:"back-link",children:"Back to Movie Details"})]})}},861:function(t,e,a){function n(t,e,a,n,c,r,s){try{var o=t[r](s),i=o.value}catch(u){return void a(u)}o.done?e(i):Promise.resolve(i).then(n,c)}function c(t){return function(){var e=this,a=arguments;return new Promise((function(c,r){var s=t.apply(e,a);function o(t){n(s,c,r,o,i,"next",t)}function i(t){n(s,c,r,o,i,"throw",t)}o(void 0)}))}}a.d(e,{Z:function(){return c}})}}]);
//# sourceMappingURL=521.c3454eba.chunk.js.map