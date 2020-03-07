<template>
  <div class="home">
    <header>
      <p>网易严选</p>
      <input type="text">
      <div
        class="login"
        @click="goto('/u')"
      >登录</div>
    </header>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
export default {
  name: 'Home',
  components: {
  },
  methods: {
    goto (path) {
      this.$router.replace(path)
    }
  }
}
</script>

<style lang="stylus" scoped></style>
