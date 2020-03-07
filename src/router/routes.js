import Home from '../pages/Home/index.vue'
import Item from '../pages/Item/index.vue'
import Topic from '../pages/Topic/index.vue'
import Cart from '../pages/Cart/index.vue'
import U from '../pages/U/index.vue'

export default [{
    path: '/home',
    component: Home
  },
  {
    path: '/item',
    component: Item
  },
  {
    path: '/topic',
    component: Topic
  },
  {
    path: '/cart',
    component: Cart
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