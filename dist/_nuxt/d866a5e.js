(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{286:function(n,t,e){"use strict";var r=e(3),o=e(84)(5),c="find",f=!0;c in[]&&Array(1).find((function(){f=!1})),r(r.P+r.F*f,"Array",{find:function(n){return o(this,n,arguments.length>1?arguments[1]:void 0)}}),e(116)(c)},303:function(n,t,e){"use strict";e.r(t);var r=e(2),o=(e(33),e(286),{asyncData:function(n){return Object(r.a)(regeneratorRuntime.mark((function t(){var e,r,o,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.params,r=n.redirect,t.next=3,fetch("https://api.nuxtjs.dev/mountains").then((function(n){return n.json()}));case 3:if(o=t.sent,!(c=o.find((function(n){return n.continent.toLowerCase()===e.continent&&n.slug===e.mountain})))){t.next=9;break}return t.abrupt("return",{continent:c.continent,mountain:c.title});case 9:r("/");case 10:case"end":return t.stop()}}),t)})))()}}),c=e(22),component=Object(c.a)(o,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("h1",[n._v("Continent: "+n._s(n.continent))]),n._v(" "),e("h2",[n._v("Mountain: "+n._s(n.mountain))]),n._v(" "),e("p",[n._v("Path: "+n._s(n.$route.path))]),n._v(" "),e("NuxtLink",{attrs:{to:"/"}},[n._v("Back to Mountains")])],1)}),[],!1,null,null,null);t.default=component.exports}}]);