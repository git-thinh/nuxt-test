(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{257:function(t,e,n){var content=n(274);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(50).default)("15ff8ae2",content,!0,{sourceMap:!1})},273:function(t,e,n){"use strict";n(257)},274:function(t,e,n){var r=n(49)(!1);r.push([t.i,"h1[data-v-158402e7]{font-family:Nunito}",""]),t.exports=r},296:function(t,e,n){"use strict";n.r(e);var r=n(2),o=(n(33),{data:function(){return{title:"Hello Nuxters!"}},head:function(){return{title:this.title,meta:[{hid:"description",name:"description",content:"The amazing Nuxt application that teaches me all the cool features of Nuxt"}]}},asyncData:function(){return Object(r.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.nuxtjs.dev/mountains").then((function(t){return t.json()}));case 2:return e=t.sent,t.abrupt("return",{mountains:e});case 4:case"end":return t.stop()}}),t)})))()}}),c=(n(273),n(22)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("img",{attrs:{src:n(117)}}),t._v(" "),r("h1",[t._v(t._s(t.title)+" 👋")]),t._v(" "),r("ul",t._l(t.mountains,(function(e){return r("li",{key:e.title},[r("NuxtLink",{attrs:{to:{name:"mountains-slug",params:{slug:e.slug}}}},[t._v("\n                "+t._s(e.title)+"\n            ")])],1)})),0)])}),[],!1,null,"158402e7",null);e.default=component.exports}}]);