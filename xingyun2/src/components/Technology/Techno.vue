<template>
  <div id="nar">
    <nabe-r></nabe-r>
    <div class="container scol">
      <div class="detail-left">
        <el-col :span="4" class="list_left">
          <h5>技术论坛</h5>
          <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" theme="dark">
              <el-menu-item index="1">A+DLab</el-menu-item>
              <el-menu-item index="2">A+DLab plus</el-menu-item>
              <el-menu-item index="3">配件套装</el-menu-item>
          </el-menu>
        </el-col>
      </div>
      <div class="detail-right">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
    </div>
    <foote-r></foote-r>
  </div>
</template>
<script>
import nabeR from '../public/naber'
import footeR from '../public/footer'

export default {
  name: 'nar',
  components: {
    nabeR,
    footeR
  }
}
</script>
<style>
.scol {
  margin-bottom: 80px;
}

.list {}

.list_left {
  background-color: #324157;
  padding-top: 20px;
  min-height: 750px;
}

.list_left h5 {
  color: #fff;
  font-size: 16px;
  padding-bottom: 17px;
}

.el-menu-item.is-active {
  color: #fff;
  background: #ff8a00;
}

.el-submenu .el-menu-item {
  min-width: 100%;
}
.detail-right{
  float: left;
  width: 75%;
  height: auto;
  margin-left:5%;
  margin-top: 20px;
}
</style>


