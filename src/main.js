import Vue from 'vue'
import App from './App'
import router from './router'
import VueRouter from 'vue-router'
import 'element-ui/lib/theme-chalk/index.css'
import element from '@/config/element-ui'
import store from './store'
import VueParticles from 'vue-particles'
import Fragment from 'vue-fragment'

// 抽取公用的实例 - 操作成功与失败消息提醒内容等
import myMix from './utils/mixin'
Vue.use(VueParticles)
Vue.mixin(myMix)
Vue.use(element)
Vue.use(VueRouter)
Vue.use(Fragment.Plugin)

Vue.config.devtools = true

import './assets/icon/iconfont.css' // icon
import '@/styles/index.scss'
import './permission' // permission control

import i18n from './lang' // Internationalization
import './icons' // icon
import './errorLog' // error log

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App),
  store,
  i18n,
  template: '<App/>'
}).$mount('#app')
