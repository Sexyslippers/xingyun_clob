<template>
  <div class="login-form">
    <div class="g-form">
      <div class="g-log-txet">
        登录
      </div>
      <div class="ov">
        <div class="g-form-line fl">
          <div class="g-form-input">
            <input type="text" 
            v-model="usernameModel" placeholder="邮箱地址">
          </div>
          <span class="g-form-error">{{ userErrors.errorText }}</span>
        </div>
        <div class="g-form-line fl">
          <div class="g-form-input">
            <input type="password" 
            v-model="passwordModel" placeholder="密码">
          </div>
          <span class="g-form-error">{{ passwordErrors.errorText }}</span>
        </div>
      </div>
      <div class="sw_gre">
        <div class="jzpw fl">
           <el-switch v-model="value1" on-text=""off-text=""></el-switch>
           &nbsp;记住我
        </div>
      </div>
      <div class="g-form-line jz">
        <div class="g-form-btn">
          <a class="button" @click="onLogin">登录</a>
        </div>
      </div>
      <p class="red_err">{{ errorText }}</p>

      
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isShowReg: false,
      value1: false,
      usernameModel: '',
      passwordModel: '',
      errorText: ''
    }
  },
  computed: {
    userErrors () {
      let errorText, status
      if (!/@/g.test(this.usernameModel)) {
        status = false
        errorText = '不包含@'
      } else {
        status = true
        errorText = ''
      }
      if (!this.userFlag) {
        errorText = ''
        this.userFlag = true
      }
      return {
        status,
        errorText
      }
    },
    passwordErrors () {
      let errorText, status
      if (!/^\w{1,6}$/g.test(this.passwordModel)) {
        status = false
        errorText = '密码不是1-6位'
      } else {
        status = true
        errorText = ''
      }
      if (!this.passwordFlag) {
        errorText = ''
        this.passwordFlag = true
      }
      return {
        status,
        errorText
      }
    }
  },
  methods: {
    onLogin () {
      if (!this.userErrors.status || !this.passwordErrors.status) {
        this.errorText = '部分选项未通过'
      } else {
        this.errorText = ''
        this.$post.get('api/login')
        .then((res) => {
          this.$emit('has-log', res.data)
        }, (error) => {
          console.log(error)
        })
      }
    },
    closeMyself () {
      this.$emit('on-close')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login-form{
  text-align: left;
}
.ov{
  overflow: hidden;
  margin-top: 30px;
}
.jz_zc{
  text-align: center;
  color: #1058c4;
  cursor: pointer;
}
.g-log-txet{
  margin-top: 8px;
  color: #2e2e2e;
  font-size: 25px;
  font-weight: bold;
}
.g-form-line{
  width: 50%;
  height:auto;
  display: inline-block;
  height: 78px;
}
.g-form-line input{
  background: #f5f5f5;
  width:90%;
  height: 42px;
  padding-left: 10px;
}
.clearfix:after{  
  content: '';
  display: block;
  clear: both;
  }
.g-form{
  overflow: hidden;
}
.jz{
  width: 100%;
}
.button{
  width: 150px;
  height: 36px;
  text-align: center;
  line-height: 36px;
  color: #ffffff;
  font-size: 20px;
  display: block;
  background: #1a5bc1;
   margin: 30px auto;
   border-radius:6px; 
   cursor: pointer;
   margin-bottom: 0px;
}
.wjpw{
  color: #1a5bc1; 
}
.red_err{
  text-align: center;
  color: red;
  font-size: 18px;
  height: 43px;
}
.g-form-error{
  margin-top: 10px;
    display: block;
    font-size: 14px;
    color: red;
    text-align: center;
}
.sw_gre{
  overflow: hidden;
  margin: 30px auto;
  width: 50%;
  margin-bottom: 0px;
}
</style>
