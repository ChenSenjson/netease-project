import {
  reqHomeDate,
  reqLifeDate
} from '../api/index'
import {
  REVEIVE_HOME,
  REVEIVE_LIFEDATE
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
  },

  async getLifeDate({
    commit
  },cateId) {
    // console.log(cateId);
    
    
    const result = await reqLifeDate(cateId)
    if (result.code === 0) {
      const lifeDate = result.date

      commit(REVEIVE_LIFEDATE, lifeDate)

    }
  }
}