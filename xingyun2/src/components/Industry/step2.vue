<template>
  <div class="stepcon">
    <div class="topber">
       <img src="../../assets/cx_ico02.png" alt="ico">&nbsp;项目负责人情况、申报项目所属专业基本情况及项目建设方案
    </div>
    <div>
    <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm"   label-position="top">
       
        <el-row :gutter="20">
          <el-col :span="8">
              <el-form-item label="姓名 :" prop="age">
                    <el-input v-model.number="ruleForm2.age"></el-input>
                </el-form-item>
          </el-col>
           <el-col :span="8">
              <el-form-item label="性别 :" prop="age">
                    <el-input v-model.number="ruleForm2.age"></el-input>
                </el-form-item>
          </el-col>
          <el-col :span="8">
              <el-form-item label="出生年月 ：" prop="sex">
                 <el-input v-model.number="ruleForm2.age"></el-input>
              </el-form-item>
          </el-col>
          <el-col :span="8">
               <el-form-item label="最高学历 :" prop="age">
                    <el-input v-model.number="ruleForm2.age"></el-input>
                </el-form-item>
          </el-col>
          <el-col :span="8">
              <el-form-item label="职称 :" prop="age">
                    <el-input v-model.number="ruleForm2.age"></el-input>
                </el-form-item>
          </el-col>
          <el-col :span="8">
              <el-form-item label="开设课程 :" prop="age">
                    <el-input v-model.number="ruleForm2.age"></el-input>
                </el-form-item>
          </el-col>
           <el-col :span="8">
               <el-form-item label="学位 :" prop="age">
                    <el-input v-model.number="ruleForm2.age"></el-input>
                </el-form-item>
          </el-col>
          <el-col :span="8">
               <el-form-item label="职务 :" prop="age">
                    <el-input v-model.number="ruleForm2.age"></el-input>
                </el-form-item>
          </el-col>
            <el-col :span="8">
               <el-form-item label="授课对象 :" prop="age">
                    <el-input v-model.number="ruleForm2.age"></el-input>
                </el-form-item>
          </el-col>
        </el-row>
        <el-form-item label="主要教学和工程项目经历：">
          <el-input type="textarea" :rows="4" v-model="textarea">
          </el-input>
        </el-form-item>
          <el-form-item label="近5年主要教育教学 研究领域成果：" prop="desc">
          <el-input type="textarea" :rows="4"  v-model="textarea">
          </el-input>
        </el-form-item>
          <el-form-item label="申报项目所属专业 的人才培养方案 及实践环节的 教学体系：" prop="desc">
          <el-input type="textarea" :rows="6" placeholder="主要说明该专业现有人才培养模式以及实践类课程和其他实践环节的构成。" v-model="textarea">
          </el-input>
        </el-form-item>
          <el-form-item label="申报项目所属专业现有各类资源 、设备条件:" prop="desc">
          <el-input type="textarea" :rows="6" placeholder="主要介绍当前对“口袋仪器实验室硬件平台“Analog Discovery2”、“Pmod标准接口传感器”、 “LabVIEW树莓派开源嵌入式处理器”、
“FPGA全可编程平台”、“物联网开发平台”、“工业4.0基础平台”及“数模混合书包实验室”等技术平台的认识及技术储备情况。" v-model="textarea">
          </el-input>
        </el-form-item>
          <el-form-item label="专业综合改革项目 建设方案:" prop="desc">
          <el-input type="textarea" :rows="7" placeholder="1．创新创业专业改革课程名称
2. 专业课程改革的总体目的。
3. 建设的具体内容具体的目标、思路与方法等。
4. 主要采用的方式和预期的成果通过校企共同举办创新创业竞赛，共建新的创新创业课程，进行创新创业师资培训，搭建学生创客社团，举办创新创业项目成果展等活动 其中至少选择一项。
5. 项目管理内容，课程组人员安排，改革进度规划等。6. 其它预期成果包括成立创客社团，共建创客空间等等在内的其它成果。
7.院系是否有配套技术条件及资金配套支持（2000字以内）" v-model="textarea">
          </el-input>
        </el-form-item>
        <div class="sm_com">
          <span class="red-clor">
            *说明 ： 
          </span>
          <p>
            1.项目负责人为主持本项目建设主要协调人。
          </p>
             <p>
             2.授课对象或课外研学培养对象是指本科或研究生。
          </p>
             <p>
           3.开设课程是指主要讲授的课程/
          </p>
        </div>
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
        textarea: '',
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
.stepcon {
  text-align: left;
  margin-top: 60px;
  font-weight: bold;
}
.red-clor{
color: red;
    vertical-align: middle;
    float: left;
    text-align: right;
}
.sm_com p{
width: 100%;
margin-left: 70px;
color: #acacac;
line-height: 15px;
font-size: 14px;
font-weight: normal;
}
.topber {
  border-bottom: 1px solid #bebebe;
  padding-left: 18px;
  margin-bottom: 30px;
  padding-top: 10px;
  padding-bottom: 10px;
}
 .el-form-item__label {
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #48576a;
    line-height: 1;
    padding: 11px 12px 11px 0;
    box-sizing: border-box;
    line-height: 22px;
}
.el-textarea__inner{
  height:200px;
}
.topber img{
  margin-right: 7px;
    width: 31px;
}
</style>