<template>
  <div class="list">
    <van-swipe
      class="my-swipe"
      :autoplay="3000"
      indicator-color="white"
    >
      <van-swipe-item><img src="https://yanxuan.nosdn.127.net/2b426e10cc9f3f8b8b2798f6a6499007.jpg?type=webp&imageView&quality=75&thumbnail=750x0"></van-swipe-item>
      <van-swipe-item><img src="https://yanxuan.nosdn.127.net/2b426e10cc9f3f8b8b2798f6a6499007.jpg?type=webp&imageView&quality=75&thumbnail=750x0"></van-swipe-item>
      <van-swipe-item><img src="https://yanxuan.nosdn.127.net/2b426e10cc9f3f8b8b2798f6a6499007.jpg?type=webp&imageView&quality=75&thumbnail=750x0"></van-swipe-item>
      <van-swipe-item><img src="https://yanxuan.nosdn.127.net/2b426e10cc9f3f8b8b2798f6a6499007.jpg?type=webp&imageView&quality=75&thumbnail=750x0"></van-swipe-item>

    </van-swipe>
    <div class="header">
      <p class="title">生活居家<br><span class="brief">抑菌防螨，健康居家</span></p>

    </div>
    <ul class="content">
      <li><a href="">
          <div><img
              src="https://yanxuan-item.nosdn.127.net/fd7083284b934b06d9b5b4617e5c1eb8.png?type=webp&imageView&quality=65&thumbnail=330x330"
              alt=""
            >
            <p class="img-mask">每日急速补货，医用级手套，出行防接触感染</p>
          </div>
          <p class="describe">一次性医用PVC检查手套100只</p>
          <p class="price">￥45</p>

        </a><span class="icon">满99减100</span>
      </li>
      <li><a href="">
          <div><img
              src="https://yanxuan-item.nosdn.127.net/fd7083284b934b06d9b5b4617e5c1eb8.png?type=webp&imageView&quality=65&thumbnail=330x330"
              alt=""
            >
            <p class="img-mask">每日急速补货，医用级手套，出行防接触感染</p>
          </div>
          <p class="describe">一次性医用PVC检查手套100只</p>
          <p class="price">￥45</p>

        </a><span class="icon">满99减100</span>
      </li>
      <li><a href="">
          <div><img
              src="https://yanxuan-item.nosdn.127.net/fd7083284b934b06d9b5b4617e5c1eb8.png?type=webp&imageView&quality=65&thumbnail=330x330"
              alt=""
            >
            <p class="img-mask">每日急速补货，医用级手套，出行防接触感染</p>
          </div>
          <p class="describe">一次性医用PVC检查手套100只</p>
          <p class="price">￥45</p>

        </a><span class="icon">满99减100</span>
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue';
import { Swipe, SwipeItem } from 'vant';

Vue.use(Swipe);
Vue.use(SwipeItem);
export default {
  name: 'List',
  components: {
    // Header
  }
}
</script>

<style lang="stylus" scoped>
.my-swipe .van-swipe-item
  color #fff
  font-size 20px
  text-align center
  img
    height 185px
    width 100%
</style>

<style lang="stylus" scoped>
.list
  .header
    height 50px
    width 100%
    padding 0
    margin 0
    text-align center
    .title
      font-size 16px
      .brief
        font-size 14px
        color #ccc
  .content
    padding 0 0 50px 0
    display flex
    flex-wrap wrap
    justify-content space-around
    li
      overflow hidden
      width 170px
      height 300px
      a
        color #000
        margin 0
        padding 0 
        margin-bottom -20px
        display flex
        flex-direction column
        justify-content centers
        div
          position relative
          img
            width 172px
            height 172px
          .img-mask
            overflow hidden
            width 100%
            text-overflow ellipsis
            font-size 12px
            color #9F8A60
            background-color #F1ECE2
            position absolute
            white-space nowrap
            left 0
            bottom 0
        .describe
          margin 1px 0
          padding 0
          font-size 16px
        .price
          margin 0
          font-size 18px
          color red
      .icon
        display inline
        font-size 12px
        border 1px solid red
        border-radius 8px
        color red
        margin-top -100px
</style>