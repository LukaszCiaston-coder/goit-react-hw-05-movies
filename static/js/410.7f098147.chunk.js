(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[410],{6410:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return f}});var n=a(3433),r=a(5861),i=a(9439),s=a(7757),o=a.n(s),l=a(2791),c=a(1087),p=a(6048),u=a.n(p),d=a(5139),g=a(184),f=function(){var e=(0,l.useState)(""),t=(0,i.Z)(e,2),a=t[0],s=t[1],p=(0,l.useState)([]),f=(0,i.Z)(p,2),v=f[0],b=f[1],h=(0,l.useState)([]),m=(0,i.Z)(h,2),y=m[0],C=m[1],k=(0,l.useState)(0),x=(0,i.Z)(k,2),P=x[0],N=x[1],L=18,w=(0,d.v)().darkMode;(0,l.useEffect)((function(){var e=function(){var e=(0,r.Z)(o().mark((function e(){var t,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"9a72da818298f390a1dbda79726b9d32",e.next=4,fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=".concat("9a72da818298f390a1dbda79726b9d32"));case 4:return t=e.sent,e.next=7,t.json();case 7:a=e.sent,C(a.genres),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error("Error while fetching genres:",e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();e()}),[]);var E=function(){var e=(0,r.Z)(o().mark((function e(){var t,r,i,s,l,c,p;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t="9a72da818298f390a1dbda79726b9d32",500,r=Math.ceil(27.77777777777778),i=[],s=1;case 5:if(!(s<=r)){e.next=17;break}return e.next=8,fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(t,"&query=").concat(a,"&page=").concat(s,"&per_page=").concat(L));case 8:return l=e.sent,e.next=11,l.json();case 11:c=e.sent,p=c.results||[],i.push.apply(i,(0,n.Z)(p));case 14:s++,e.next=5;break;case 17:b(i);case 18:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=(0,r.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=function(){var e=(0,r.Z)(o().mark((function e(t){var a,r,i,s,l,c,p;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,a="9a72da818298f390a1dbda79726b9d32",500,r=Math.ceil(27.77777777777778),i=[],s=1;case 6:if(!(s<=r)){e.next=18;break}return e.next=9,fetch("https://api.themoviedb.org/3/discover/movie?api_key=".concat(a,"&with_genres=").concat(t,"&page=").concat(s,"&per_page=").concat(L));case 9:return l=e.sent,e.next=12,l.json();case 12:c=e.sent,p=c.results||[],i.push.apply(i,(0,n.Z)(p));case 15:s++,e.next=6;break;case 18:console.log("Fetched data for genreId:",t),b(i),e.next=25;break;case 22:e.prev=22,e.t0=e.catch(0),console.error("Error while fetching data:",e.t0);case 25:case"end":return e.stop()}}),e,null,[[0,22]])})));return function(t){return e.apply(this,arguments)}}(),R=(P+1)*L,A=P*L,_=v.slice(A,R);return(0,g.jsxs)("div",{className:"movies-container ".concat(w?"dark-mode":""),children:[(0,g.jsx)("h2",{children:"Search Your Movie"}),(0,g.jsx)("input",{type:"text",placeholder:"Enter movie title",value:a,onChange:function(e){s(e.target.value)}}),(0,g.jsx)("button",{className:"btn",onClick:O,children:"Search"}),(0,g.jsx)("div",{className:"genre-buttons",children:y.map((function(e){return(0,g.jsx)("button",{onClick:function(){return j(e.id)},className:"genre-button btn",children:e.name},e.id)}))}),(0,g.jsx)("ul",{className:"movies-list",children:_.map((function(e){return(0,g.jsx)("li",{children:(0,g.jsxs)(c.rU,{className:"movie-items",to:"/movies/".concat(e.id),children:[e.poster_path?(0,g.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(e.poster_path),alt:e.title,className:"movie-thumbnail"}):(0,g.jsx)("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCMq4cGfAmaJAYVpXFPLY57EzVip1FTMK-ETQH1aU24VD-bYx5wJ4srHFP99zAgqXBvfQ&usqp=CAU",alt:"Not Found",className:"movie-thumbnail"}),(0,g.jsx)("span",{className:"movies-title",children:(t=e.title,a=12,t.length>a?t.slice(0,a)+"...":t)})]})},e.id);var t,a}))}),window.innerWidth>680&&(0,g.jsx)(u(),{pageCount:Math.ceil(v.length/L),pageRangeDisplayed:3,marginPagesDisplayed:1,onPageChange:function(e){return N(e.selected)},containerClassName:"pagination",subContainerClassName:"pages pagination",activeClassName:"active"}),window.innerWidth<=680&&(0,g.jsx)(u(),{pageCount:Math.ceil(v.length/L),pageRangeDisplayed:0,marginPagesDisplayed:1,onPageChange:function(e){return N(e.selected)},containerClassName:"pagination",subContainerClassName:"pages pagination",activeClassName:"active"})]})}},6048:function(e,t,a){var n;e.exports=(n=a(2791),function(){var e={703:function(e,t,a){"use strict";var n=a(414);function r(){}function i(){}i.resetWarningCache=r,e.exports=function(){function e(e,t,a,r,i,s){if(s!==n){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function t(){return e}e.isRequired=e;var a={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:r};return a.PropTypes=a,a}},697:function(e,t,a){e.exports=a(703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},98:function(e){"use strict";e.exports=n}},t={};function a(n){var r=t[n];if(void 0!==r)return r.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,a),i.exports}a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,{a:t}),t},a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};return function(){"use strict";a.r(r),a.d(r,{default:function(){return x}});var e=a(98),t=a.n(e),n=a(697),i=a.n(n);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},s.apply(this,arguments)}var o=function(e){var a=e.pageClassName,n=e.pageLinkClassName,r=e.page,i=e.selected,o=e.activeClassName,l=e.activeLinkClassName,c=e.getEventListener,p=e.pageSelectedHandler,u=e.href,d=e.extraAriaContext,g=e.pageLabelBuilder,f=e.rel,v=e.ariaLabel||"Page "+r+(d?" "+d:""),b=null;return i&&(b="page",v=e.ariaLabel||"Page "+r+" is your current page",a=void 0!==a?a+" "+o:o,void 0!==n?void 0!==l&&(n=n+" "+l):n=l),t().createElement("li",{className:a},t().createElement("a",s({rel:f,role:u?void 0:"button",className:n,href:u,tabIndex:i?"-1":"0","aria-label":v,"aria-current":b,onKeyPress:p},c(p)),g(r)))};o.propTypes={pageSelectedHandler:i().func.isRequired,selected:i().bool.isRequired,pageClassName:i().string,pageLinkClassName:i().string,activeClassName:i().string,activeLinkClassName:i().string,extraAriaContext:i().string,href:i().string,ariaLabel:i().string,page:i().number.isRequired,getEventListener:i().func.isRequired,pageLabelBuilder:i().func.isRequired,rel:i().string};var l=o;function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},c.apply(this,arguments)}var p=function(e){var a=e.breakLabel,n=e.breakAriaLabel,r=e.breakClassName,i=e.breakLinkClassName,s=e.breakHandler,o=e.getEventListener,l=r||"break";return t().createElement("li",{className:l},t().createElement("a",c({className:i,role:"button",tabIndex:"0","aria-label":n,onKeyPress:s},o(s)),a))};p.propTypes={breakLabel:i().oneOfType([i().string,i().node]),breakAriaLabel:i().string,breakClassName:i().string,breakLinkClassName:i().string,breakHandler:i().func.isRequired,getEventListener:i().func.isRequired};var u=p;function d(e){return null!=e?e:arguments.length>1&&void 0!==arguments[1]?arguments[1]:""}function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},f.apply(this,arguments)}function v(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function b(e,t){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},b(e,t)}function h(e,t){if(t&&("object"===g(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return m(e)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}function C(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&b(e,t)}(o,e);var a,n,r,i,s=(r=o,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=y(r);if(i){var a=y(this).constructor;e=Reflect.construct(t,arguments,a)}else e=t.apply(this,arguments);return h(this,e)});function o(e){var a,n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),C(m(a=s.call(this,e)),"handlePreviousPage",(function(e){var t=a.state.selected;a.handleClick(e,null,t>0?t-1:void 0,{isPrevious:!0})})),C(m(a),"handleNextPage",(function(e){var t=a.state.selected,n=a.props.pageCount;a.handleClick(e,null,t<n-1?t+1:void 0,{isNext:!0})})),C(m(a),"handlePageSelected",(function(e,t){if(a.state.selected===e)return a.callActiveCallback(e),void a.handleClick(t,null,void 0,{isActive:!0});a.handleClick(t,null,e)})),C(m(a),"handlePageChange",(function(e){a.state.selected!==e&&(a.setState({selected:e}),a.callCallback(e))})),C(m(a),"getEventListener",(function(e){return C({},a.props.eventListener,e)})),C(m(a),"handleClick",(function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=r.isPrevious,s=void 0!==i&&i,o=r.isNext,l=void 0!==o&&o,c=r.isBreak,p=void 0!==c&&c,u=r.isActive,d=void 0!==u&&u;e.preventDefault?e.preventDefault():e.returnValue=!1;var g=a.state.selected,f=a.props.onClick,v=n;if(f){var b=f({index:t,selected:g,nextSelectedPage:n,event:e,isPrevious:s,isNext:l,isBreak:p,isActive:d});if(!1===b)return;Number.isInteger(b)&&(v=b)}void 0!==v&&a.handlePageChange(v)})),C(m(a),"handleBreakClick",(function(e,t){var n=a.state.selected;a.handleClick(t,e,n<e?a.getForwardJump():a.getBackwardJump(),{isBreak:!0})})),C(m(a),"callCallback",(function(e){void 0!==a.props.onPageChange&&"function"==typeof a.props.onPageChange&&a.props.onPageChange({selected:e})})),C(m(a),"callActiveCallback",(function(e){void 0!==a.props.onPageActive&&"function"==typeof a.props.onPageActive&&a.props.onPageActive({selected:e})})),C(m(a),"getElementPageRel",(function(e){var t=a.state.selected,n=a.props,r=n.nextPageRel,i=n.prevPageRel,s=n.selectedPageRel;return t-1===e?i:t===e?s:t+1===e?r:void 0})),C(m(a),"pagination",(function(){var e=[],n=a.props,r=n.pageRangeDisplayed,i=n.pageCount,s=n.marginPagesDisplayed,o=n.breakLabel,l=n.breakClassName,c=n.breakLinkClassName,p=n.breakAriaLabels,d=a.state.selected;if(i<=r)for(var g=0;g<i;g++)e.push(a.getPageElement(g));else{var f=r/2,v=r-f;d>i-r/2?f=r-(v=i-d):d<r/2&&(v=r-(f=d));var b,h,m=function(e){return a.getPageElement(e)},y=[];for(b=0;b<i;b++){var C=b+1;if(C<=s)y.push({type:"page",index:b,display:m(b)});else if(C>i-s)y.push({type:"page",index:b,display:m(b)});else if(b>=d-f&&b<=d+(0===d&&r>1?v-1:v))y.push({type:"page",index:b,display:m(b)});else if(o&&y.length>0&&y[y.length-1].display!==h&&(r>0||s>0)){var k=b<d?p.backward:p.forward;h=t().createElement(u,{key:b,breakAriaLabel:k,breakLabel:o,breakClassName:l,breakLinkClassName:c,breakHandler:a.handleBreakClick.bind(null,b),getEventListener:a.getEventListener}),y.push({type:"break",index:b,display:h})}}y.forEach((function(t,a){var n=t;"break"===t.type&&y[a-1]&&"page"===y[a-1].type&&y[a+1]&&"page"===y[a+1].type&&y[a+1].index-y[a-1].index<=2&&(n={type:"page",index:t.index,display:m(t.index)}),e.push(n.display)}))}return e})),void 0!==e.initialPage&&void 0!==e.forcePage&&console.warn("(react-paginate): Both initialPage (".concat(e.initialPage,") and forcePage (").concat(e.forcePage,") props are provided, which is discouraged.")+" Use exclusively forcePage prop for a controlled component.\nSee https://reactjs.org/docs/forms.html#controlled-components"),n=e.initialPage?e.initialPage:e.forcePage?e.forcePage:0,a.state={selected:n},a}return a=o,(n=[{key:"componentDidMount",value:function(){var e=this.props,t=e.initialPage,a=e.disableInitialCallback,n=e.extraAriaContext,r=e.pageCount,i=e.forcePage;void 0===t||a||this.callCallback(t),n&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead."),Number.isInteger(r)||console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(r,"). Did you forget a Math.ceil()?")),void 0!==t&&t>r-1&&console.warn("(react-paginate): The initialPage prop provided is greater than the maximum page index from pageCount prop (".concat(t," > ").concat(r-1,").")),void 0!==i&&i>r-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(i," > ").concat(r-1,")."))}},{key:"componentDidUpdate",value:function(e){void 0!==this.props.forcePage&&this.props.forcePage!==e.forcePage&&(this.props.forcePage>this.props.pageCount-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(this.props.forcePage," > ").concat(this.props.pageCount-1,").")),this.setState({selected:this.props.forcePage})),Number.isInteger(e.pageCount)&&!Number.isInteger(this.props.pageCount)&&console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(this.props.pageCount,"). Did you forget a Math.ceil()?"))}},{key:"getForwardJump",value:function(){var e=this.state.selected,t=this.props,a=t.pageCount,n=e+t.pageRangeDisplayed;return n>=a?a-1:n}},{key:"getBackwardJump",value:function(){var e=this.state.selected-this.props.pageRangeDisplayed;return e<0?0:e}},{key:"getElementHref",value:function(e){var t=this.props,a=t.hrefBuilder,n=t.pageCount,r=t.hrefAllControls;if(a)return r||e>=0&&e<n?a(e+1,n,this.state.selected):void 0}},{key:"ariaLabelBuilder",value:function(e){var t=e===this.state.selected;if(this.props.ariaLabelBuilder&&e>=0&&e<this.props.pageCount){var a=this.props.ariaLabelBuilder(e+1,t);return this.props.extraAriaContext&&!t&&(a=a+" "+this.props.extraAriaContext),a}}},{key:"getPageElement",value:function(e){var a=this.state.selected,n=this.props,r=n.pageClassName,i=n.pageLinkClassName,s=n.activeClassName,o=n.activeLinkClassName,c=n.extraAriaContext,p=n.pageLabelBuilder;return t().createElement(l,{key:e,pageSelectedHandler:this.handlePageSelected.bind(null,e),selected:a===e,rel:this.getElementPageRel(e),pageClassName:r,pageLinkClassName:i,activeClassName:s,activeLinkClassName:o,extraAriaContext:c,href:this.getElementHref(e),ariaLabel:this.ariaLabelBuilder(e),page:e+1,pageLabelBuilder:p,getEventListener:this.getEventListener})}},{key:"render",value:function(){var e=this.props.renderOnZeroPageCount;if(0===this.props.pageCount&&void 0!==e)return e?e(this.props):e;var a=this.props,n=a.disabledClassName,r=a.disabledLinkClassName,i=a.pageCount,s=a.className,o=a.containerClassName,l=a.previousLabel,c=a.previousClassName,p=a.previousLinkClassName,u=a.previousAriaLabel,g=a.prevRel,v=a.nextLabel,b=a.nextClassName,h=a.nextLinkClassName,m=a.nextAriaLabel,y=a.nextRel,C=this.state.selected,k=0===C,x=C===i-1,P="".concat(d(c)).concat(k?" ".concat(d(n)):""),N="".concat(d(b)).concat(x?" ".concat(d(n)):""),L="".concat(d(p)).concat(k?" ".concat(d(r)):""),w="".concat(d(h)).concat(x?" ".concat(d(r)):""),E=k?"true":"false",O=x?"true":"false";return t().createElement("ul",{className:s||o,role:"navigation","aria-label":"Pagination"},t().createElement("li",{className:P},t().createElement("a",f({className:L,href:this.getElementHref(C-1),tabIndex:k?"-1":"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":E,"aria-label":u,rel:g},this.getEventListener(this.handlePreviousPage)),l)),this.pagination(),t().createElement("li",{className:N},t().createElement("a",f({className:w,href:this.getElementHref(C+1),tabIndex:x?"-1":"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":O,"aria-label":m,rel:y},this.getEventListener(this.handleNextPage)),v)))}}])&&v(a.prototype,n),Object.defineProperty(a,"prototype",{writable:!1}),o}(e.Component);C(k,"propTypes",{pageCount:i().number.isRequired,pageRangeDisplayed:i().number,marginPagesDisplayed:i().number,previousLabel:i().node,previousAriaLabel:i().string,prevPageRel:i().string,prevRel:i().string,nextLabel:i().node,nextAriaLabel:i().string,nextPageRel:i().string,nextRel:i().string,breakLabel:i().oneOfType([i().string,i().node]),breakAriaLabels:i().shape({forward:i().string,backward:i().string}),hrefBuilder:i().func,hrefAllControls:i().bool,onPageChange:i().func,onPageActive:i().func,onClick:i().func,initialPage:i().number,forcePage:i().number,disableInitialCallback:i().bool,containerClassName:i().string,className:i().string,pageClassName:i().string,pageLinkClassName:i().string,pageLabelBuilder:i().func,activeClassName:i().string,activeLinkClassName:i().string,previousClassName:i().string,nextClassName:i().string,previousLinkClassName:i().string,nextLinkClassName:i().string,disabledClassName:i().string,disabledLinkClassName:i().string,breakClassName:i().string,breakLinkClassName:i().string,extraAriaContext:i().string,ariaLabelBuilder:i().func,eventListener:i().string,renderOnZeroPageCount:i().func,selectedPageRel:i().string}),C(k,"defaultProps",{pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousLabel:"Previous",previousClassName:"previous",previousAriaLabel:"Previous page",prevPageRel:"prev",prevRel:"prev",nextLabel:"Next",nextClassName:"next",nextAriaLabel:"Next page",nextPageRel:"next",nextRel:"next",breakLabel:"...",breakAriaLabels:{forward:"Jump forward",backward:"Jump backward"},disabledClassName:"disabled",disableInitialCallback:!1,pageLabelBuilder:function(e){return e},eventListener:"onClick",renderOnZeroPageCount:void 0,selectedPageRel:"canonical",hrefAllControls:!1});var x=k}(),r}())}}]);
//# sourceMappingURL=410.7f098147.chunk.js.map