import Vue from 'vue'
import Router from 'vue-router'
import { constantRouter } from './router.config'

Vue.use(Router)

export default new Router({
  // base: process.env.BASE_URL,  // 所有的请求都会在url之后加上这个base
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouter
})

export const asyncRoutes = [
  { path: '*', redirect: '/404', hidden: true }
]

