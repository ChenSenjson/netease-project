<template>
  <div class="topic">
    <PublicHead>
      <div slot="left">
        <van-icon name="wap-home-o" />
      </div>
      <div slot="title">值得买</div>
      <div slot="right">
        <van-icon
          name="search"
          class="search-icon"
        />
        <van-icon name="shopping-cart-o" />
      </div>
    </PublicHead>
    <div class="milde">
      <div class="bg-img">
        <img
          src="https://m.you.163.com/topic/index/img/topic_title_bg.2373a140.png"
          alt=""
        >
        <img
          class="img-icon"
          src="https://m.you.163.com/topic/index/img/topic_logo.c2284970.png"
          alt=""
        >
        <p class="dec-img">严选好物 用心生活</p>
      </div>
      <div class="wrapper">
        <div class="container">

          <van-swipe
            :loop="false"
            :width="90"
            :height="235"
            indicator-color=red
          >
            <van-swipe-item
              v-for="(item,index) in date.swrpei"
              :key="index"
            >
              <div class="swiper-war">
                <ul class="swiper-con">
                  <li
                    v-for="(item,index) in item.ul"
                    :key="index"
                  ><img :src="item.imgUrl">
                    <span class="title">{{item.title}}</span>
                    <span class="des">{{item.dec}}</span>
                  </li>
                </ul>
              </div>
            </van-swipe-item>

          </van-swipe>
        </div>
      </div>
    </div>

    <div class="conten">
      <ul class="left">
        <li
          v-for="(item,index) in date.letf"
          :key="index"
        >
          <img
            class="big-img"
            :src="item.imgUrl"
          >
          <p class="dec">{{item.title}}</p>
          <div>

            <div class="user">
              <p>
                <img
                  class="uese-img"
                  src="http://yanxuan.nosdn.127.net/d0929d6affc4f1272da63f13fac44c53.jpg?imageView&quality=65&thumbnail=48y48"
                >
                <span class="user-name">{{item.userName}}</span>
              </p>
              <p>
                <img
                  class="img-icon"
                  src="data:image/png;base64,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"
                  alt=""
                >
                <span class="num">{{item.num}}</span>
              </p>

            </div>
            <p class="line"></p>
            <div class="bottom">
              <p class="dec">{{item.dec}}</p>
              <p class="gshop">去购物></p>
            </div>
          </div>
        </li>

      </ul>

      <ul class="right">
        <li
          v-for="(item,index) in date.right"
          :key="index"
        >
          <img
            class="big-img"
            :src="item.imgUrl"
          >
          <p
            class="dec"
            v-if="item.dec"
          >{{item.dec}}</p>
          <div>

            <div class="user">
              <p>
                <img
                  v-if="item.userImg"
                  class="uese-img"
                  :src="item.userImg"
                >
                <span class="user-name">{{item.userName}}</span>
              </p>
              <p>
                <img
                  v-if="item.num"
                  class="img-icon"
                  src="data:image/png;base64,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"
                  alt=""
                >
                <span
                  v-if="item.num"
                  class="num"
                >{{item.num}}</span>
              </p>

            </div>
            <p class="line"></p>
            <div class="bottom">
              <p
                class="dec"
                v-if="item.dec"
              >{{item.dec}}</p>
              <p
                class="gshop"
                v-if="item.dec"
              >去购物></p>
            </div>
          </div>
        </li>

      </ul>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Swipe, SwipeItem } from 'vant';

Vue.use(Swipe);
Vue.use(SwipeItem);
import PublicHead from '../../components/PublicHead'
export default {
  name: 'Topic',
  components: {
    PublicHead
  },
  data () {
    return {
      date: this.$store.state.topicDate
    }
  },
  async mounted () {
    await this.$store.dispatch('getTopicDate')
  }
}
</script>

<style lang="stylus" scoped>
.search-icon
  padding-right 15px
</style>

<style lang="stylus" scoped>
.topic
  width 100%
  height 100%
  background-color #eee
  .milde
    height 342px
    position relative
    .bg-img
      img
        width 100%
        height 257px
      .img-icon
        position absolute
        top 25px
        left 10px
        width 69px
        height 34px
      .dec-img
        color #ffffff
        position absolute
        top 40px
        left 80px
        font-size 14px
    .wrapper
      padding 10px
      position absolute
      top 50px
      left 0
      .container
        width 355px
        height 270px
        background-color #fff
        border-radius 10px
        .swiper-war
          .swiper-con
            padding 18px 3px 3px 3px
            li
              width 84px
              height 100px
              display flex
              flex-direction column
              justify-content center
              align-items center
              font-size 16px
              img
                width 64px
                height 64px
              .title
                font-weight 900
                width 84px
                height 25px
                text-align center
                line-height 25px
              .des
                font-size 10px
                color #ccc
  .conten
    display flex
    justify-content space-around
  .left, .right
    padding-bottom 50px
    li
      margin-bottom 10px
      background-color #fff
      width 172px
      border-radius 10px
      overflow hidden
      .big-img
        width 100%
      .dec
        margin 5px 0 0 10px
        font-size 16px
      .user
        display flex
        justify-content space-around
        p
          line-height 36px
          .uese-img
            width 24px
            height 24px
            border-radius 50%
          .user-name
            vertical-align middle
            color #aaa
            font-size 14px
        p
          .img-icon
            width 16px
            height 16px
          .num
            font-size 14px
            color #aaa
      .line
        margin-left 10px
        width 90%
        border-bottom #ddd 1px solid
      .bottom
        display flex
        align-items center
        font-size 12px
        margin 10px 0
        .dec
          font-size 12px
          white-space nowrap
          overflow hidden
          text-overflow ellipsis
          width 60%
          color #000
        .gshop
          color red
</style>