<template>
  <div>

    <van-cell
      title="账号"
      center
      title-style='font-size:25px'
      v-model="userName"
    />

    <van-button
      v-if="isLogin"
      disabled
      size="large"
      type="primary"
    >已登录</van-button>
    <van-button
      v-else
      disabled
      size="large"
      type="danger"
    >未登录</van-button>
  </div>
</template>

<script>
import Vue from 'vue'
import { Cell, Button } from 'vant'
Vue.use(Button)
Vue.use(Cell)
export default {
  name: 'LoginSuccess',
  data () {
    return {
      userName: this.$store.state.user.userName,
      isLogin: false
    }
  },
  mounted () {
    this.isLogin = this.$store.state.user.userName
  },
  computed: {

  },
  watch: {
    // userName (val) {
    //   this.isLogin = this.$store.state.user.userName
    // }
  }
}
</script>

<style lang="stylus" scoped></style>