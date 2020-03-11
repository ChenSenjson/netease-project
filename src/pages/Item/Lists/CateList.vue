<template>
  <div
    class="cateList"
    @touchmove.prevent
  >
    <div
      class="left"
      ref="scroll"
    >
      <van-sidebar v-model="activeKey">
        <van-sidebar-item
          title="居家生活"
          @click="menu('1005000')"
        />
        <van-sidebar-item
          title="服饰鞋包"
          @click="menu('1010000')"
        />
        <van-sidebar-item title="服饰鞋包" />
        <van-sidebar-item title="美食酒水" />
        <van-sidebar-item title="个人清洁" />
        <van-sidebar-item title="母婴亲子" />
        <van-sidebar-item title="运动旅行" />
        <van-sidebar-item title="数码家电" />
        <van-sidebar-item title="全球特色" />
        <van-sidebar-item title="标签名称" />
        <van-sidebar-item title="标签名称" />
        <van-sidebar-item title="标签名称" />
        <van-sidebar-item title="标签名称" />
        <van-sidebar-item title="标签名称" />

      </van-sidebar>
    </div>
    <div
      class="right"
      ref="scrollRight"
    >
      <div class="first-img"><img :src="lifeDate.imgurl"></div>
      <ul>
        <li>
          <p class="title">{{lifeDate.name}}</p>
          <ul>
            <li
              v-for="(item,index) in lifeDate.subCateList"
              :key="index"
            >
              <img
                :src="item.wapBannerUrl"
                alt=""
              >
              <span class="name">{{item.frontName}}</span>
            </li>

          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import BScroll from 'better-scroll'
import { Sidebar, SidebarItem } from 'vant';
Vue.use(Sidebar);
Vue.use(SidebarItem);


import { mapState } from 'vuex'

export default {
  name: 'CateList',
  data () {
    return {
      activeKey: 0,
      data: this.$store.state.lifeDate
    }
  },
  computed: {
    ...mapState(['lifeDate'])

  },
  components: {

  },
  mounted () {
    // let scroll = new BScroll('.left')
    this.init()
    this._init()
  },
  methods: {
    init () {
      this.bs = new BScroll(this.$refs.scroll, {
        click: true,
        probeType: 3 // listening scroll hook
      })
    },
    // _init () {
    //   this.bs = new BScroll(this.$refs.scrollRight, {
    //     click: true,
    //     probeType: 3 // listening scroll hook
    //   })
    // },
    async menu (cateId) {
      console.log(cateId);
      await this.$store.dispatch('getLifeDate', cateId)
      console.log('cate', cateId);


    }

  }
}
</script>

<style lang="stylus" scoped>
.cateList
  width 100%
  height 100%
  background-color #fff
  display flex
  flex-wrap wrap
  .left
    width 85px
    height 500px
  .right
    width 270px
    padding 10px
    height 500px
    background-color #fff
    .first-img
      img
        width 270px
    ul
      // height 400px
      li
        width 100%
        .title
          margin 0 5px 0 0
          padding-bottom 4px
          font-size 16px
          font-weight 600
          border-bottom #ccc solid 1px
        ul
          margin-top 5px
          display flex
          flex-wrap wrap
          li
            display flex
            flex-direction column
            justify-content center
            align-items center
            width 90px
            // height 90px
            img
              width 72px
              height 72px
            .name
              font-size 14px
              width 100%
              overflow hidden
              text-overflow ellipsis
              white-space nowrap
</style>