(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{253:function(e,t,r){var content=r(266);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(50).default)("cceb347a",content,!0,{sourceMap:!1})},265:function(e,t,r){"use strict";r(253)},266:function(e,t,r){var n=r(49)(!1);n.push([e.i,"div[data-v-6427df7b]{max-width:400px;margin:20px auto}",""]),e.exports=n},290:function(e,t,r){"use strict";r.r(t);var n={data:function(){return{user:{username:"",password:""}}},methods:{login:function(){this.$store.commit("auth/setUser",this.user.username),this.$store.commit("auth/setPass",this.user.password),this.$router.push({name:"named-middleware"})}}},o=(r(265),r(22)),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("form",{on:{submit:function(e){e.preventDefault()}}},[r("label",{attrs:{for:"username"}},[e._v("Username")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.username,expression:"user.username"}],attrs:{id:"username",type:"text"},domProps:{value:e.user.username},on:{input:function(t){t.target.composing||e.$set(e.user,"username",t.target.value)}}}),e._v(" "),r("label",{attrs:{for:"password"}},[e._v("Password")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"}],attrs:{id:"password",type:"text"},domProps:{value:e.user.password},on:{input:function(t){t.target.composing||e.$set(e.user,"password",t.target.value)}}}),e._v(" "),r("button",{attrs:{disabled:!e.user.username||!e.user.password},on:{click:e.login}},[e._v("\n            Login\n        ")])])])}),[],!1,null,"6427df7b",null);t.default=component.exports}}]);