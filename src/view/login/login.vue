<style lang="less">
  @import './login.less';
</style>

<template>
  <div class="login" @keydown.enter="handleLogin">
    <div class="login-con">
      <Card icon="log-in" title="欢迎登录" :bordered="false">
        <div class="form-con">
          <login-form @on-success-valid="handleSubmit"></login-form>
          <p class="login-tip">输入用户名和密码登录</p>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
import LoginForm from '_c/login-form'
import axios from 'axios'
import qs from 'qs'
import { setToken, TOKEN_KEY } from '@/libs/util'

export default {
  components: {
    LoginForm
  },
  methods: {
    handleSubmit ({userName, password}) {
      console.log(userName, password)
      var self = this
      var url = 'http://10.0.0.24:8100/login'
      axios.post(url, qs.stringify({
        username: userName,
        password: password
      })).then(function (response) {
        console.log(response.data.code)
        setToken(response.data.data)
        self.$router.push({
          name: 'home'
        })
      }).catch(function (error) {
        console.log(error)
      })
    }
  }
}
</script>

<style>

</style>
