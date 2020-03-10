import {
  reqHomeDate
} from '../api/index'
import {
  REVEIVE_HOME
} from '../store/mutation-type'

export default {
  async getHomedate({
    commit
  }) {
    const result = await reqHomeDate()
    // 判断响应成  / 败
    if (result.code === 0) {
      const homeDate = result.date
      //  向mutations提交数据
      // console.log(homeDate);
      
      commit(REVEIVE_HOME, homeDate)
    }
  }
}