<template>
  <div
    class="login"
    @touchmove.prevent
  >

    <PublicHead>
      <div slot="left">
        <van-icon name="wap-home-o" />
      </div>
      <div
        slot="title"
        class="title"
      >网易严选</div>
      <div slot="right">
        <van-icon
          name="search"
          class="search-icon"
        />
        <van-icon name="shopping-cart-o" />
      </div>
    </PublicHead>
    <div class="logo">
      <div class="logo-img">
        <img
          src="https://yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png"
          alt=""
        >
      </div>
    </div>
    <div class="btn">
      <van-button
        icon="star-o"
        type="primary"
        color="#DD1A21"
        size="large "
      >手机快捷登录</van-button><br><br>
      <van-button
        icon="envelop-o"
        plain
        hairline
        type="primary"
        color="#DD1A21"
        size="large "
      >邮箱账号登录</van-button>
    </div>
  </div>

</template>

<script>
import PublicHead from '../../components/PublicHead'
export default {
  name: 'U',
  components: {
    PublicHead
  }
}
</script>

<style lang="stylus" scoped>
.title
  margin 0
  font-family '楷体'
  margin-left 50px
.search-icon
  padding-right 10px
</style>

<style lang="stylus" scoped>
.login
  width 100%
  height 850px
  background-color #F2F5F4
  .logo
    width 100%
    height 242px
    .logo-img
      padding 80px 0 116px 0
      text-align center
      img
        width 134px
        height 45px
  .btn
    padding 0 20px
</style>