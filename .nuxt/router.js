import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _28c20b3b = () => interopDefault(import('..\\pages\\404.vue' /* webpackChunkName: "pages/404" */))
const _046a0450 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _09b34702 = () => interopDefault(import('..\\pages\\anonymous-middleware.vue' /* webpackChunkName: "pages/anonymous-middleware" */))
const _5e574413 = () => interopDefault(import('..\\pages\\api-plugin.vue' /* webpackChunkName: "pages/api-plugin" */))
const _372e0396 = () => interopDefault(import('..\\pages\\auth.vue' /* webpackChunkName: "pages/auth" */))
const _310e0456 = () => interopDefault(import('..\\pages\\bounce.vue' /* webpackChunkName: "pages/bounce" */))
const _a34b25ee = () => interopDefault(import('..\\pages\\fade.vue' /* webpackChunkName: "pages/fade" */))
const _f7965882 = () => interopDefault(import('..\\pages\\loading.vue' /* webpackChunkName: "pages/loading" */))
const _246cfba8 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _7ff06a9a = () => interopDefault(import('..\\pages\\named-middleware.vue' /* webpackChunkName: "pages/named-middleware" */))
const _eaf831fc = () => interopDefault(import('..\\pages\\page-01.vue' /* webpackChunkName: "pages/page-01" */))
const _279c2ef7 = () => interopDefault(import('..\\pages\\parent.vue' /* webpackChunkName: "pages/parent" */))
const _0388b1ab = () => interopDefault(import('..\\pages\\parent\\index.vue' /* webpackChunkName: "pages/parent/index" */))
const _2dfe48f5 = () => interopDefault(import('..\\pages\\parent\\child.vue' /* webpackChunkName: "pages/parent/child" */))
const _dc3b01e6 = () => interopDefault(import('..\\pages\\parent\\child2.vue' /* webpackChunkName: "pages/parent/child2" */))
const _c6c304a8 = () => interopDefault(import('..\\pages\\profile.vue' /* webpackChunkName: "pages/profile" */))
const _c5772146 = () => interopDefault(import('..\\pages\\seo-head.vue' /* webpackChunkName: "pages/seo-head" */))
const _24ca6c74 = () => interopDefault(import('..\\pages\\slide.vue' /* webpackChunkName: "pages/slide" */))
const _80436718 = () => interopDefault(import('..\\pages\\style.vue' /* webpackChunkName: "pages/style" */))
const _41cf09d3 = () => interopDefault(import('..\\pages\\todo.vue' /* webpackChunkName: "pages/todo" */))
const _183dd570 = () => interopDefault(import('..\\pages\\webpack.vue' /* webpackChunkName: "pages/webpack" */))
const _46b298d1 = () => interopDefault(import('..\\pages\\mountains\\_slug.vue' /* webpackChunkName: "pages/mountains/_slug" */))
const _2421df15 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _6932ca4c = () => interopDefault(import('..\\pages\\_continent\\_mountain.vue' /* webpackChunkName: "pages/_continent/_mountain" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/404",
    component: _28c20b3b,
    name: "404"
  }, {
    path: "/about",
    component: _046a0450,
    name: "about"
  }, {
    path: "/anonymous-middleware",
    component: _09b34702,
    name: "anonymous-middleware"
  }, {
    path: "/api-plugin",
    component: _5e574413,
    name: "api-plugin"
  }, {
    path: "/auth",
    component: _372e0396,
    name: "auth"
  }, {
    path: "/bounce",
    component: _310e0456,
    name: "bounce"
  }, {
    path: "/fade",
    component: _a34b25ee,
    name: "fade"
  }, {
    path: "/loading",
    component: _f7965882,
    name: "loading"
  }, {
    path: "/login",
    component: _246cfba8,
    name: "login"
  }, {
    path: "/named-middleware",
    component: _7ff06a9a,
    name: "named-middleware"
  }, {
    path: "/page-01",
    component: _eaf831fc,
    name: "page-01"
  }, {
    path: "/parent",
    component: _279c2ef7,
    children: [{
      path: "",
      component: _0388b1ab,
      name: "parent"
    }, {
      path: "child",
      component: _2dfe48f5,
      name: "parent-child"
    }, {
      path: "child2",
      component: _dc3b01e6,
      name: "parent-child2"
    }]
  }, {
    path: "/profile",
    component: _c6c304a8,
    name: "profile"
  }, {
    path: "/seo-head",
    component: _c5772146,
    name: "seo-head"
  }, {
    path: "/slide",
    component: _24ca6c74,
    name: "slide"
  }, {
    path: "/style",
    component: _80436718,
    name: "style"
  }, {
    path: "/todo",
    component: _41cf09d3,
    name: "todo"
  }, {
    path: "/webpack",
    component: _183dd570,
    name: "webpack"
  }, {
    path: "/mountains/:slug?",
    component: _46b298d1,
    name: "mountains-slug"
  }, {
    path: "/",
    component: _2421df15,
    name: "index"
  }, {
    path: "/:continent/:mountain?",
    component: _6932ca4c,
    name: "continent-mountain"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
