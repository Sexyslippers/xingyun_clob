<style scoped>
.footer{width: 100%;}
.bg-grays{background: #16253c;height: 50px;line-height: 50px;color: #475a7b;font-size: 13px;}
.footer_bgq{
  background: #475a7b;
}

  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  /* .bg-purple {
    background: #d3dce6;
  } */
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
  }
  .hader {
    width: 100%;
    height: 42px;
    border-bottom: 2px solid #4e617f;
}
.hader h4 {
    width: 80px;
    height: 41.5px;
    margin-left: 0px;
    border-bottom: 3px solid #fff;
    line-height: 43px;
    color: #fff;
}
.xy_ewm{
  padding: 35px;
}
.kf a{
  display: inline-block;
  width: 30%;
  text-align: center;
  padding: 5px;
  margin-top: 10px;
  height: 50px;
}
.kf{
  margin-top: 30px;
}
.ls-lx{
margin-left: 0;
 margin-top: 30px;
 padding-left:0;
}
.ls-lx li{
margin-top: 5px;
font-size: 12px;
color: #fff;
overflow: hidden;
margin-left: 0;
margin-bottom: 10px;
}
.ls-lx li img{
float: left;
margin-right: 10px;

}
.ls-lx li span{
float: left;
margin-top: 4px;
}
.yqlj{
  margin-top: 18px;
}
.powered_by_metinfo{
  color: #475a7b;
}
.powered_by_metinfo a{
  color: #475a7b;
}
.xlwbIm{
  display: block;
background: url(../../assets/f_wb02.png) no-repeat;
}
.xlwbIm:hover{
background: url(../../assets/f_wb02hover.png) no-repeat;
}
.txwbIm{
 display: block;
background: url(../../assets/f_wb01.png) no-repeat;  
}
.txwbIm:hover{
background: url(../../assets/f_wb01hover.png) no-repeat;  
}
.qqIm{
   display: block;
background: url(../../assets/f_qq01.png) no-repeat;  
}
.qqIm:hover{
background: url(../../assets/f_qq01hover.png) no-repeat;  
}
.yqljy{
   display: block;
   height: 60px;
  background: url(../../assets/f_ykt.png) no-repeat;  
}
.yqljy:hover{
  background: url(../../assets/dkl_hover.png) no-repeat;  
}
.yqljd{
   display: block;
   height: 60px;
  background: url(../../assets/f_dzl.png) no-repeat;  
}
.yqljd:hover{
  background: url(../../assets/ykt_hover.png) no-repeat;  
}
</style>

<template>
  <div class="footer" >
  <div class="footer_bgq">
     <div class="container">
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <div class="hader">
                <h4>联系我们</h4>
            </div>
            <ul class="ls-lx">
              <li>
                 <img src="../../assets/f_zb.png" alt="">
               <span>
                 北京市昌平区金域国际中心A座1608室
                 </span>
              
              </li>
               <li>
                 <img src="../../assets/f_dh.png" alt="">
                 <span>
                     010-60603883
                 </span>
              
             
              </li>
               <li>
                  <img src="../../assets/f_yx.png" alt="">
                 <span>
                   sales@x-cloud.cc
                 </span>
             
               
              </li>
            
            </ul>
          </div>
        </el-col>
          <el-col :span="6">
          <div class="grid-content bg-purple">
            <div class="hader">
                <h4>联系客服</h4>
            </div>
            <div class="kf">
              <a href="http://" class="xlwbIm"> 
              </a>
               <a href="http://" class="txwbIm">
              </a>
               <a href="http://" class="qqIm">
              </a>
            </div>
          </div>
        </el-col>
          <el-col :span="6">
          <div class="grid-content bg-purple">
            <div class="hader">
                <h4>友情链接</h4>
                 <div class="yqlj">
                   <a href="http://ykt.io/" class="yqljy">
                  </a>
                 </div>
                  <div class="yqlj">
                   <a href="http://www.digilent.com.cn/" class="yqljd">
                  </a>
                 </div>
            </div>
          </div>
        </el-col>
          <el-col :span="6">
          <div class="grid-content bg-purple">
            <div class="hader">
                <h4>关注我们</h4>
            </div>
            <div class="xy_ewm">
               <img src="../../assets/erm.png" alt="logo">
            </div>
          
          </div>
        </el-col>
       
      </el-row>
    </div>
  </div>
 <div class="bg-grays">
        <div class="container">
          <P class="fl">
          © 2017 X Cloud Technologies. 北京时代行云科技有限公司 版权所有
          </P>
           <P class="fr">
          <div class="powered_by_metinfo">Powered&nbsp;by&nbsp;<a href="http://www.MetInfo.cn" target="_blank" title="企业网站管理系统">MetInfo&nbsp;5.3.17</a> ©2008-2017&nbsp;<a href="http://www.MetInfo.cn" target="_blank" title="企业网站建设">www.metinfo.cn</a></div>
          </P>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {

    }
  }
}
</script>
