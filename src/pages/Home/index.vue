<template>
  <div class="home">
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
          offset-top=0px
          type="line"
          line-height="2"
          title-active-color=red
          scrollspy
        >
          <van-tab
            class="nav-scroll-item"
            title="标签 1"
          >推荐</van-tab>
          <van-tab title="标签 2">居家生活</van-tab>
          <van-tab title="标签 3">服饰鞋包</van-tab>
          <van-tab title="标签 4">美食酒水</van-tab>
          <van-tab title="标签 5">个人清洁</van-tab>
          <van-tab title="标签 6">母婴亲子</van-tab>
          <van-tab title="标签 7">运动旅行</van-tab>
          <van-tab title="标签 8">数码家电</van-tab>
          <van-tab title="标签 9">全球特色</van-tab>
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
          @click.stop=""
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

    <van-overlay
      :show="maskShow"
      @click="mask"
    />
    <!-- 首页内容 -->
    <div class="home-content">
      <div class="content-icon">
        <div>
          <p class="icon1"></p><span>网易自营品牌</span>
        </div>
        <div>
          <p class="icon2"></p><span>30天无忧退货
          </span>
        </div>
        <div>
          <p class="icon3"></p><span>48小时快速退款</span>
        </div>

      </div>
      <div class="content-category">
        <ul>
          <li>
            <p><img
                src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png"
                alt=""
              ></p>
            <span>新品首发</span>
          </li>
          <li>
            <p><img
                src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png"
                alt=""
              ></p>
            <span>新品首发</span>
          </li>
          <li>
            <p><img
                src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png"
                alt=""
              ></p>
            <span>新品首发</span>
          </li>
          <li>
            <p><img
                src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png"
                alt=""
              ></p>
            <span>新品首发</span>
          </li>
          <li>
            <p><img
                src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png"
                alt=""
              ></p>
            <span>新品首发</span>
          </li>
          <li>
            <p><img
                src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png"
                alt=""
              ></p>
            <span>新品首发</span>
          </li>
          <li>
            <p><img
                src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png"
                alt=""
              ></p>
            <span>新品首发</span>
          </li>
          <li>
            <p><img
                src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png"
                alt=""
              ></p>
            <span>新品首发</span>
          </li>
          <li>
            <p><img
                src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png"
                alt=""
              ></p>
            <span>新品首发</span>
          </li>
          <li>
            <p><img
                src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png"
                alt=""
              ></p>
            <span>新品首发</span>
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

            <div>
              <p>福利社</p>
              <span>今日特价</span>
            </div>
            <img
              src="https://yanxuan-item.nosdn.127.net/5f93a1f774805b452a889511e40d78fa.png?quality=75&type=webp&imageView&thumbnail=200x200"
              alt=""
            >
          </div>
          <div class="spell-list">
            <p>新人拼团</p>
            <p>1元起包邮</p>
          </div>
        </div>

      </div>

      <!-- //类目热销榜 -->
      <div class="popular">
        <p class="popular-title">类目热销榜</p>
        <div class="first-list">
          <div class="left">
            <div>
              <p>热销榜</p>
              <p class="line"></p>
            </div>
            <img
              src="https://yanxuan-item.nosdn.127.net/644a27b8e168b8fe8e43ccaad934b24e.png?quality=75&type=webp&imageView&thumbnail=200x200"
              alt=""
            >
          </div>
          <div class="right">
            <div>
              <p>热销榜</p>
              <p class="line"></p>
            </div>
            <img
              src="https://yanxuan-item.nosdn.127.net/e58f23ee17f896fe485b4f18ef58dac1.jpg?quality=75&type=webp&imageView&thumbnail=200x200"
              alt=""
            >
          </div>
        </div>
        <ul class="popular-list">
          <li>
            <span>居家生活榜</span>
            <img
              src="https://yanxuan-item.nosdn.127.net/9a33f08a3b0f5c06fdf4c586d51b2f7c.png?quality=75&type=webp&imageView&thumbnail=200x200"
              alt=""
            >
          </li>
          <li>
            <span>居家生活榜</span>
            <img
              src="https://yanxuan-item.nosdn.127.net/9a33f08a3b0f5c06fdf4c586d51b2f7c.png?quality=75&type=webp&imageView&thumbnail=200x200"
              alt=""
            >
          </li>
          <li>
            <span>居家生活榜</span>
            <img
              src="https://yanxuan-item.nosdn.127.net/9a33f08a3b0f5c06fdf4c586d51b2f7c.png?quality=75&type=webp&imageView&thumbnail=200x200"
              alt=""
            >
          </li>
          <li>
            <span>居家生活榜</span>
            <img
              src="https://yanxuan-item.nosdn.127.net/9a33f08a3b0f5c06fdf4c586d51b2f7c.png?quality=75&type=webp&imageView&thumbnail=200x200"
              alt=""
            >
          </li>
          <li>
            <span>居家生活榜</span>
            <img
              src="https://yanxuan-item.nosdn.127.net/9a33f08a3b0f5c06fdf4c586d51b2f7c.png?quality=75&type=webp&imageView&thumbnail=200x200"
              alt=""
            >
          </li>
          <li>
            <span>居家生活榜</span>
            <img
              src="https://yanxuan-item.nosdn.127.net/9a33f08a3b0f5c06fdf4c586d51b2f7c.png?quality=75&type=webp&imageView&thumbnail=200x200"
              alt=""
            >
          </li>
          <li>
            <span>居家生活榜</span>
            <img
              src="https://yanxuan-item.nosdn.127.net/9a33f08a3b0f5c06fdf4c586d51b2f7c.png?quality=75&type=webp&imageView&thumbnail=200x200"
              alt=""
            >
          </li>
          <li>
            <span>居家生活榜</span>
            <img
              src="https://yanxuan-item.nosdn.127.net/9a33f08a3b0f5c06fdf4c586d51b2f7c.png?quality=75&type=webp&imageView&thumbnail=200x200"
              alt=""
            >
          </li>
        </ul>
      </div>
      <!-- 限时购 -->
      <div class="limit">
        <div class="limit-title">
          <div>
            <span>限时购</span>
            <van-count-down :time="time">
              <template v-slot="timeData">
                <span class="item">{{ timeData.hours }}</span>&#58;
                <span class="item">{{ timeData.minutes }}</span>&#58;
                <span class="item">{{ timeData.seconds }}</span>
              </template>
            </van-count-down>
          </div>

          <span class="more">更多></span>
        </div>
        <van-grid
          :border="false"
          :column-num="3"
          icon-size="108"
        >
          <van-grid-item>
            <van-image src="https://yanxuan-item.nosdn.127.net/c35240dc88a30c7fb569bbca843f5e1a.png?quality=75&type=webp&imageView&thumbnail=216x216" />
            <p class="describe">告别桌面沙发尘屑毛发，mini桌面吸尘器</p>
            <p><span class="new">￥156</span> <span class="old">265</span></p>

          </van-grid-item>
          <van-grid-item>
            <van-image src="https://yanxuan-item.nosdn.127.net/c35240dc88a30c7fb569bbca843f5e1a.png?quality=75&type=webp&imageView&thumbnail=216x216" />
            <p class="describe">告别桌面沙发尘屑毛发，mini桌面吸尘器</p>
            <p><span class="new">￥156</span> <span class="old">265</span></p>

          </van-grid-item>
          <van-grid-item>
            <van-image src="https://yanxuan-item.nosdn.127.net/c35240dc88a30c7fb569bbca843f5e1a.png?quality=75&type=webp&imageView&thumbnail=216x216" />
            <p class="describe">告别桌面沙发尘屑毛发，mini桌面吸尘器</p>
            <p><span class="new">￥156</span> <span class="old">265</span></p>

          </van-grid-item>
          <van-grid-item>
            <van-image src="https://yanxuan-item.nosdn.127.net/c35240dc88a30c7fb569bbca843f5e1a.png?quality=75&type=webp&imageView&thumbnail=216x216" />
            <p class="describe">告别桌面沙发尘屑毛发，mini桌面吸尘器</p>
            <p><span class="new">￥156</span> <span class="old">265</span></p>

          </van-grid-item>
          <van-grid-item>
            <van-image src="https://yanxuan-item.nosdn.127.net/c35240dc88a30c7fb569bbca843f5e1a.png?quality=75&type=webp&imageView&thumbnail=216x216" />
            <p class="describe">告别桌面沙发尘屑毛发，mini桌面吸尘器</p>
            <p><span class="new">￥156</span> <span class="old">265</span></p>

          </van-grid-item>
          <van-grid-item>
            <van-image src="https://yanxuan-item.nosdn.127.net/c35240dc88a30c7fb569bbca843f5e1a.png?quality=75&type=webp&imageView&thumbnail=216x216" />
            <p class="describe">告别桌面沙发尘屑毛发，mini桌面吸尘器</p>
            <p><span class="new">￥156</span> <span class="old">265</span></p>

          </van-grid-item>
        </van-grid>
      </div>
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
import { Swipe, SwipeItem, Tab, Tabs, Overlay, CountDown, Grid, GridItem, Image, Button } from 'vant';

Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Tab)
Vue.use(Overlay)
Vue.use(Tabs)
Vue.use(CountDown)
Vue.use(Grid)
Vue.use(GridItem)
Vue.use(Image)
Vue.use(Button)
// import HelloWorld from './components/HelloWorld.vue'
export default {
  name: 'Home',
  data () {
    return {
      maskShow: false,
      isShow: false,
      time: 30 * 60 * 60 * 1000
    }
  },


  components: {

  },
  methods: {
    goto (path) {
      this.$router.replace(path)

    },
    isNavShow () {
      this.isShow = !this.isShow
      this.maskShow = this.isShow
    },
    mask () {
      this.maskShow = false
      this.isShow = !this.isShow
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
      background-color red
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
          width 82px
          height 90px
          background-color #eee
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
    .limit
      width 92%
      padding 10px 4%
      background-color #ffffff
      margin 10px 0
      .limit-title
        font-size 16px
        display flex
        justify-content space-between
        div
          display flex
          span
            margin-right 10px
      .new
        font-size 16px
        color red
      .old
        font-size 12px
        text-decoration line-through
      .describe
        font-size 12px
  .foot
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
</style>
<style lang="stylus"></style>