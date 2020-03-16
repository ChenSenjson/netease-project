<template>
  <div
    class="login"
    @touchmove.prevent
  >

    <PublicHead>
      <div slot="left">
        <van-icon name="wap-home-o" />
      </div>
      <div
        slot="title"
        class="title"
      >网易严选</div>
      <div slot="right">
        <van-icon
          name="search"
          class="search-icon"
        />
        <van-icon name="shopping-cart-o" />
      </div>
    </PublicHead>
    <div class="logo">
      <div class="logo-img">
        <img
          src="https://yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png"
          alt=""
        >
      </div>
    </div>
    <div
      class="btn"
      v-if="isShow"
    >
      <van-button
        icon="star-o"
        type="primary"
        color="#DD1A21"
        size="large "
      >手机快捷登录</van-button><br><br>
      <van-button
        icon="envelop-o"
        plain
        hairline
        type="primary"
        color="#DD1A21"
        size="large "
        @click="isShow = !isShow"
      >邮箱账号登录</van-button>
    </div>
    <div v-else>
      <van-form @submit="onSubmit">
        <van-field
          v-model="username"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div style="margin: 16px;">
          <van-button
            round
            block
            type="info"
            native-type="submit"
          >
            提交
          </van-button>
        </div>
      </van-form>
    </div>
  </div>

</template>

<script>
import Vue from 'vue'
import { Form, field } from 'vant';
Vue.use(field);
Vue.use(Form);
import PublicHead from '../../components/PublicHead'
export default {
  name: 'U',
  data () {
    return {
      isShow: true,
      username: '',
      password: '',
      isLogin: this.$store.state.user.userName

    }

  },
  methods: {
    async onSubmit () {
      // console.log('submit', values);
      // console.log(this.username, this.password);
      let value = { user: this.username, pwd: this.password }
      await this.$store.dispatch('getUserDate', (value))

      this.$router.push('/loginSuccess')
    }
  },
  components: {
    PublicHead
  },
  computed: {

  },
  mounted () {
    if (this.isLogin) {
      this.$router.push('/loginSuccess')
    }
  },

  watch: {

  }

}
</script>

<style lang="stylus" scoped>
.title
  margin 0
  font-family '楷体'
  margin-left 50px
.search-icon
  padding-right 10px
</style>


<style lang="stylus" scoped>
.login
  width 100%
  height 850px
  background-color #F2F5F4
  .logo
    width 100%
    height 242px
    .logo-img
      padding 80px 0 116px 0
      text-align center
      img
        width 134px
        height 45px
  .btn
    padding 0 20px
</style>

<style lang="stylus" scoped>
.van-button--round
  border-radius 0
.van-button--info
  background-color #DD1A21
  border 0
</style>