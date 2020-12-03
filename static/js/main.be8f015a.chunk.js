(this["webpackJsonpstar-wars-app"]=this["webpackJsonpstar-wars-app"]||[]).push([[0],{16:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a(2),r=a.n(n),c=a(25),o=a.n(c),i=a(7),l=a(8),u=a(10),h=a(9),p=a(0),d=a.n(p),j=a(71),b=a(72),m=a(35),O=a(12),f=a(3);var g=a(30),v=a.n(g),x=a(31),S=Object(O.c)({loginReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loginBtnEnabledStatus:!0,errMsg:"",userDetails:""},t=arguments.length>1?arguments[1]:void 0,a={};switch(t.type){case"TOGGLE_LOGIN_BTN_STATUS":a=Object(f.a)(Object(f.a)({},e),{},{loginBtnEnabledStatus:t.status});break;case"LOGIN_ERROR_MESSAGE":a=Object(f.a)(Object(f.a)({},e),{},{errMsg:t.message});break;case"LOGGEDIN_USER_DETAILS_SAVE":a=Object(f.a)(Object(f.a)({},e),{},{userDetails:t.details});break;default:a=e}return a}}),N=Object(O.d)(S,Object(O.a)(v.a,x.a)),E=a(32),y={baseUrl:"https://swapi.dev/api/"},T=a.n(E).a.create({baseURL:y.baseUrl}),w={TOGGLE_LOGIN_BTN_STATUS:"TOGGLE_LOGIN_BTN_STATUS",LOGIN_ERROR:"LOGIN_ERROR_MESSAGE",SAVE_USER_DETAILS:"LOGGEDIN_USER_DETAILS_SAVE"};function _(e){return{type:w.LOGIN_ERROR,message:e}}function L(e,t,a){return function(s,n){T.get("people/?search="+t).then((function(n){var r=n.data.results,c=!1;0===r.length?s(_("No user found with the name of "+t)):(r.forEach((function(n,r){n.name===t&&n.birth_year===a&&(s({type:w.SAVE_USER_DETAILS,details:n}),sessionStorage.setItem("loggedinUser",n.name),e.history.push("/planets"),c=!0)})),c||s(_("Please check your username or password")))})).catch((function(e){s(_(e)),s({type:w.TOGGLE_LOGIN_BTN_STATUS,status:!0})}))}}a(16);var I=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).login=function(e){var t=s.usernameField.value,a=s.passwordField.value,n=s.props,r=s.context.store;""===t||""===a?(s.setState({errormsg:"username or password cannot be empty"}),e.preventDefault()):(s.setState({errormsg:""}),r.dispatch(L(n,t,a)),e.preventDefault())},s.state={errormsg:""},s}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=this.context.store;return t.subscribe((function(){var a=t.getState().loginReducer.errMsg;e.setState({errormsg:a})})),Object(s.jsx)("div",{className:"col-md-12 col-sm-12 no-padding",children:Object(s.jsxs)("div",{className:"header-container",children:[Object(s.jsx)("p",{className:"header",children:"Welcome to world of Star Wars "}),Object(s.jsx)("div",{className:"login-box",children:Object(s.jsxs)("form",{onSubmit:this.login,children:[Object(s.jsx)("label",{htmlFor:"username-login",children:"Username"}),Object(s.jsx)("input",{type:"text",id:"username-login",ref:function(t){e.usernameField=t}}),Object(s.jsx)("label",{htmlFor:"password-login",children:"Password"}),Object(s.jsx)("input",{type:"password",id:"password-login",ref:function(t){e.passwordField=t}}),Object(s.jsx)("p",{className:"error",children:this.state.errormsg}),Object(s.jsx)("button",{children:"Login "}),Object(s.jsx)("div",{className:"clearfix"})]})})]})})}}]),a}(r.a.Component);I.contextTypes={store:d.a.object};var k=a(18),G=a.n(k),C=a(19),R=a(33),M=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).searchPlanets=function(t){var a=e.context.store.getState();!1===e.state.timerSet&&(e.setState(Object(f.a)(Object(f.a)({},e.state),{},{timerSet:!0})),e.setTimer()),"Luke Skywalker"!==a.loginReducer.userDetails.name?(e.timer&&e.state.searchCount<=15&&(e.props.search(t.target.value),e.setState(Object(f.a)(Object(f.a)({},e.state),{},{searchCount:e.state.searchCount+1}))),16===e.state.searchCount&&(e.props.search(""),e.setState(Object(f.a)(Object(f.a)({},e.state),{},{errorMessage:"You are not allowed to perform more than 15 searches per minute",searchCount:e.state.searchCount+1})))):e.props.search(t.target.value)},e.state={timerSet:!1,searchCount:0,errorMessage:"",searchThresholdInMilliSeconds:6e4},e}return Object(l.a)(a,[{key:"setTimer",value:function(){var e=this;this.timer=setTimeout((function(){clearTimeout(e.timer),e.setState({searchCount:0,errorMessage:"",timerSet:!1})}),this.state.searchThresholdInMilliSeconds)}},{key:"render",value:function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)("input",{className:"col-md-12 col-sm-12 search-box",placeholder:"Search planets",onKeyUp:this.searchPlanets}),this.state.errorMessage?Object(s.jsx)("p",{className:"error",children:this.state.errorMessage}):null]})}}]),a}(r.a.Component);M.contextTypes={store:d.a.object};var U=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];function P(){for(var e="#",t=0;t<6;t++)e+=U[Math.round(15*Math.random())];return e}function A(e){for(var t=[{value:1e3,format:"K"},{value:1e6,format:"M"},{value:1e9,format:"B"}],a=t.length-1;a>=0;a--)if(e/t[a].value>=1)return Math.floor(e/t[a].value)+"."+Math.floor(e%t[a].value/(t[a].value/10))+t[a].format;return e}function D(e){return new Promise((function(t,a){T.get("/planets/?page="+e).then((function(e){t(e)})).catch((function(e){a(e)}))}))}var F=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).search=function(t){e.setState({searchKeyword:t})},e.handleClick=function(){e.props.history.push("/"),sessionStorage.removeItem("loggedinUser")},e.state={planets:[],maxPopulation:0,searchKeyword:""},e}return Object(l.a)(a,[{key:"fetchPlanets",value:function(){var e=Object(R.a)(G.a.mark((function e(){var t,a,s;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=0,a=1,e.next=3,D(a);case 3:s=e.sent;case 4:if(!s||!s.data||null==s.data.next){e.next=11;break}return this.setState(Object(f.a)(Object(f.a)({},this.state),{},{planets:[].concat(Object(C.a)(this.state.planets),Object(C.a)(s.data.results))})),e.next=8,D(++a);case 8:s=e.sent,e.next=4;break;case 11:this.state.planets.forEach((function(e){"unknown"!==e.population&&parseInt(e.population,10)>t&&(t=parseInt(e.population,10))})),this.setState(Object(f.a)(Object(f.a)({},this.state),{},{maxPopulation:t}));case 13:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.fetchPlanets()}},{key:"render",value:function(){var e=this,t=this.state,a="";sessionStorage.getItem("loggedinUser")?a=sessionStorage.getItem("loggedinUser"):this.props.history.push("/");var n=this.state.planets.filter((function(e){if(e.name.toLowerCase().startsWith(t.searchKeyword.toLowerCase()))return e}));return Object(s.jsxs)("div",{className:"col-md-12 col-sm-12 no-padding planets-component",children:[Object(s.jsx)("p",{className:"header center",children:"Explore the world of Star Wars"}),Object(s.jsxs)("div",{className:"planet-header",children:[Object(s.jsxs)("div",{children:[Object(s.jsx)(M,{search:this.search}),0===n.length?Object(s.jsx)("p",{className:"error",children:"No Planets Found"}):null]}),Object(s.jsxs)("div",{className:"loggedin-user",children:["Logged In - ",a,Object(s.jsx)("p",{className:"align-right",children:Object(s.jsx)("button",{className:"log-off",onClick:function(){return e.handleClick()},children:"Log Out"})})]})]}),Object(s.jsx)("div",{className:"col-md-12 col-sm-12 planets-container",children:n.map((function(e,a){return Object(s.jsxs)("div",{style:{width:"unknown"===e.population?100:100+parseInt(e.population,10)/t.maxPopulation*350+"px",background:P()},className:"planets",title:"Planet Name: "+e.name+"; Planet Population: "+e.population,children:[Object(s.jsx)("span",{className:"planet-name",children:e.name}),Object(s.jsx)("span",{className:"planet-population",children:A(e.population)})]},a)})).filter((function(e){return null!==e}))})]})}}]),a}(r.a.Component);F.contextTypes={store:d.a.object};var B=F,K=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(s.jsx)(m.a,{store:N,children:Object(s.jsx)(j.a,{children:Object(s.jsxs)("div",{children:[Object(s.jsx)(b.a,{exact:!0,path:"/",component:I}),Object(s.jsx)(b.a,{path:"/planets",component:B})]})})})}}]),a}(r.a.Component);K.contextTypes={store:d.a.object};var V=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,73)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),s(e),n(e),r(e),c(e)}))};o.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(K,{})}),document.getElementById("root")),V()}},[[68,1,2]]]);
//# sourceMappingURL=main.be8f015a.chunk.js.map