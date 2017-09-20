

<template>
<div class="sprt">
  <el-steps :space="32+'%'" :active="1" finish-status="success">
    <el-step title="步骤 1" description="申请人信息"></el-step>
    <el-step title="步骤 2" description="项目负责人情况、申报项目所属专业基本情况及项目建设方案"></el-step>
    <el-step title="步骤 3" description="其它项目参与人情况"></el-step>
    <el-step title="步骤 4"  description="审批意见"></el-step>   <!--学校推荐意见及 -->
  </el-steps>
  <router-view class="view"></router-view>
    <!-- <div class="but-group" style="margin-top:30px;">
    <el-button type="warning" @click="next">下一步</el-button>
   </div> -->
  <!-- <el-button  >下一步</el-button> -->
</div>
 

</template>
<script>
export default{
  data () {
    return {
      active: 0
    }
  },
  methods: {
    next () {
      if (this.active++ > 2) this.active = 0
    }
  }
}
</script>
<style scoped>
.sprt{
  margin-top: 30px;
}
.el-step__description {
    font-size: 15px;
    font-weight: 400;
    line-height: 14px;
    padding-top: 30px;
}
.el-step{
  margin-top: 15px;
}
.el-step__main .el-step__description {
    font-size: 12px;
    font-weight: 400;
    line-height: 23px;
    margin-top: 18px;
    margin-left: -29px;
    width: 127px;
}
.el-step__description.is-process {
    color: #8391a5;
      margin-left: -29px;
      margin-top: 15px;
}
.el-step__title.is-process {
    font-weight: 300;
    color: #48576a;
}
</style>

