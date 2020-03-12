import {
  REVEIVE_HOME,
  REVEIVE_LIFEDATE,
  REVEIVE_TOPIC
} from '../store/mutation-type'

export default {
  [REVEIVE_HOME](state, homeDate) {
    //拿到首页数据
    state.homeDate = homeDate
  },

  [REVEIVE_LIFEDATE](state, lifeDate) {
    state.lifeDate = lifeDate
  },

  [REVEIVE_TOPIC](state, topicDate) {
    state.topicDate = topicDate
  }
}