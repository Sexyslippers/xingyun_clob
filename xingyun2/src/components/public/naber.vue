<template>
  <div>
    <div class="narbg">
      <div class="nav-logo container">
        <div class="fl tx_con">
          <div class="name_co fl pr">
            <h3>行云流水</h3>
            <img src="https://wx4.sinaimg.cn/mw690/5e016382gy1fj3xeahjd0j21jb1jbwky.jpg" alt="" class="tx_img fl" v-on:mouseover="show1 = !show1">
            <transition name="fade" class="ne">
              <div v-if="show1" class="geren pa" v-on:click="show1 = !show1">
                  <ul>
                    <li>
                      <router-link to="/perData">
                        <img src="../../assets/grzl.png" alt=""> 个人资料
                      </router-link>
                    </li>
                    <li v-on:click="pase = !pase">
                      <img src="../../assets/ft.png" alt=""> 我要发帖
                    </li>
                    <li>
                      <img src="../../assets/tc_btn.png" alt=""> 安全退出
                    </li>
                  </ul>
              </div>
            </transition>
          </div>
          <div class="nar_btn fl pr">
            <img src="../../assets/nar_btn.png" alt="" v-on:mouseover="show = !show">
            <transition name="fade" class="ne">
              <div v-if="show" class="naber pa"  v-on:click="show = !show">
                <ul>
                  <router-link v-for="item in products" :to="{ path: item.path }" tag="li" active-class="active">
                    {{ item.name }}
                  </router-link>
                </ul>
              </div>
            </transition>

          </div>
        </div>
        <router-link :to="{path: '/'}" class="fr logo_con fl">
          <img src="../../assets/logo.png" alt="logo">
        </router-link>
      </div>
     </div>
       <transition name="fade1">
         <div v-if="pase">
              <div class="tk_con"  v-on:click="pase = !pase">
                </div>
                <div class="tk_tx">
                  <h3>发表帖子</h3>
                  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="10px" class="demo-ruleForm">
                    <el-row :gutter="20">
                      <el-col :span="9">
                        <el-form-item  prop="region">
                          <el-select v-model="ruleForm.region" placeholder="请选择产品分类">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                          </el-select>
                        </el-form-item>
                      </el-col>
                      <el-col :span="15">
                          <el-form-item  prop="name">
                            <el-input v-model="ruleForm.name" placeholder="发帖标题"></el-input>
                          </el-form-item>
                      </el-col>
                    </el-row>
                    <el-form-item  prop="desc">
                      <el-input type="textarea" v-model="ruleForm.desc"  placeholder="发帖内容" :rows="9" style="resize:none;"></el-input>
                    </el-form-item>
                    <el-form-item style="text-align:right;">
                      <el-button type="primary" @click="submitForm('ruleForm')">发表帖子</el-button>
                    </el-form-item>
                  </el-form>
                </div>
            </div>
         
     </transition>
  </div>
</template>
<script>
export default {
  name: 'narbg',
  data () {
    return {
      show: false,
      show1: false,
      pase: false,
      products: [
        {
          name: '首页',
          path: '/ ',
          active: true
        },
        {
          name: '行云学院',
          path: '/School',
          active: false
        },
        {
          name: '自学课程',
          path: '/SelfTaught',
          active: false
        },
        {
          name: '技术论坛',
          path: '/Techno',
          active: false
        },
        {
          name: '产学合作',
          path: '/Industry',
          active: false
        },
        {
          name: '产品介绍',
          path: '/Product',
          active: false
        },
        {
          name: '关于我们',
          path: '/About',
          active: false
        }
      ],
      ruleForm: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      rules: {
        name: [
          { required: true, message: '标题不能为空', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 8 到 20 个字符', trigger: 'blur' }
        ],
        region: [
          { required: true, message: '请选择产品分类', trigger: 'change' }
        ],
        desc: [
          { required: true, message: '发帖内容不能为空', trigger: 'blur' }
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
/* .el-input__inner {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: #f5f5f5;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #bfcbd9;
    box-sizing: border-box;
    color: #1f2d3d;
    font-size: inherit;
    height: 36px;
    line-height: 1;
    outline: 0;
    padding: 3px 10px;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
}
.el-textarea__inner {
    display: block;
    resize: vertical;
    padding: 5px 7px;
    line-height: 1.5;
    width: 100%;
    color: #1f2d3d;
    background-color: #f5f5f5;
    background-image: none;
    border: 1px solid #bfcbd9;
    border-radius: 4px;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
} */
.tk_con {
  background: rgba(51, 51, 51, 0.6);
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.tk_tx {
  text-align: left;
  width: 550px;
  position: fixed;
  max-height: 70%;
  overflow: auto;
  background: #fff;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  z-index: 10;
  border: 2px solid #464068;
  padding: 2%;
  line-height: 1.6;
  border-radius: 6px;
  overflow: hidden;
}
.tk_tx h3{
 margin-top: 15px;
 margin-left: 10px;
 margin-bottom: 23px;
}

.ne {
  display: none;
}

.name_co h3 {
  float: left;
  margin-top: 30px;
}

.name_co {}

.narbg {
  background: #023b95;
}

.geren li a {
  color: #fff;
}

.nav-logo {
  height: 82px;
}

.logo_con img {
  margin-top: 9px;
}

.name_co {
  color: #fff;
}

.tx_img {
  vertical-align: middle;
  width: 64px;
  background: #fff;
  height: 57px;
  margin-top: 10px;
  margin-left: 15px;
  cursor: pointer;
}

.nar_btn {
  margin-left: 97px;
  margin-top: 23px;
  cursor: pointer;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s
}

.fade-enter,
.fade-leave-to
/* .fade-leave-active in below version 2.1.8 */

{
  opacity: 0
}

.geren {
  background: #ffb500;
  z-index: 1000;
  color: #fff;
  width: 128px;
  right: -64px;
  top: 67px;
}

.naber {
  background: #213654;
  z-index: 1000;
  color: #fff;
  width: 147px;
  left: -35px;
  top: 50px;
}

.naber ul,
.geren ul {
  padding-left: 0;
}

.naber li {
  line-height: 50px;
}

.geren li {
  line-height: 40px;
  /* font-weight: 600; */
}

.geren li img {
  margin-right: 5px;
}

.naber li:hover {
  background: #3b577f;
}

.geren li:hover {
  background: #ffcd00;
  cursor: pointer;
  /* border-bottom:1px solid #fff; 
 border-top:1px solid #fff;  */
}

.active {
  background: #3b577f;
}

.active1 {
  background: #ffcd00;
}
.fade1-enter-active, .fade1-leave-active {
   transition: all .5s ease;
}
.fade1-enter, .fade1-leave-to /* .fade-leave-active in below version 2.1.8 */ {
transform: translateY(-500px);
}
</style>

