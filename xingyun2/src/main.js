// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
// import BScroll from 'better-scroll'
// import axios from 'axios'
// 引用API文件
import axios from 'axios'
Vue.prototype.ajax = axios
Vue.prototype.HOST = '/api'
// 将API方法绑定到全局
Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(ElementUI)
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
