"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[410],{2639:function(e,t,n){n.d(t,{Z:function(){return c}});var a="Loader_loaderContainer__UDDYf",r="Loader_loader__+lRPl",s=n(184),c=function(){return(0,s.jsx)("div",{className:a,children:(0,s.jsx)("div",{className:r})})}},6410:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var a=n(3433),r=n(5861),s=n(9439),c=n(7757),i=n.n(c),o=n(2791),u=n(1087),l=n(6048),p=n.n(l),d=n(5139),h=n(2639),m=n(184),f=function(){var e=(0,o.useState)(""),t=(0,s.Z)(e,2),n=t[0],c=t[1],l=(0,o.useState)([]),f=(0,s.Z)(l,2),g=f[0],v=f[1],x=(0,o.useState)([]),b=(0,s.Z)(x,2),k=b[0],w=b[1],j=(0,o.useState)(0),C=(0,s.Z)(j,2),N=C[0],_=C[1],y=(0,o.useState)(!1),Z=(0,s.Z)(y,2),M=Z[0],D=Z[1],S=18,P=(0,d.v)().darkMode;(0,o.useEffect)((function(){var e=function(){var e=(0,r.Z)(i().mark((function e(){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"9a72da818298f390a1dbda79726b9d32",e.next=4,fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=".concat("9a72da818298f390a1dbda79726b9d32"));case 4:return t=e.sent,e.next=7,t.json();case 7:n=e.sent,w(n.genres),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error("Error while fetching genres:",e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();e()}),[]);var E=function(){var e=(0,r.Z)(i().mark((function e(){var t,r,s,c,o,u,l;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:D(!0),t="9a72da818298f390a1dbda79726b9d32",500,r=Math.ceil(27.77777777777778),s=[],c=1;case 6:if(!(c<=r)){e.next=18;break}return e.next=9,fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(t,"&query=").concat(n,"&page=").concat(c,"&per_page=").concat(S));case 9:return o=e.sent,e.next=12,o.json();case 12:u=e.sent,l=u.results||[],s.push.apply(s,(0,a.Z)(l));case 15:c++,e.next=6;break;case 18:v(s),D(!1);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),q=function(){var e=(0,r.Z)(i().mark((function e(t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log("Handling search..."),e.next=4,E();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=(0,r.Z)(i().mark((function e(t){var n,r,s,c,o,u,l;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,n="9a72da818298f390a1dbda79726b9d32",500,r=Math.ceil(27.77777777777778),s=[],c=1;case 6:if(!(c<=r)){e.next=18;break}return e.next=9,fetch("https://api.themoviedb.org/3/discover/movie?api_key=".concat(n,"&with_genres=").concat(t,"&page=").concat(c,"&per_page=").concat(S));case 9:return o=e.sent,e.next=12,o.json();case 12:u=e.sent,l=u.results||[],s.push.apply(s,(0,a.Z)(l));case 15:c++,e.next=6;break;case 18:console.log("Fetched data for genreId:",t),v(s),e.next=25;break;case 22:e.prev=22,e.t0=e.catch(0),console.error("Error while fetching data:",e.t0);case 25:case"end":return e.stop()}}),e,null,[[0,22]])})));return function(t){return e.apply(this,arguments)}}(),F=(N+1)*S,Y=N*S,R=g.slice(Y,F);return console.log("Rendering Movies component...",M,R),(0,m.jsxs)("div",{className:"movies-container ".concat(P?"dark-mode":""),children:[(0,m.jsx)("h2",{children:"Search Your Movie"}),(0,m.jsx)("input",{type:"text",placeholder:"Enter movie title",value:n,onChange:function(e){c(e.target.value)}}),(0,m.jsx)("button",{className:"btn",onClick:q,children:"Search"}),(0,m.jsx)("div",{className:"genre-buttons",children:k.map((function(e){return(0,m.jsx)("button",{onClick:function(){return A(e.id)},className:"genre-button btn",children:e.name},e.id)}))}),M&&(0,m.jsx)(h.Z,{}),(0,m.jsx)("ul",{className:"movies-list",children:R.map((function(e){return(0,m.jsx)("li",{children:(0,m.jsxs)(u.rU,{className:"movie-items",to:"/movies/".concat(e.id),children:[e.poster_path?(0,m.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(e.poster_path),alt:e.title,className:"movie-thumbnail"}):(0,m.jsx)("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCMq4cGfAmaJAYVpXFPLY57EzVip1FTMK-ETQH1aU24VD-bYx5wJ4srHFP99zAgqXBvfQ&usqp=CAU",alt:"Not Found",className:"movie-thumbnail"}),(0,m.jsx)("span",{className:"movies-title",children:(t=e.title,n=12,t.length>n?t.slice(0,n)+"...":t)})]})},e.id);var t,n}))}),window.innerWidth>760&&(0,m.jsx)(p(),{pageCount:Math.ceil(g.length/S),pageRangeDisplayed:3,marginPagesDisplayed:1,onPageChange:function(e){return _(e.selected)},containerClassName:"pagination",subContainerClassName:"pages pagination",activeClassName:"active"}),window.innerWidth<=760&&(0,m.jsx)(p(),{pageCount:Math.ceil(g.length/S),pageRangeDisplayed:0,marginPagesDisplayed:1,onPageChange:function(e){return _(e.selected)},containerClassName:"pagination",subContainerClassName:"pages pagination",activeClassName:"active"})]})}}}]);
//# sourceMappingURL=410.695a22b4.chunk.js.map