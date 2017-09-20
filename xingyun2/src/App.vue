<template>
  <div id="app">
    <div class="header">
      <div class="container ovf">
        <div class="fr sol_ml">
          <el-autocomplete placeholder="搜索关键词" icon="search" v-model="state4" :fetch-suggestions="querySearchAsync" @select="handleSelect">
          </el-autocomplete>
        </div>
        <div class="fr">
          <span @click="showDialog('isShowReg')">
            注册
          </span>
          <i>|</i>
          <span @click="showDialog('isShowLogin')">
            登陆
          </span>
        </div>
      </div>
    </div>
    <router-view></router-view>
    <mydialog :is-show="isShowReg" @on-close="hideDialog('isShowReg')">
      <regForm @on-success="" @on-error=""></regForm>
      <p class="jz_zc" @click="onclosdse">登录X-cloud</p>
    </mydialog>
    <mydialog :is-show="isShowLogin" @on-close="hideDialog('isShowLogin')">
      <login-form @on-success="" @on-error=""></login-form>
       <p class="jz_zc"  @click="oncrosdse">注册X-cloud</p>
        <div class="wjpw fr" @click="oncro">
          <i class="el-icon-warning"></i>
           &nbsp;忘记密码
        </div>
    </mydialog>
     <mydialog :is-show="isShowievalO" @on-close="hideDialog('isShowievalO')">
      <retrieval-o></retrieval-o>
    </mydialog>
     <mydialog :is-show="isShowievalT" @on-close="hideDialog('isShowievalT')">
      <retrieval-t></retrieval-t>
    </mydialog>
     <mydialog :is-show="isShowievalS" @on-close="hideDialog('isShowievalS')">
      <retrieval-s></retrieval-s>
    </mydialog>
    
  </div>
</template>

<script>
import mydialog from './components/public/mydialog'
import LoginForm from './components/public/logForm'
import regForm from './components/public/regForm'
import retrievalO from './components/public/retrievalo'
import retrievalT from './components/public/retrievalt'
import retrievalS from './components/public/retrievals'
export default {
  name: 'app',
  components: {
    mydialog,
    LoginForm,
    regForm,
    retrievalO,
    retrievalT,
    retrievalS
  },
  data: function () {
    return {
      restaurants: [],
      state4: '',
      timeout: null,
      isShowLogin: false,
      isShowReg: false,
      isShowievalO: false,
      isShowievalT: false,
      isShowievalS: false
    }
  },
  methods: {
    showDialog (param) {
      this[param] = true
    },
    hideDialog (param) {
      this[param] = false
    },
    onclosdse () {
      this.hideDialog('isShowReg')
      this.showDialog('isShowLogin')
    },
    oncrosdse () {
      this.hideDialog('isShowLogin')
      this.showDialog('isShowReg')
    },
    oncro () {
      this.hideDialog('isShowLogin')
      this.showDialog('isShowievalT')
    },
    loadAll () {
      return [
        { 'value': '三全鲜食（北新泾店）', 'address': '长宁区新渔路144号' },
        { 'value': 'sdfsdfsdfdsf', 'address': 'sdfsdfdsfsdf sdfsd' }
      ]
    },
    querySearchAsync (queryString, cb) {
      var restaurants = this.restaurants
      var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants

      clearTimeout(this.timeout)
      this.timeout = setTimeout(() => {
        cb(results)
      }, 3000 * Math.random())
    },
    createStateFilter (queryString) {
      return (state) => {
        return (state.value.indexOf(queryString.toLowerCase()) === 0)
      }
    },
    handleSelect (item) {
      alert('没有找到相关信息！')
    }
  },
  mounted () {
    this.restaurants = this.loadAll()
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.header {
  background: #213655;
  height: 50px;
  line-height: 50px;
}
.wjpw{
  color: #1a5bc1; 
  position: absolute;
    top: 49%;
    left: 56%;
    cursor: pointer;
}
.header span,
.header i {
  color: #ffffff;
  cursor: pointer;
}
.jz_zc{
  text-align: center;
  color: #1058c4;
  cursor: pointer;
}
.header i {
  padding-left: 6px;
  padding-right: 6px;
}

.ovf {
  overflow: hidden;
}

.sol_ml {
  margin-left: 30px;
  margin-right: 20px;
}

.el-icon-search:before {
  content: "\E61D";
  color: #ccc;
}
</style>
