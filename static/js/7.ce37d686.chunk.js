/*! For license information please see 7.ce37d686.chunk.js.LICENSE.txt */
(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[7],{235:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return d}));var n=r(53),o=r(54),a=r(56),u=r(55),l=r(14),c=r(0),s=r.n(c),i=r(22),f=r(29),p=r(52),m=function(e){var t=function(t){Object(a.a)(c,t);var r=Object(u.a)(c);function c(){return Object(n.a)(this,c),r.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return this.props.isAuth?s.a.createElement(e,this.props):s.a.createElement(l.a,{to:"/login"})}}]),c}(s.a.Component);return Object(i.c)((function(e){return{isAuth:e.auth.isAuth}}))(t)},d=function(e){var t=function(t){Object(a.a)(l,t);var r=Object(u.a)(l);function l(){return Object(n.a)(this,l),r.apply(this,arguments)}return Object(o.a)(l,[{key:"componentDidMount",value:function(){this.props.authThunkCreator()}},{key:"render",value:function(){return void 0===this.props.isAuth?s.a.createElement(p.a,null):s.a.createElement(e,this.props)}}]),l}(s.a.Component);return Object(i.c)((function(e){return{isAuth:e.auth.isAuth}}),{authThunkCreator:f.b})(t)}},256:function(e,t,r){},307:function(e,t,r){window,e.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=3)}([function(e,t,r){"use strict";e.exports=r(1)},function(e,t,r){"use strict";var n=r(2),o="function"==typeof Symbol&&Symbol.for,a=o?Symbol.for("react.element"):60103,u=o?Symbol.for("react.portal"):60106,l=o?Symbol.for("react.fragment"):60107,c=o?Symbol.for("react.strict_mode"):60108,s=o?Symbol.for("react.profiler"):60114,i=o?Symbol.for("react.provider"):60109,f=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.forward_ref"):60112,m=o?Symbol.for("react.suspense"):60113,d=o?Symbol.for("react.suspense_list"):60120,y=o?Symbol.for("react.memo"):60115,g=o?Symbol.for("react.lazy"):60116;o&&Symbol.for("react.fundamental"),o&&Symbol.for("react.responder");var b="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var t=e.message,r="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)r+="&args[]="+encodeURIComponent(arguments[n]);return e.message="Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",e}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},P={};function w(e,t,r){this.props=e,this.context=t,this.refs=P,this.updater=r||v}function E(){}function C(e,t,r){this.props=e,this.context=t,this.refs=P,this.updater=r||v}w.prototype.isReactComponent={},w.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw h(Error(85));this.updater.enqueueSetState(this,e,t,"setState")},w.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},E.prototype=w.prototype;var j=C.prototype=new E;j.constructor=C,n(j,w.prototype),j.isPureReactComponent=!0;var O={current:null},k={suspense:null},S={current:null},_=Object.prototype.hasOwnProperty,x={key:!0,ref:!0,__self:!0,__source:!0};function N(e,t,r){var n=void 0,o={},u=null,l=null;if(null!=t)for(n in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(u=""+t.key),t)_.call(t,n)&&!x.hasOwnProperty(n)&&(o[n]=t[n]);var c=arguments.length-2;if(1===c)o.children=r;else if(1<c){for(var s=Array(c),i=0;i<c;i++)s[i]=arguments[i+2];o.children=s}if(e&&e.defaultProps)for(n in c=e.defaultProps)void 0===o[n]&&(o[n]=c[n]);return{$$typeof:a,type:e,key:u,ref:l,props:o,_owner:S.current}}function T(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var I=/\/+/g,$=[];function U(e,t,r,n){if($.length){var o=$.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function R(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>$.length&&$.push(e)}function A(e,t,r){return null==e?0:function e(t,r,n,o){var l=typeof t;"undefined"!==l&&"boolean"!==l||(t=null);var c=!1;if(null===t)c=!0;else switch(l){case"string":case"number":c=!0;break;case"object":switch(t.$$typeof){case a:case u:c=!0}}if(c)return n(o,t,""===r?"."+M(t,0):r),1;if(c=0,r=""===r?".":r+":",Array.isArray(t))for(var s=0;s<t.length;s++){var i=r+M(l=t[s],s);c+=e(l,i,n,o)}else if("function"==typeof(i=null===t||"object"!=typeof t?null:"function"==typeof(i=b&&t[b]||t["@@iterator"])?i:null))for(t=i.call(t),s=0;!(l=t.next()).done;)c+=e(l=l.value,i=r+M(l,s++),n,o);else if("object"===l)throw n=""+t,h(Error(31),"[object Object]"===n?"object with keys {"+Object.keys(t).join(", ")+"}":n,"");return c}(e,"",t,r)}function M(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function F(e,t){e.func.call(e.context,t,e.count++)}function z(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?L(e,n,r,(function(e){return e})):null!=e&&(T(e)&&(e=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(I,"$&/")+"/")+r)),n.push(e))}function L(e,t,r,n,o){var a="";null!=r&&(a=(""+r).replace(I,"$&/")+"/"),A(e,z,t=U(t,a,n,o)),R(t)}function q(){var e=O.current;if(null===e)throw h(Error(321));return e}var D={Children:{map:function(e,t,r){if(null==e)return e;var n=[];return L(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;A(e,F,t=U(null,null,t,r)),R(t)},count:function(e){return A(e,(function(){return null}),null)},toArray:function(e){var t=[];return L(e,t,null,(function(e){return e})),t},only:function(e){if(!T(e))throw h(Error(143));return e}},createRef:function(){return{current:null}},Component:w,PureComponent:C,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:f,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:p,render:e}},lazy:function(e){return{$$typeof:g,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:y,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return q().useCallback(e,t)},useContext:function(e,t){return q().useContext(e,t)},useEffect:function(e,t){return q().useEffect(e,t)},useImperativeHandle:function(e,t,r){return q().useImperativeHandle(e,t,r)},useDebugValue:function(){},useLayoutEffect:function(e,t){return q().useLayoutEffect(e,t)},useMemo:function(e,t){return q().useMemo(e,t)},useReducer:function(e,t,r){return q().useReducer(e,t,r)},useRef:function(e){return q().useRef(e)},useState:function(e){return q().useState(e)},Fragment:l,Profiler:s,StrictMode:c,Suspense:m,unstable_SuspenseList:d,createElement:N,cloneElement:function(e,t,r){if(null==e)throw h(Error(267),e);var o=void 0,u=n({},e.props),l=e.key,c=e.ref,s=e._owner;if(null!=t){void 0!==t.ref&&(c=t.ref,s=S.current),void 0!==t.key&&(l=""+t.key);var i=void 0;for(o in e.type&&e.type.defaultProps&&(i=e.type.defaultProps),t)_.call(t,o)&&!x.hasOwnProperty(o)&&(u[o]=void 0===t[o]&&void 0!==i?i[o]:t[o])}if(1===(o=arguments.length-2))u.children=r;else if(1<o){i=Array(o);for(var f=0;f<o;f++)i[f]=arguments[f+2];u.children=i}return{$$typeof:a,type:e.type,key:l,ref:c,props:u,_owner:s}},createFactory:function(e){var t=N.bind(null,e);return t.type=e,t},isValidElement:T,version:"16.9.0",unstable_withSuspenseConfig:function(e,t){var r=k.suspense;k.suspense=void 0===t?null:t;try{e()}finally{k.suspense=r}},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:O,ReactCurrentBatchConfig:k,ReactCurrentOwner:S,IsSomeRendererActing:{current:!1},assign:n}},V={default:D},B=V&&D||V;e.exports=B.default||B},function(e,t,r){"use strict";var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function u(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var r,l,c=u(e),s=1;s<arguments.length;s++){for(var i in r=Object(arguments[s]))o.call(r,i)&&(c[i]=r[i]);if(n){l=n(r);for(var f=0;f<l.length;f++)a.call(r,l[f])&&(c[l[f]]=r[l[f]])}}return c}},function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r(4);var u=function(e){var t=e.theme,r=e.totalSize,n=e.sizePerPage,u=e.currentPage,l=e.showFirstLastPages,i=e.firstPageText,f=e.lastPageText,p=e.previousPageText,m=e.nextPageText,d=Math.ceil(r/n);return o.a.createElement("div",{className:"react-pagination-js-".concat(t)},o.a.createElement("ul",null,l?o.a.createElement(s,a({},e,{className:1===u?"page disabled":"page",label:i,pageNum:1})):null,o.a.createElement(s,a({},e,{className:1===u?"page disabled":"page",label:p,pageNum:u-1})),o.a.createElement(c,a({},e,{pageNum:d})),o.a.createElement(s,a({},e,{className:u===d?"page disabled":"page",label:m,pageNum:u+1})),l?o.a.createElement(s,a({},e,{className:u===d?"page disabled":"page",label:f,pageNum:d})):null))},l=u,c=function(e){for(var t=e.currentPage,r=e.numberOfPagesNextToActivePage,n=e.pageNum,a=t-r,u=t+r+1,l=[],c=[],s=void 0,i=!1,f=1;f<=n;f++)(1===f||f===n||f>=a&&f<u)&&l.push(f);for(var p=function(){var r=d[m];s&&r-s!=1&&(c.push(o.a.createElement("li",{key:i?-1:0,className:"pageElli"},o.a.createElement("a",null," . . ."))),i=!0),c.push(o.a.createElement("li",{key:r,className:t===r?"is-active":"page",onClick:function(t){t.preventDefault(),e.changeCurrentPage(r)}},o.a.createElement("a",null,r))),s=r},m=0,d=l;m<d.length;m++)p();return c},s=function(e){var t=e.className,r=e.label,n=e.pageNum;return o.a.createElement("li",{className:t,onClick:function(){return e.changeCurrentPage(n)}},o.a.createElement("a",null,r))};u.defaultProps={theme:"default",currentPage:1,totalSize:10,sizePerPage:10,numberOfPagesNextToActivePage:1,showFirstLastPages:!1,lastPageText:"\xbb",firstPageText:"\xab",nextPageText:"\u27e9",previousPageText:"\u27e8"},t.default=l},function(e,t){}])},308:function(e,t,r){},313:function(e,t,r){"use strict";r.r(t);var n=r(53),o=r(54),a=r(56),u=r(55),l=r(0),c=r.n(l),s=r(20),i=r(307),f=r.n(i),p=(r(308),r(256),r(15)),m=function(e){var t=e.user,r=e.followInProgress,n=e.unfollow,o=e.follow;return c.a.createElement("div",{key:t.id*Math.random(),className:"userItem"},c.a.createElement("div",{className:"userItem-mainContainer"},c.a.createElement(p.b,{to:"/profile/"+t.id,className:"userItem_link"},c.a.createElement("div",{className:"userItem-leftContainer"},c.a.createElement("img",{src:t.photos.small?t.photos.small:"https://avatars.mds.yandex.net/get-pdb/1732371/78b3b128-3813-4d35-8b87-b3c911581ca0/s1200?webp=false",alt:"",className:"userItem_avatarka"}),c.a.createElement("div",{className:"userItem_info"},c.a.createElement("span",{className:"userItem_fullName"},t.name),c.a.createElement("span",{className:"userItem_status"},t.status)))),c.a.createElement("div",{className:"userItem_buttons"},t.followed?c.a.createElement("button",{type:"button",disabled:r.some((function(e){return e===t.id})),className:"btn btn-danger",onClick:function(){n(t.id)}},"Unfollow"):c.a.createElement("button",{type:"button",disabled:r.some((function(e){return e===t.id})),className:"btn btn-success",onClick:function(){o(t.id)}},"Follow"))))},d=function(e){var t=e.totalUsersCount,r=e.users,n=e.followInProgress,o=e.unfollow,a=e.follow,u=e.currentPage,l=e.onCurrentPageChanged;return c.a.createElement("div",{className:"findUsers"},r.map((function(e){return c.a.createElement(m,{user:e,followInProgress:n,unfollow:o,follow:a,key:e.id*Math.random()})})),c.a.createElement("div",{className:"pagination"},c.a.createElement(f.a,{currentPage:u,totalSize:t,changeCurrentPage:l,theme:"border-bottom"})))},y=r(235),g=r(52),b=r(22),h=r(74),v=function(e){return e.friendsPage.users},P=function(e){return e.friendsPage.pageSize},w=function(e){return e.friendsPage.totalUsersCount},E=function(e){return e.friendsPage.currentPage},C=function(e){return e.friendsPage.isFetching},j=function(e){return e.friendsPage.followInProgress},O={getUserThunkCreator:h.b,followUserThunkCreator:h.a,unfollowUserThunkCreator:h.c},k=Object(b.c)((function(e){return{users:v(e),pageSize:P(e),totalUsersCount:w(e),currentPage:E(e),isFetching:C(e),followInProgress:j(e)}}),O),S=function(e){Object(a.a)(r,e);var t=Object(u.a)(r);function r(){var e;Object(n.a)(this,r);for(var o=arguments.length,a=new Array(o),u=0;u<o;u++)a[u]=arguments[u];return(e=t.call.apply(t,[this].concat(a))).onCurrentPageChanged=function(t){var r=e.props;(0,r.getUserThunkCreator)(r.pageSize,t)},e}return Object(o.a)(r,[{key:"componentDidMount",value:function(){var e=this.props;(0,e.getUserThunkCreator)(e.pageSize,e.currentPage)}},{key:"render",value:function(){var e=this.props,t=e.isFetching,r=e.totalUsersCount,n=e.users,o=e.unfollowUserThunkCreator,a=e.followUserThunkCreator,u=e.currentPage,l=e.followInProgress;return c.a.createElement(c.a.Fragment,null,t?c.a.createElement(g.a,null):c.a.createElement(d,{totalUsersCount:r,users:n,unfollow:o,follow:a,currentPage:u,onCurrentPageChanged:this.onCurrentPageChanged,followInProgress:l}))}}]),r}(l.Component);t.default=Object(s.d)(k,y.b,y.a)(S)}}]);
//# sourceMappingURL=7.ce37d686.chunk.js.map