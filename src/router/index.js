import Vue from 'vue'
// 引入路由
import VueRouter from 'vue-router'
import routes from './routes'

// 声明路由
Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',

  // 注册路由
  routes

})