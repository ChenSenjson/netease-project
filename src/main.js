import Vue from 'vue'
import App from './App.vue'
import {
  Icon
} from 'vant';

//引入路由器对象
import router from './router'
import '../src/tools/rem'
Vue.config.productionTip = false
//引入mock
import './mock/index'
// store 引入
import store from './store/index'

Vue.use(Icon);


new Vue({
  render: h => h(App),
  //注册路由器
  router,
  //注册仓库
  store
}).$mount('#app')