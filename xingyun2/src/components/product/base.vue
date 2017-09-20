<template>
    <div class="xy_jhcon">
      <ul class="zl_list">
          <li>
              <img src="../../assets/wjj.png" alt="" class="wj_ico">
              <p class="sm_p">我这儿有一个基于 inline SVG 的方案（非字体，SVG 数据是从 FontAwesome 导出来的），你可以</p>
               <router-link to="ation" class="green_color">
                下载
              </router-link>
          </li>
            <li>
              <img src="../../assets/wjj.png" alt="" class="wj_ico">
              <p class="sm_p">我这儿有一个基于 inline SVG 的方案（非字体，SVG 数据是从 FontAwesome 导出来的），你可以</p>
               <router-link to="ation" class="green_color">
                下载
              </router-link>
          </li>
      </ul>
    </div>
</template>

<script>

</script>
<style scoped>
.wj_ico{
    margin-right: 20px;
}
.zl_list{
    text-align: left;
    margin-top: 50px;
}
.sm_p{
    display: inline-block;
    margin-right: -4px;
    overflow: hidden;
    width: 72%;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: top;
}
.zl_list li{
  height: 40px;
  line-height: 40px;
  margin-bottom: 20px;
}
.green_color{
    color: #32b921;
    padding-left: 60px;
}
</style>


