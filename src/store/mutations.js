import {REVEIVE_HOME}from '../store/mutation-type'

export default {
  [REVEIVE_HOME](state,homeDate){
    //拿到首页数据
    state.homeDate = homeDate
  }
}