<template>
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
      <van-grid-item
        v-for="(item,index) in data"
        :key="index"
      >
        <van-image :src="item.showPicUrl" />
        <p
          class="describe"
          v-if="item.describe"
        >告别桌面沙发尘屑毛发，mini桌面吸尘器</p>
        <p><span class="new">￥{{item.activityPrice}}</span> <span class="old">{{item.originPrice}}</span></p>

      </van-grid-item>

    </van-grid>
  </div>
</template>

<script>
export default {
  name: 'Gshop',
  data () {
    return {
      data: this.$store.state.homeDate.flashSaleModule.itemList,
      time: this.$store.state.homeDate.flashSaleModule.remainTime
    }
  },
  computed: {

  },
  mounted () {

  }
}
</script>

<style lang="stylus" scoped>
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
</style>