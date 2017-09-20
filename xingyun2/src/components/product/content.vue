
<template>
<div class="xy_conter">
     <img src="https://hd.mi.com/x/08301b/img/hd-ct.jpg" alt="">
       <img src="https://hd.mi.com/x/08301b/img/hd-ct.jpg" alt="">
       <img src="https://hd.mi.com/x/08301b/img/hd-ct.jpg" alt="">
         <img src="https://hd.mi.com/x/08301b/img/hd-ct.jpg" alt="">
        <p>
         家长里短 家长里短 家长里短 家长里短 家长里短 家长里短 家长里短
     </p>
      <p>
         家长里短 家长里短 家长里短 家长里短 家长里短 家长里短 家长里短
     </p>  
     <p>
         家长里短 家长里短 家长里短 家长里短 家长里短 家长里短 家长里短
     </p>
     <p>
         家长里短 家长里短 家长里短 家长里短 家长里短 家长里短 家长里短
     </p>
<el-carousel :interval="166000" type="card" height="200px" class="mt60" indicator-position='none' >
    <el-carousel-item v-for="item in 6" :key="item">
      <video  height="100%" >
            <source src="http://img-cdn.wanyouxi.com/video/20170601_mdzz_recommend_video.mp4" type="video/mp4">
      </video>
    </el-carousel-item>
  </el-carousel>
 </div>
  
</template>
<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel {
    overflow-x: hidden;
    position: relative;
    background: #333;
}
  .el-carousel__item:nth-child(2n) {
    /* background-color: #99a9bf; */
  }
  
  .el-carousel__item:nth-child(2n+1) {
    /* background-color: #d3dce6; */
  }
  .mt60{
      margin-top: 80px;
  }
</style>