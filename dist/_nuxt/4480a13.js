(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{294:function(t,e,o){"use strict";o.r(e);var n={middleware:"auth",methods:{logout:function(){this.$store.commit("auth/setUser",null),this.$store.commit("auth/setPass",null),this.$router.push({name:"index"})}}},l=o(22),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("h1",[t._v("Named Middleware 👻")]),t._v(" "),o("button",{on:{click:t.logout}},[t._v("Logout")])])}),[],!1,null,null,null);e.default=component.exports}}]);