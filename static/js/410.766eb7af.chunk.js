"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[410],{410:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var r=n(861),a=n(439),c=n(757),i=n.n(c),o=n(791),s=n(87),u=n(139),l=n(184),h=function(){var e=(0,o.useState)(""),t=(0,a.Z)(e,2),n=t[0],c=t[1],h=(0,o.useState)([]),d=(0,a.Z)(h,2),v=d[0],p=d[1],f=(0,u.v)(),m=function(){var e=(0,r.Z)(i().mark((function e(){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"9a72da818298f390a1dbda79726b9d32",e.next=4,fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat("9a72da818298f390a1dbda79726b9d32","&query=").concat(n));case 4:return t=e.sent,e.next=7,t.json();case 7:r=e.sent,p(r.results),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error("Error while fetching data:",e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();return(0,l.jsxs)("div",{className:"movies-container ".concat(f?"dark-mode":""),children:[(0,l.jsx)("h2",{children:"Search Movies"}),(0,l.jsx)("input",{type:"text",placeholder:"Enter search keyword",value:n,onChange:function(e){c(e.target.value)}}),(0,l.jsx)("button",{onClick:m,children:"Search"}),(0,l.jsx)("ul",{children:v.map((function(e){return(0,l.jsx)("li",{children:(0,l.jsxs)(s.rU,{className:"movie-items",to:"/movies/".concat(e.id),children:[(0,l.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(e.poster_path),alt:e.title,className:"movie-thumbnail"}),(0,l.jsx)("span",{className:"movie-title",children:(t=e.title,n=20,t.length>n?t.slice(0,n)+"...":t)})]})},e.id);var t,n}))})]})}},861:function(e,t,n){function r(e,t,n,r,a,c,i){try{var o=e[c](i),s=o.value}catch(u){return void n(u)}o.done?t(s):Promise.resolve(s).then(r,a)}function a(e){return function(){var t=this,n=arguments;return new Promise((function(a,c){var i=e.apply(t,n);function o(e){r(i,a,c,o,s,"next",e)}function s(e){r(i,a,c,o,s,"throw",e)}o(void 0)}))}}n.d(t,{Z:function(){return a}})}}]);
//# sourceMappingURL=410.766eb7af.chunk.js.map