<template>
  <div class="perData">
    <div>
      <nabe-r></nabe-r>
    </div>
    <div class="container gr_contr">
      <div class="fl infom-left">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="昵称 ：" prop="nike">
            <el-input v-model="ruleForm.nike"></el-input>
          </el-form-item>
          <el-form-item label="姓名 ：" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="性别 ：" prop="resource">
            <el-radio-group v-model="ruleForm.resource">
              <el-radio label="男"></el-radio>
              <el-radio label="女"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="出生日期 ：" required>
            <el-col :span="24">
              <el-form-item prop="date1">
                <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
              </el-form-item>
            </el-col>
          </el-form-item>
          <el-form-item label="学历 ：" prop="region">
            <el-col :span="24">
              <el-select v-model="ruleForm.region" placeholder="请选择学历" style="width: 100%;">
                <el-option label="专科" value="zhuanke"></el-option>
                <el-option label="本科" value="benke"></el-option>
              </el-select>
            </el-col>
          </el-form-item>
          <el-form-item label="院校 ：" prop="School">
            <el-input v-model="ruleForm.School"></el-input>
          </el-form-item>
          <el-form-item label="专业 ：" prop="major">
            <el-input v-model="ruleForm.major"></el-input>
          </el-form-item>
          <el-form-item label="手机 ：" prop="phone">
            <el-input v-model="ruleForm.phone"></el-input>
          </el-form-item>
          <el-form-item label="邮箱 ：" prop="mailbox">
            <el-input v-model="ruleForm.mailbox"></el-input>
          </el-form-item>
          <el-form-item style="text-align:center; margin-top:80px;margin-bottom：80px;">
            <el-button type="warning" @click="submitForm('ruleForm')" style="width:120px;">保存</el-button>
            <!-- <el-button @click="resetForm('ruleForm')">重置</el-button> -->
          </el-form-item>
        </el-form>
      </div>
      <div class="fr infom-right">
        <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
        <el-button type="info" :plain="true" style="margin-top:20px;">更换头像</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import naber from './naber'

export default {
  name: 'perData',
  components: {
    nabeR: naber
  },
  data () {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('邮箱不能为空'))
      } else if (!/^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/.test(value)) {
        return callback(new Error('邮箱格式不正确'))
      }
    }
    var checkpone = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('手机不能为空'))
      } else if (!/^1[34578]\d{9}$/.test(value)) {
        return callback(new Error('手机格式不正确'))
      }
    }
    return {
      imageUrl: '',
      ruleForm: {
        name: '',
        mailbox: '',
        phone: '',
        major: '',
        School: '',
        nike: '',
        region: '',
        date1: '',
        resource: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入姓名', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        nike: [
          { required: true, message: '请输入昵称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        phone: [
          { required: true, validator: checkpone, trigger: 'blur' }
        ],
        mailbox: [
          { required: true, validator: checkAge, trigger: 'blur' }
        ],
        School: [
          { required: true, message: '请输入学校名称', trigger: 'blur' }
        ],
        major: [
          { required: true, message: '请输入专业名称', trigger: 'blur' }
        ],
        region: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ],
        date1: [
          { type: 'date', required: true, message: '请选择出生日期', trigger: 'change' }
        ],
        resource: [
          { required: true, message: '请选择性别', trigger: 'change' }
        ]
      }
    }
  },
  methods: {
    handleAvatarSuccess (res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    },
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
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.demo-ruleForm {
  width: 80%;
  margin-left: 10%;
}

.infom-left {
  text-align: left;
  margin-top: 30px;
  width: 60%;
  margin-bottom: 80px;
}

.infom-right {
  margin-right: 140px;
  margin-top: 30px;
}

.gr_contr {
  overflow: hidden;
  margin-top: 30px;
  width: 100%;
}


.avatar-uploader {
  width: 100px;
  height: 100px;
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.avatar-uploader:hover {
  border-color: #20a0ff;
}

.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 100px;
  height: 100px;
  line-height: 100px;
  text-align: center;
}

.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>


