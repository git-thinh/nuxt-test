(window.webpackJsonp=window.webpackJsonp||[]).push([[17,4],{262:function(t,e,n){var content=n(285);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(50).default)("0955533e",content,!0,{sourceMap:!1})},263:function(t,e,n){"use strict";n.r(e);var r={props:{title:{type:String,required:!0},description:{type:String,required:!0},image:{type:String,default:"https://nuxtjs.org/nuxt-card.png"}},head:function(){return{meta:[{hid:"twitter:title",name:"twitter:title",content:this.title},{hid:"twitter:description",name:"twitter:description",content:this.description},{hid:"twitter:image",name:"twitter:image",content:this.image},{hid:"twitter:image:alt",name:"twitter:image:alt",content:this.title},{hid:"og:title",property:"og:title",content:this.title},{hid:"og:description",property:"og:description",content:this.description},{hid:"og:image",property:"og:image",content:this.image},{hid:"og:image:secure_url",property:"og:image:secure_url",content:this.image},{hid:"og:image:alt",property:"og:image:alt",content:this.title}]}}},o=n(22),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;t._self._c;return t._e()}),[],!1,null,null,null);e.default=component.exports},284:function(t,e,n){"use strict";n(262)},285:function(t,e,n){var r=n(49)(!1);r.push([t.i,"article[data-v-576445ed]{max-width:600px;margin:0 auto}img[data-v-576445ed]{height:200px}p[data-v-576445ed]{text-align:left}",""]),t.exports=r},300:function(t,e,n){"use strict";n.r(e);var r=n(2),o=(n(33),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$axios,r=t.params,e.next=3,n.$get("https://api.nuxtjs.dev/mountains/".concat(r.slug));case 3:return o=e.sent,e.abrupt("return",{mountain:o});case 5:case"end":return e.stop()}}),e)})))()},methods:{goBack:function(){return this.$router.go(-1)}},head:function(){return{link:[{hid:"canonical",rel:"canonical",href:"https://nuxtjs.org/mountains/".concat(this.$route.params.slug)}]}}}),c=(n(284),n(22)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",[n("SocialHead",{attrs:{title:t.mountain.title,description:t.mountain.description,image:t.mountain.image}}),t._v(" "),n("h1",[t._v(t._s(t.mountain.title))]),t._v(" "),n("section",[n("img",{attrs:{src:t.mountain.image,alt:t.mountain.title}}),t._v(" "),n("p",[t._v(t._s(t.mountain.description))])]),t._v(" "),n("button",{on:{click:t.goBack}},[t._v("Back")])],1)}),[],!1,null,"576445ed",null);e.default=component.exports;installComponents(component,{SocialHead:n(263).default})}}]);