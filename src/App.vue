<template>
  <div id="app">
    <div
      class="top"
      v-if="isShow"
    >
      <p @click="isShow =!isShow"><span>X</span></p>
      <a href="https://m.you.163.com/downloadapp">
        <img
          src="https://yanxuan.nosdn.127.net/3137220cc522a8fbb0b7520637a61469.png?type=webp&imageView&thumbnail=750x0&quality=75"
          alt=""
        ></a>
    </div>
    <router-view />
    <FooterGuide />
  </div>
</template>

<script>
import FooterGuide from '../src/components/FooterGuide/index'
export default {
  data () {
    return {
      isShow: true
    }
  },
  name: 'App',
  components: {
    FooterGuide,
  }
}
</script>

<style lang="stylus" scoped>
#app
  .top
    width 100%
    height 52px
    position relative
    p
      position absolute
      left 0
      top 0
      border-top solid 10px #5B5B5C
      border-left solid 10px #5B5B5C
      border-bottom solid 10px transparent
      border-right solid 10px transparent
      width 0
      height 0
      span
        color #fff
        font-size 1px
        width 0
        line-height 0
        position absolute
        left -6px
        top -5px
    img
      width 100%
      height 100%
</style>
