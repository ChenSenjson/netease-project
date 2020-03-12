import Home from '../pages/Home/index.vue'
import Item from '../pages/Item/index.vue'
import Topic from '../pages/Topic/index.vue'
import Cart from '../pages/Cart/index.vue'
import U from '../pages/U/index.vue'
//二级路由
import List from '../pages/Item/Lists/List.vue'
import CateList from '../pages/Item/Lists/CateList.vue'


export default [{
    path: '/home',
    component: Home,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/item',
    component: Item,
    meta: {
      isShowFooter: true
    },
    children: [{
      path: 'list/:id',
      component: List,
      meta: {
        isShowFooter: true
      }

    }, {
      path: 'cateList',
      component: CateList,
      meta: {
        isShowFooter: true
      }
    }]
  },
  {
    path: '/topic',
    component: Topic,
    meta: {
      isShowFooter: true
    },
  },
  {
    path: '/cart',
    component: Cart,
    meta: {
      isShowFooter: true
    },
  },
  {
    path: '/u',
    component: U
  },
  {
    path: '/',
    redirect: 'home'
  },
]