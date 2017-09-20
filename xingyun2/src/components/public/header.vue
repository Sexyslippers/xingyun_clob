<style>
.header{
  background: #213655;
  height: 50px;
  line-height: 50px;
}
.header span,.header i{
 color: #ffffff;
 cursor: pointer;
}
.header i{
 padding-left:6px;
  padding-right:6px;
}
.ovf{
  overflow: hidden;
}
.sol_ml{
  margin-left:30px;
  margin-right: 20px; 
}
.el-icon-search:before {
    content: "\E61D";
    color: #ccc;
}
</style>
<template>
  <div class="header">
      <div class="container ovf">
      
        <div class="fr sol_ml">
          <el-input
            placeholder="搜索关键词"
            icon="search"
            v-model="input2"
            :on-icon-click="handleIconClick">
          </el-input>
        </div>
          <div class="fr">
          <span>
            注册
          </span>
          <i>|</i>
          <span>
            登陆
          </span>
        </div>
      </div>
     <myDialog></myDialog>
  </div>
</template>

<script>
import mydialog from './mydialog'
export default {
  comments: {
    mydialog
  }
}
</script>
