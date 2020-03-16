<template>
  <div class="cart">
    <PublicHead>
      <div
        slot="left"
        style="font-size:18px"
      >
        购物车
      </div>
      <div
        slot="right"
        style="color:red; font-size:16px"
      >
        领卷
      </div>
    </PublicHead>
    <div class="container">
      <div class="frist">
        <p>
          <van-icon name="circle" />
          <span class="des">30天无忧退货</span>
        </p>
        <p>
          <van-icon name="circle" />
          <span class="des">48小时快速退货</span>
        </p>
        <p>
          <van-icon name="circle" />
          <span class="des">满88免邮费</span>
        </p>

      </div>
      <div v-if="!isLogin">
        <div class="car">
          <van-icon name="cart-o" />
          <p class="car-des">去添加点什么吧</p>
        </div>
        <div class="btn">
          <van-button
            type="danger"
            size="large"
            to="/u"
          >登录</van-button>
        </div>
      </div>
      <div v-else>
        <van-button
          type="primary"
          block
        >已登录</van-button>
      </div>
    </div>

  </div>
</template>

<script>
import Vue from 'vue';
import { Button } from 'vant';

Vue.use(Button);
import PublicHead from '../../components/PublicHead'

export default {
  name: 'Cart',
  data () {
    return {
      isLogin: this.$store.state.user.userName
    }
  },
  components: {
    PublicHead
  }
}
</script>

<style lang="stylus" scoped>
.cart
  width 100%
  height 100%
  background-color #F4F4F4
  .container
    .frist
      background-color #eee
      padding 15px 20px
      display flex
      font-size 5px
      justify-content space-around
      color #ccc
      .des
        color #777
        font-size 12px
    .car
      position absolute
      top 50%
      left 50%
      margin auto
      color #B2B1B0
      font-size 150px
      transform translateX(-50%) translateY(-50%)
      .car-des
        margin-top -20px
        font-size 12px
        transform translateX(25%)
    .btn
      width 240px
      height 40px
      position absolute
      top 65%
      left 50%
      transform translateX(-50%)
</style>