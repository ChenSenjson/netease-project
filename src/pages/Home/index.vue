<template>
  <div
    class="home"
    v-if="homeDate.kingKongModule"
  >
    <Header />
    <van-swipe
      class="my-swipe"
      :autoplay="3000"
      indicator-color="white"
      line-height="1px"
    >
      <van-swipe-item><img src="https://yanxuan.nosdn.127.net/313a40161016d4ac55d2a4c52d6172b3.jpg?type=webp&imageView&quality=75&thumbnail=750x0"></van-swipe-item>
      <van-swipe-item><img src="https://yanxuan.nosdn.127.net/5ad48fd492abf807937ec9954be72010.jpg?type=webp&imageView&quality=75&thumbnail=750x0"></van-swipe-item>
      <van-swipe-item><img src="https://yanxuan.nosdn.127.net/3c94dee964a791515434c3d13559a82f.jpg?type=webp&imageView&quality=75&thumbnail=750x0"></van-swipe-item>
      <van-swipe-item><img src="https://yanxuan.nosdn.127.net/291f05d639363a80382fb4e21cb8f123.jpg?type=webp&imageView&quality=75&thumbnail=750x0"></van-swipe-item>
      <van-swipe-item><img src="https://yanxuan.nosdn.127.net/be01331fb46a63943357fcb2f2c54e3a.jpg?type=webp&imageView&quality=75&thumbnail=750x0"></van-swipe-item>
      <van-swipe-item><img src="https://yanxuan.nosdn.127.net/0398d96236e228c33ab82ce09c0d45b6.jpg?type=webp&imageView&quality=75&thumbnail=750x0"></van-swipe-item>
      <van-swipe-item><img src="https://yanxuan.nosdn.127.net/d46d2fd850b9a660eca68028fe974bb0.jpg?type=webp&imageView&quality=75&thumbnail=750x0"></van-swipe-item>
    </van-swipe>

    <!-- 首页内容 -->
    <div class="home-content">
      <div class="content-icon">
        <div
          v-for="(item,index) in homeDate.policyDescList"
          :key="index"
        >
          <p class="icon1"></p><span>{{item.desc}}</span>
        </div>

      </div>
      <div class="content-category">
        <ul>
          <li
            v-for="(item,index) in homeDate.kingKongModule.kingKongList"
            :key="index"
          ><a :href="item.schemeUrl">
              <p><img :src="item.picUrl"></p>
              <span>{{item.text}}</span>
            </a>
          </li>

        </ul>
      </div>
      <div class="mask-appointment">
        <a href="https://act.you.163.com/pub/L62FoIBG4A.html"> <img
            src="https://yanxuan.nosdn.127.net/947b24847de83b94f9dfed2d75ba9d95.png?quality=75&type=webp&imageView&thumbnail=375x0"
            alt=""
          /></a>

        <a href="https://act.you.163.com/act/pub/Lbhxe4WsshSD.html"><img
            src="https://yanxuan.nosdn.127.net/d6eed4125699c1c0275003e096a8b559.png?quality=75&type=webp&imageView&thumbnail=375x0"
            alt=""
          /></a>
      </div>
      <div class="new-people">
        <p class="title">- 新人专享 -</p>
        <div>
          <div class="redbag">
            <p>新人专享礼包</p>
            <img
              src="//yanxuan.nosdn.127.net/352b0ea9b2d058094956efde167ef852.png"
              alt=""
            >
          </div>
          <div class="welfare">
            <a :href="homeDate.indexActivityModule[0].targetUrl">
              <div>

                <p>{{homeDate.indexActivityModule[0].title}}</p>
                <span>{{homeDate.indexActivityModule[0].subTitle}}</span>
              </div>
              <img
                :src="homeDate.indexActivityModule[0].showPicUrl"
                alt=""
              />
            </a>
          </div>
          <div class="spell-list">
            <p>{{homeDate.indexActivityModule[1].title}}</p>
            <p>{{homeDate.indexActivityModule[1].tag}}</p>
          </div>
        </div>

      </div>

      <!-- //类目热销榜   有问题popularTwo-->
      <div
        class="popular"
        v-if="popularTwo[0].categoryName && popularOne[0].categoryName"
      >
        <p class="popular-title">{{homeDate.categoryHotSellModule.title}}</p>
        <div class="first-list">
          <div class="left">
            <div>
              <p>{{popularOne[0].categoryName}}</p>
              <p class="line"></p>
            </div>
            <img :src="popularOne[0].showPicUrl">
          </div>
          <div class="right">
            <div>
              <p>{{popularOne[1].categoryName}}</p>
              <p class="line"></p>
            </div>
            <img :src="popularOne[1].showPicUrl">
          </div>
        </div>
        <ul class="popular-list">
          <li
            v-for="(item,index) in popularTwo"
            :key=index
          ><a :href="item.targetUrl">
              <span>{{item.categoryName}}</span>
              <img :src="item.showPicUrl">
            </a>

          </li>
        </ul>
      </div>
      
      <Gshop />
    </div>
    <!-- 尾部 -->
    <footer class="foot">
      <div class="btn">
        <a href="">下载APP</a>
        <a href="">电脑版</a>
      </div>
      <p>
        <span>网易公司版权所有 © 1997-2020</span><br>
        <span>食品经营许可证：JY13301080111719</span>
      </p>

    </footer>
  </div>
</template>

<script>
import Vue from 'vue';
import { Swipe, SwipeItem, CountDown, Grid, GridItem, Image, Button } from 'vant';

Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(CountDown)
Vue.use(Grid)
Vue.use(GridItem)
Vue.use(Image)
Vue.use(Button)
// import HelloWorld from './components/HelloWorld.vue'

import Header from '../../components/Header'
import Gshop from '../../components/Gshop/'
import { mapState } from 'vuex'
export default {
  name: 'Home',
  data () {
    return {
      // maskShow: false,

      limit: [],
      data: {},
      popularOne: [],
      popularTwo: []
    }
  },


  async mounted () {
    await this.$store.dispatch('getHomedate')

    setTimeout(() => {
      const a = this.$store.state.homeDate.categoryHotSellModule.categoryList
      const b = this.$store.state.homeDate.categoryHotSellModule.categoryList
      this.popularOne = a.slice(0, 2)
      this.popularTwo = b.slice(2, 10)
    }, 1000)



  },
  computed: {
    ...mapState(['homeDate'])




  },


  components: {
    Header,
    Gshop
  },
  methods: {
    populaArr () {

    }


  }
}
</script>

<style lang="stylus" scoped>
.home
  background-color #eee
  height 100%
  width 100%
  position relative
  .my-swipe
    width 100%
    height 187.5px
    .van-swipe-item
      color #fff
      font-size 20px
      line-height 150px
      height 187.5px
      text-align center
      background-color #39a9ed
    img
      width 100%
      height 100%
  // home主要内容
  .home-content
    width 100%
    height 100%
    .content-icon
      margin-left 5%
      width 90%
      height 36px
      display flex
      font-size 12px
      align-items center
      justify-content space-between
      div
        display flex
        .icon1, .icon2, .icon3
          width 16px
          height 16px
          background-image url('https://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png')
          background-size contain
          &.icon2
            background-image url('https://yanxuan.nosdn.127.net/2d0402ffcd52b3ec3b07422681c42a89.png')
          &.icon3
            background-image url('https://yanxuan.nosdn.127.net/eb61ee48e8942dbd1784c9ee75ebe955.png')
        span
          vertical-align bottom
          padding-top 2px
    .content-category
      font-size 12px
      display flex
      width 100%
      height 170px
      background-color #fff
      ul
        width 90%
        margin-left 5%
        display flex
        flex-wrap wrap
        justify-content space-between
        li
          width 20%
          display flex
          justify-content center
          align-items center
          flex-direction column
          p
            width 55px
            height 55px
            img
              width 100%
              height 100%
          span
            margin-top 10px
    .mask-appointment
      padding 10px
      a
        width 166px
        height 93px
        img
          width 166px
          height 93px
      a:nth-child(2)
        float right
    .new-people
      width 100%
      height 280px
      background #fff
      overflow hidden
      display flex
      flex-direction column
      align-items center
      justify-content center
      font-size 16px
      .title
        margin-bottom 10px
      div
        .redbag
          float left
          width 173px
          height 217px
          margin-left 13px
          background-color #F9E9CF
          margin-right 4px
          text-align center
          line-height 58px
          p
            margin-left -30px
          img
            width 129px
            height 129px
        .welfare
          padding 20px 0 0 30px
          background-color #FBE2D3
          float left
          width 143px
          height 87.5px
          margin-bottom 4px
          position relative
          span
            color #aaaaaa
            font-size 12px
          img
            position absolute
            left 40%
            top 10%
            width 60%
        .spell-list
          padding 20px 0 0 30px
          float left
          background-color #FFECC2
          width 143px
          height 87.5px
          p:nth-child(2)
            background-color rgba(0, 0, 0, 0.3)
            color #fff
            font-size 10px
            height 15px
            line-height 15px
            width 60px
            text-align center
            margin-top 4px
    .popular
      margin-top 10px
      padding 15px 10px
      height 355px
      background-color #fff
      .popular-title
        font-size 18px
        margin-bottom 15px
      .first-list
        display flex
        justify-content space-around
        .left
          padding 0 0 0 10px
          display flex
          align-items center
          width 170px
          height 100px
          background-color #F9F3E4
          box-sizing border-box
          div
            p
              font-size 16px
              margin-bottom 10px
            .line
              width 28px
              border-bottom 3px #000 solid
          img
            width 70%
            // padding-left 20px
        .right
          margin-right 10px
          display flex
          align-items center
          width 170px
          height 100px
          div
            padding 40px 0 0 10px
            width 80px
            height 60px
            background-color #EBEFF6
            font-size 16px
            p
              margin-bottom 10px
            .line
              width 30px
              border-bottom 4px #000 solid
          img
            width 60%
      .popular-list
        margin-top 10px
        display flex
        flex-wrap wrap
        justify-content space-between
        li
          background-color #eee
          a
            width 82px
            height 90px
            display flex
            flex-direction column
            justify-content center
            align-items center
            span
              font-size 14px
            img
              width 60px
              height 60px
        li:nth-child(n+5)
          margin-top 10px
  .foot
    position relative
    bottom 0
    height 122px
    background-color #414141
    padding-top 30px
    .btn
      text-align center
      font-size 14px
      a
        color #fff
        line-height 30px
        display inline-block
        width 86px
        height 30px
        border 1px solid #999
      a:nth-child(1)
        margin 0 20px 10px 0
    p
      font-size 12px
      color #999
      text-align center
</style>
<style lang="stylus">
.item
  display inline-block
  width 18px
  margin 0 0 0 6px
  color #fff
  font-size 12px
  text-align center
  background-color #333333
.van-image
  background-color #eee
.van-swipe__indicator
  width 20px
  height 3px
</style>
