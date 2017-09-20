<template>
  <div class="xy_jhcon">
    <h2>某某产品激活</h2>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" style="margin:60px auto; width:70%;">
      <el-form-item label="SN码 ：" prop="sn">
        <el-input v-model="ruleForm.sn" placeholder="38位"></el-input>
      </el-form-item>
       <el-form-item label="姓名 ：" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
       <el-form-item label="院校 ：" prop="shocll">
        <el-input v-model="ruleForm.shocll"></el-input>
      </el-form-item>
       <el-form-item label="微信号 ：" prop="wx">
        <el-input v-model="ruleForm.wx"></el-input>
      </el-form-item>
     
      <el-form-item>
        <button type="submit" class="btn btn-default col-sm-offset-4 col-sm-3"  @click="submitForm('ruleForm')" style="color:#fff;background:#bfbfbf;fon-size:19px;margin-top:30px;" v-on:click="tk = !tk">激活</button>
      </el-form-item>
    </el-form>
    <transition name="fade">
      <div class="tk_con" v-if="tk">
        <div class="tk_bj" v-on:click="tk = !tk"></div>
        <div class="tk_box">
          <img src="../../assets/jhts.png" alt="ok">
        </div>
      </div>
     </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tk: false,
      ruleForm: {
        name: '',
        sn: '',
        wx: '',
        shocll: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入姓名', trigger: 'blur' }
        ],
        sn: [
          { required: true, message: '请输入sn码', trigger: 'blur' },
          { min: 38, max: 38, message: 'sn码输入不正确', trigger: 'blur' }
        ],
        wx: [
          { required: true, message: '微信号不能为空', trigger: 'blur' }
        ],
        shocll: [
          { required: true, message: '学校不能为空', trigger: 'blur' }
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
<style>
.tk_bj{
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.31);
}
.tk_box{
  width: 480px;
  height: 480px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top:-10%;
  margin: auto;
}
</style>


