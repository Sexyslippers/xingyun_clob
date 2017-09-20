<template>
    <div class="stepcon">
        <div class="topber">
           <img src="../../assets/cx_ico04.png" alt="ico">&nbsp;审批意见
        </div>
        <div class="xy_sp">
          <div class="xy_sptex fl">
               审批意见 ：
          </div>
          <div class="xy_text fl">
            <textarea name="" id=""  placeholder="签字或盖章"></textarea>
          </div>

        </div>
        <div class="but-group" style="text-align:center;margin-top:80px;">
            <el-button type="warning"  @click="submitForm('ruleForm2')">下一步</el-button>
        </div>
        </div>
    </div>
</template>
<script>
  export default {
    data () {
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'))
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'))
          } else {
            if (value < 18) {
              callback(new Error('必须年满18岁'))
            } else {
              callback()
            }
          }
        }, 1000)
      }
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'))
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass')
          }
          callback()
        }
      }
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'))
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'))
        } else {
          callback()
        }
      }
      return {
        ruleForm2: {
          pass: '',
          checkPass: '',
          age: ''
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          age: [
            { validator: checkAge, trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      submitForm (formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!')
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      addDomain () {
        alert('asdasd')
        this.dynamicValidateForm.domains.push({
          value: '',
          key: Date.now()
        })
      },
      resetForm (formName) {
        this.$refs[formName].resetFields()
      }
    }
  }
</script>
<style scoped>
.stepcon{
    text-align: left;
    margin-top: 60px;
    font-weight: bold;
}
.topber{
   border-bottom: 1px solid #bebebe;
    padding-left: 18px;
    margin-bottom: 30px;
    padding-top: 10px;
    padding-bottom: 10px;
}
.xy_sp{
  
}
.xy_sptex{
  width: 11%;
  color: #333333;
  line-height: 40px;
  
}
.xy_text{
width: 85%;
  height: 239px;
  text-align: left;
  
}
.xy_text textarea{
width: 100%;
height: 100%;
padding: 10px;
}
.xy_sp{
  width: 100%;
  overflow: hidden;
}
.topber img{
  margin-right: 7px;
    width: 31px;
}
</style>