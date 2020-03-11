<template>
  <div>
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from '../../components/Header/index'
export default {
  name: 'Item',
  components: {
    Header
  }
}
</script>

<style lang="stylus" scoped>
</style>