(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[6],{228:function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return n}));var r=function(e){if(!e)return"Field is reqiared"},n=function(e){return function(t){return t&&t.length>e?"Must be ".concat(e," characters or less"):void 0}}},229:function(e,t,a){"use strict";a.d(t,"b",(function(){return l})),a.d(t,"a",(function(){return i}));var r=a(238),n=a(0),c=a.n(n),o=(a(230),a(233)),l=function(e){var t=e.input,a=e.meta,n=a.touched,l=a.error,i=(a.warning,e.placeholder),m=Object(r.a)(e,["input","meta","placeholder"]),u=n&&l,s=o({"form-control":!0,"send-message":!0,errorTextarea:u,borderColor:!u});return c.a.createElement("textarea",Object.assign({className:s,placeholder:i},t,m))},i=function(e){var t=e.input,a=e.meta,n=a.touched,l=a.error,i=(a.warning,e.placeholder),m=Object(r.a)(e,["input","meta","placeholder"]),u=n&&l,s=o({"form-control":!0,errorTextarea:u,borderColor:!u});return c.a.createElement("input",Object.assign({className:s,placeholder:i},t,m))}},230:function(e,t,a){},305:function(e,t,a){},306:function(e,t,a){},310:function(e,t,a){"use strict";a.r(t),a.d(t,"Login",(function(){return p}));var r=a(0),n=a.n(r),c=(a(305),a(306),a(105)),o=a(229),l=a(228),i=a(106),m=a(31),u=a(27),s=a(18),p=function(e){return e.isAuth?n.a.createElement(s.a,{to:"/profile"}):n.a.createElement("div",{className:"login"},n.a.createElement("h2",null,"Login"),n.a.createElement(h,{onSubmit:function(t){e.loginThunkCreator(t.login,t.password,t.rememberMe,t.captcha)},captchaUrl:e.captchaUrl}))},h=Object(i.a)({form:"login"})((function(e){var t=e.handleSubmit,a=e.error,r=e.captchaUrl;return n.a.createElement("form",{className:"login-form",onSubmit:t},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"inputEmail4"},"Login"),n.a.createElement(c.a,{component:o.a,type:"text",validate:[l.b],name:"login",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043b\u043e\u0433\u0438\u043d"})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"inputPassword4"},"Password"),n.a.createElement(c.a,{component:o.a,type:"password",validate:[l.b],name:"password",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c"})),n.a.createElement("div",{className:"form-check"},n.a.createElement(c.a,{component:"input",className:"form-check-input",name:"rememberMe",type:"checkbox"}),n.a.createElement("label",{className:"form-check-label",htmlFor:"gridCheck"},"Remember me")),n.a.createElement("div",{className:"someError"},a),r&&n.a.createElement("img",{src:r,alt:""}),r&&n.a.createElement(c.a,{component:o.a,type:"text",validate:[l.b],name:"captcha",style:{marginTop:"15px"}}),n.a.createElement("button",{type:"submit",className:"btn btn-primary button-login"},"Login"))}));t.default=Object(m.b)((function(e){return{isAuth:e.auth.isAuth,captchaUrl:e.auth.captchaURL}}),{loginThunkCreator:u.c})(p)}}]);
//# sourceMappingURL=6.200c660d.chunk.js.map