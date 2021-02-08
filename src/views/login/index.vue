<template>
  <div class="container">
    <vue-particles
      :particle-opacity="1"
      :particles-number="100"
      :particle-size="4"
      :lines-width="2"
      :line-linked="true"
      :line-opacity="1"
      :lines-distance="170"
      :move-speed="2"
      :hover-effect="true"
      :click-effect="true"
      color="#dedede"
      shape-type="circle"
      lines-color="#dedede"
      hover-mode="grab"
      click-mode="push"
    />
    <div class="smallContainer">
      <div class="logo-container">
        <div class="logo"><el-image :src="require('@/assets/logo.png')"/></div>
        <div class="word"><h3 style="font-size: 1.75rem;font-weight: 500">Website Management System</h3><br></div>
        <div class="des">
          本网站处于安全模式下，需要通过学校统一认证平台账号密码认证后，方可访问
        </div>
      </div>
      <div class="login-container">
        <div class="login-form">
          <h3 class="login-h3">认证登录</h3>
          <el-form ref="loginForm" :inline="true" :model="Login" :rules="rules" :inline-message="true">
            <el-form-item prop="username">
              <el-input v-model="Login.username" class="elInput" placeholder="学工号"/>
            </el-form-item>
            <br>
            <el-form-item prop="password">
              <el-input v-model="Login.password" class="elInput" type="password" placeholder="密码"/>
            </el-form-item>
            <br>
            <el-form-item>
              <!--这里@click不加native也行，因为el-button已经有了处理-->
              <el-button :loading="loading" type="primary" @click.native.prevent="handleLogin">登录</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { validUsername } from '@/utils/validate'
export default {
  name: 'Index',
  data() {
    const validateUsername = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入账号'))
      }
      if (!validUsername(value)) {
        callback(new Error('账号为纯数字'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('密码长度最小6位'))
      } else {
        callback()
      }
    }
    return {
      Login: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { validator: validateUsername, trigger: 'blur' }
        ],
        password: [
          { validator: validatePassword, trigger: 'blur' }
        ]
      },
      loading: false,
      redirect: undefined // url原本要访问的地址  xxx?redirect=xxx 通过watch监控
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  methods: {
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('LoginByUsername', this.Login).then(() => { // dispatch异步 commit同步
            this.loading = false
            this.$router.push({ path: this.redirect || '/' })
          }).catch(() => {
            this.loading = false
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
  .container {
    height: 100%;
    position: relative;
  }
  .smallContainer {
    display: flex;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
  }
  .login-container {
    width: 50%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .login-form {
      h3 {
        text-align: center;
        width: 25rem;
      }
    }
  }

  .logo-container {
    width: 50%;
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /*.logo {*/
    /*  */
    /*}*/
  }

  .elInput>>>.el-input__inner {
    border: 0;
    border-bottom: 2px solid #ebedf2;
    background-color: rgba(0,0,0,0);
    width: 25rem;
    height: 3rem;
    margin-top: 2rem;
  }
  .elInput>>>.el-input__inner:focus {
    &::placeholder{
      color: rgb(113,106,202);
    }

    &::-webkit-input-placeholder{
      /* WebKit browsers 适配谷歌 */
      color: rgb(113,106,202);
    }

    &:-moz-placeholder {
      /* Mozilla Firefox 4 to 18 适配火狐 */
      color: rgb(113,106,202);
    }

    &::-moz-placeholder {
      /* Mozilla Firefox 19+ 适配火狐 */
      color: rgb(113,106,202);
    }

    &:-ms-input-placeholder {
      /* Internet Explorer 10+  适配ie*/
      color: rgb(113,106,202);
    }
  }

  .el-button{
    border-color: #9816f4;
    background-color: #9816f4;
    padding: 1.2rem 3rem;
    box-shadow: 0px 5px 10px 2px rgba(152, 22, 244, 0.19) !important;
    border-radius: 60px;
    margin: 3rem 0 0 8rem;
  }
  h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    font-family: inherit;
    font-weight: 300;
    color: inherit;
  }
</style>
