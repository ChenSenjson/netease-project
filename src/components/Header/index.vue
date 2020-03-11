<template>
  <div
    class="head"
    v-if="isList"
  >
    <header class="home-header">
      <span>网易严选</span>
      <p>
        <van-icon name="search" />
        <input
          type="text"
          placeholder="搜索商品"
        />
      </p>

      <p
        class="login"
        @click="goto('/u')"
      >登录</p>
    </header>
    <nav>
      <div class="navs">
        <van-tabs
          sticky
          offset-top='0'
          type="line"
          line-height="3px"
          line-width='30'
          title-active-color=red
          @click="getCategoryId"
        >
          <van-tab
            title="推荐"
            to="/"
          >推荐</van-tab>
          <van-tab
            title="居家生活"
            name="1005000"
          >居家生活</van-tab>
          <van-tab
            title="服饰鞋包"
            name="1010000"
          >服饰鞋包</van-tab>
          <van-tab
            title="美食酒水"
            name="1005002"
          >美食酒水</van-tab>
          <van-tab
            title="个人清洁"
            name="1013001"
          >个人清洁</van-tab>
          <van-tab
            title="母婴亲子"
            name="1011000"
          >母婴亲子</van-tab>
          <van-tab
            title="运动旅行"
            name="109243029"
          >运动旅行</van-tab>
          <van-tab
            title="数码家电"
            name="1043000"
          >数码家电</van-tab>
          <van-tab
            title="全球特色"
            name="1019000"
          >全球特色</van-tab>
        </van-tabs>
      </div>
      <p
        class="nav-open"
        @click="isNavShow"
      >
        <transition name="fade">
          <van-icon name="arrow-down" />
        </transition>
        <ul
          class="nav-list"
          v-show="isShow"
        >
          <li>推荐</li>
          <li>居家生活</li>
          <li>服饰鞋包</li>
          <li>美食酒水</li>
          <li>个人清洁</li>
          <li>母婴亲子</li>
          <li>运动旅行</li>
          <li>数码家电</li>
          <li>全球特色</li>
        </ul>

      </p>

    </nav>
    <van-overlay
      :show="maskShow"
      @click="mask"
    />

  </div>
  <div
    class="search"
    v-else
  >
    <van-search
      v-model="value"
      placeholder="搜索商品,共3308件好物"
      input-align="center"
    />
  </div>

</template>


<script>
import Vue from 'vue'
import { Tab, Tabs, Overlay, Search } from 'vant'
Vue.use(Tabs)
Vue.use(Tab)
Vue.use(Overlay)
Vue.use(Search)

export default {
  name: 'Header',
  data () {
    return {
      maskShow: false,
      isShow: false,
      isList: true,
      value: ''
    }
  },
  methods: {
    isNavShow () {
      this.isShow = !this.isShow
      this.maskShow = this.isShow
    },
    mask () {
      this.maskShow = false
      this.isShow = !this.isShow
    },

    goto (path) {
      if (this.route.path !== path) {
        this.$router.replace(path)
      }
    },
    getCategoryId (name, title) {
      //头部导航  的  参数传给 /item/list
      console.log(name, title)
      this.$router.push({
        path: `/item/list/${name}`
      })

    }


  },
  mounted () {
    if (this.$route.path === '/item/cateList') {
      this.isList = false

    }
  }

}
</script>

<style lang="stylus" scoped>
.search
  position relative
  z-index 99
.head
  .home-header
    position relative
    z-index 99
    background-color #fff
    padding 5px 0 0 0
    width 100%
    display flex
    align-items center
    justify-content center
    font-size 20px
    padding-bottom 5px
    span
      font-family '楷体'
      font-weight 600
      width 25%
    p:nth-child(2)
      color #333
      padding-left 20px
      display flex
      align-items center
      width 50%
      background-color #EDEDED
      height 30px
      border-radius 5px
      input
        width 70%
        padding-left 10px
        background-color #EDEDED
        font-size 15px
    p:nth-child(3)
      width 15%
      color red
      width 36px
      height 19px
      font-size 12px
      text-align center
      line-height 20px
      border 1px red solid
      border-radius 6px
      margin-left 10px
  nav
    z-index 99
    display flex
    align-items center
    justify-content center
    width 100%
    background-color #fff
    height 30px
    position relative
    .navs
      width 85%
      height 100%
      overflow hidden
      .nav-scroll
        margin-top 100px
        .van-tab.van-ellipsis
          padding 1px 1px !important
    .nav-open
      height 100%
      width 15%
      font-size 20px
      text-align center
      line-height 30px
      .nav-list
        padding 20px 0 0 0
        position absolute
        top 30px
        left 0
        display flex
        justify-content space-between
        flex-direction row
        flex-wrap wrap
        z-index 100
        color #000
        font-size 12px
        width 100%
        background-color #fff
        li
          border 1px solid #ddd
          width 73px
          height 26px
          line-height 26px
          text-align center
          flex-wrap warn
          margin 0 0 20px 15px
          background-color #fafafa
        li:nth-child(8), li:nth-child(4)
          margin-right 15px
</style>


<style lang="stylus">
.van-tabs__nav.van-tabs__nav--line
  margin-top -8px
  padding-bottom 8px
.van-field__left-icon
  margin-left 83px
  margin-right -69px
</style>