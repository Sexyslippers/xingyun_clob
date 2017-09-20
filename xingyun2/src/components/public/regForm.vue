<template>
  <div class="login-form">
    <div class="g-form">
      <div class="g-log-txet">
       邮箱注册
      </div>
      <div class="ov">
        <div class="g-form-line fl">
          <div class="g-form-input">
            <input type="text" 
            v-model="usernameModel" placeholder="昵称(少于16个字符)">
          </div>
          <span class="g-form-error">{{ userErrors.errorText }}</span>
        </div>
        <div class="g-form-line fl">
          <div class="g-form-input">
            <input type="text" 
            v-model="mailboxModel" placeholder="邮箱地址">
          </div>
          <span class="g-form-error">{{ mailboxErrors.errorText }}</span>
        </div>
      </div>
       <div class="ov">
        <div class="g-form-line fl">
          <div class="g-form-input">
            <input type="password" 
            v-model="passwordModel"  placeholder="密码(至少6个字符)" >
          </div>
          <span class="g-form-error">{{ passwordErrors.errorText }}</span>
        </div>
        <div class="g-form-line fl">
          <div class="g-form-input">
            <input type="text" 
            v-model="codeModel" placeholder="验证码" style="width:40%;"  >
            <span class="xy_yzm" ref="m_code" v-on:click="urlimg = urlimg + '?' + Math.random()">
              <img   v-bind:src="urlimg" alt="" height="43px">
            </span>
          </div>
          <span class="g-form-error">{{ codeErrors.errorText }}</span>
        </div>
      </div>
      <div class="g-form-line jz">
        <div class="g-form-btn">
          <a class="button" @click="onLogin">注册</a>
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
      usernameModel: '',
      passwordModel: '',
      mailboxModel: '',
      codeModel: '',
      errorText: '',
      urlimg: 'http://xc.ffcka.cn/index/Register/getVerify'
    }
  },
  computed: {
    userErrors () {
      let errorText, status
      if (/^\*$/.test(this.usernameModel)) {
        status = false
        errorText = '昵称不能为空'
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
    },
    mailboxErrors () {
      let errorText, status
      if (!/^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/.test(this.mailboxModel)) {
        status = false
        errorText = '邮箱输入不合法'
      } else {
        status = true
        errorText = ''
      }
      if (!this.mailboxFlag) {
        errorText = ''
        this.mailboxFlag = true
      }
      return {
        status,
        errorText
      }
    },
    codeErrors () {
      let errorText, status
      this.ajax.get(this.HOST + '/index/Register/check_verify', {
        params: {
          code: this.codeModel
        }
      }).then((res) => {
        console.log(JSON.stringify(res.data))
      }).catch((res) => {
        console.log(res.data)
      })
      if (/^\*$/.test(this.mailboxModel)) {
        status = false
        errorText = '验证码不能为空'
      }
      if (!this.codeFlag) {
        errorText = ''
        this.codeFlag = true
      }
      return {
        status,
        errorText
      }
    }
  },
  methods: {
    onLogin () {
      if (!this.userErrors.status || !this.passwordErrors.status || !this.mailboxErrors.status || !this.codeErrors.status) {
        this.errorText = '部分选项未通过'
        return false
      } else {
        this.errorText = ''
        this.ajax.post(this.HOST + '/index/Register/register', {
          params: {
            nick: this.usernameModel,
            pwd: this.passwordModel,
            email: this.mailboxModel,
            code: this.codeModel
          }
        }).then((res) => {
          console.log(res)
        }).catch((res) => {
          console.log(res)
        })
      }
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
}
.red_err{
  text-align: center;
  color: red;
  font-size: 18px;
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
.xy_yzm{
  display: inline-block;
  background: #a1cbf7;
  height: 42px;
  width:50%;
  color: #8a5d19;
  text-align: center;
  line-height: 42px;
  font-size: 13px;
  font-weight: bold;
  margin-left: 3%;
  cursor: pointer;
  }
  .xy_yzm img{
      width:100%;
  }

</style>
