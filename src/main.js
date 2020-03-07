import Vue from 'vue'
import App from './App.vue'
import { Icon } from 'vant';

//引入路由器对象
import router from './router'
import '../src/tools/rem'
Vue.config.productionTip = false

Vue.use(Icon);


new Vue({
  render: h => h(App),
  //注册路由器
  router,
}).$mount('#app')