import { asyncRoutes } from '@/router'
import { constantRouter } from '@/router/router.config'

import Layout from '@/views/layout/Layout'
/**
 *
 * @param  {Array} userRouter 后台返回的用户权限json
 * @param  {Array} allRouter  前端配置好的所有动态路由的集合
 * @return {function(): *} realRoutes 过滤后的路由
 */

function _import(file) {
  return () => import('@/components/' + file + '.vue')
}

function filterRouter(routers) { // 遍历后台传来的路由字符串，转换为组件对象
  const accessedRouters = routers.filter(route => {
    if (route.component) {
      if (route.component === 'Layout') { // Home组件特殊处理
        route.component = Layout
      } else {
        route.component = _import(route.component)
      }
    }
    if (route.children && route.children.length) {
      route.children = filterRouter(route.children)
    } else {
      route.children = []
    }
    return true
  })
  return accessedRouters
}
const permission = {
  state: {
    routes: [],
    addRoutes: []
  },
  mutations: {
    SET_ROUTES: (state, routes) => {
      state.addRoutes = routes + asyncRoutes
      state.routes = constantRouter.concat(routes)
    }
  },
  actions: {
    GenerateRoutes({ commit }, data) {
      return new Promise(resolve => {
        // 使用权限
        const accessedRoutes = filterRouter(data)
        commit('SET_ROUTES', accessedRoutes)
        resolve(accessedRoutes)
      })
    }
  }
}

export default permission
