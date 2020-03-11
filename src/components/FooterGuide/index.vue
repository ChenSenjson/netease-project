<template>
  <div class="footer-nav">
    <ul>
      <li @click="goto('/home')">
        <van-icon
          name="wap-home-o"
          :class="{on:$route.path === '/home'}"
        /> <span>首页</span> </li>
      <li @click="goto('/item/cateList')">
        <van-icon
          name="apps-o"
          :class="{on:$route.path === '/item/cateList'}"
        /><span>分类</span></li>
      <li @click="goto('/topic')">
        <van-icon
          name="send-gift-o"
          :class="{on:$route.path === '/topic'}"
        /><span>值得买</span></li>
      <li @click="goto('/cart')">
        <van-icon
          name="shopping-cart-o"
          :class="{on:$route.path === '/cart'}"
        /><span>购物车</span></li>
      <li @click="goto('/u')">
        <van-icon
          name="contact"
          :class="{on:$route.path === '/u'}"
        /><span>个人</span></li>
    </ul>
  </div>
</template>
<script>

export default {
  name: 'FooterGuide',
  components: {},
  methods: {
    goto (path) {

      if (this.$route.path !== path) this.$router.replace(path)
    }
  }
}
</script>

<style lang="stylus">
.footer-nav
  position fixed
  bottom 0px
  left 0
  width 100%
  background-color #fff
  padding-bottom 5px
  ul
    padding-top 5px
    display flex
    font-size 22px
    li
      color #999
      display flex
      width 20%
      flex-direction column
      align-items center
      van-icon, .on
        color red
      span
        font-size 14px
</style>