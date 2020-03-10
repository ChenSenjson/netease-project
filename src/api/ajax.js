import axios from 'axios'
import qs from 'qs'

import Vue from 'vue';
//引入store
import store from '../store/index'
import {
  Toast
} from 'vant';
Vue.use(Toast);
//引入路由  涉及跳转
import router from '../router/index'

axios.interceptors.request.use(config => {
  //使用解构   获取method，data对象
  const {
    method,
    data
  } = config
  if (method.toUpperCase() === 'POST' && data instanceof Object) {
    // 把data对象转为urlEncoding的形式
    config.data = qs.stringify(data)
  }
  //通过config的headers.neddToken的值 判断是否要token
  if (config.headers.neddToken) {
    //取出token
    const token = store.state.token
    if (!token) {
      //没有token
      const error = new error('没有token，重新登录')
      error.states = 401 //代码 错误
      throw error //抛出错误
    } else {
      config.headers.authorization = token
    }
  }

  return config
})

//响应拦截器
axios.interceptors.response.use(
  response => {
    return response.data
  },

  error => {
    //处理 请求 和 响应 的错误
    if (!error.response) {
      //请求的错误信息

      if (error.states === 401) {
        //不是login 才跳转
        if (router.currentRoute.path !== '/login') {
          Toast(error.message)
          router.replace('/login')
        }
      }
    } else {

      //响应的错误信息
      const states = error.response.status

      if (states === 401) {
        //token 过期
        if (router.currentRoute.path !== '/login') {
          Toast(error.response.data.message)
          //重置token
          store.dispatch('resetLogin')
          router.replace('/login')
        }
      } else if (states === 404) {
        Toast('没有资源')
      } else {
        Toast('请求错误:' + error.message)
      }
    }
    return new Promise(() => {})
  }
)

export default axios