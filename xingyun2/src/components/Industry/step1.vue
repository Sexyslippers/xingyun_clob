<template>
    <div class="stepcon">
        <div class="topber">
          <img src="../../assets/cx_ico01.png" alt="ico">&nbsp;申请人信息
        </div>
        <div>
            <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm" style="width:500px;">
                <el-form-item label="项目名称 :" prop="age">
                    <el-input v-model.number="ruleForm2.age"></el-input>
                </el-form-item>
                 <el-form-item label="所属学校 :" prop="age">
                    <el-input v-model.number="ruleForm2.age"></el-input>
                </el-form-item>
                <el-form-item label="申请院校 :" prop=" ">
                    <el-input v-model.number="ruleForm2.age"></el-input>
                </el-form-item>
                 <el-form-item label="项目负责人 :" prop=" ">
                    <el-input v-model.number="ruleForm2.age"></el-input>
                </el-form-item>
                 <el-form-item label="联系电话 :" prop=" ">
                    <el-input v-model.number="ruleForm2.age"></el-input>
                </el-form-item>
                 <el-form-item label="邮箱地址 :" prop=" ">
                    <el-input v-model.number="ruleForm2.age"></el-input>
                </el-form-item>
                <el-form-item label="申报日期 :" prop=" ">
                    <el-input v-model.number="ruleForm2.age"></el-input>
                </el-form-item>
              
            </el-form>
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
.topber img{
  margin-right: 7px;
    width: 31px;
}
</style>