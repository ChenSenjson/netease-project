<template>
  <div class="container">

    <div class="left" @click="goto">
      <slot name="left" />
    </div>
    <div class="title">
      <slot name="title" />
    </div>
    <div class="right">
      <slot name="right" />
    </div>

  </div>
</template>

<script>
export default {
  name: 'PublicHead',
  methods:{
    goto(){
      this.$router.push('/home')
    }
  }
}
</script>

<style lang="stylus" scoped>
.container
  display flex
  font-size 26px
  background-color #fff
  .left
    padding-left 10px
    width 15%
    height 50px
    text-align center
    line-height 50px
  .title
    font-size 20px
    text-align center
    line-height 46px
    width 60%
    height 46px
    margin-top -2px
  .right
    text-align center
    line-height 50px
    width 25%
    height 50px
</style>