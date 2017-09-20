<template>
  <div class="hello">
  <div class="xy_conter">
  <div class="container">
    <div class="nav-logo">
      <div class="fl tx_con">
        <div class="name_co fl">
         <h3>行云流水</h3>
         <h4>学生</h4>
        </div>
        <img src="tx.jpg" alt="" class="tx_img fl">
       </div>
      <div class="fr logo_con">
       <img src="../../assets/logo.png" alt="logo">
      </div>
    </div>
    <div class="inde_com">
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="grid-co bg-purple">
            <router-link to="/School">
               <div class="tenterb">
                  <img src="../../assets/logo.png" alt="">
                  <p>行云学院</p>
                </div>
              </router-link>  
          </div>
        </el-col>
       <el-col :span="12">
           <div class="grid-co bg-purple">
            <router-link to="/SelfTaught">
              <div class="tenterb">
                   <img src="../../assets/logo.png" alt="">
                   <p>自学课程</p>
               </div>
            </router-link>  
            </div>
        </el-col>
        <el-col :span="6">
           <div class="grid-co bg-purple">
              <router-link to="/Techno">
              <div class="tenterb">
                   <img src="../../assets/logo.png" alt="">
                    <p>技术论坛</p>
               </div>
              </router-link>  
           </div>
        </el-col>
        <el-col :span="6">
           <div class="grid-co bg-purple">
              <router-link to="/Industry">
              <div class="tenterb">
                   <img src="../../assets/logo.png" alt="">
                    <p>产学合作</p>
               </div>
              </router-link> 
           </div>
         </el-col>
         <el-col :span="12">
           <div class="grid-co bg-purple">
              <router-link to="/Product">
              <div class="tenterb">
                   <img src="../../assets/logo.png" alt="">
                    <p>产品介绍</p>
               </div>
              </router-link> 
            </div>
         </el-col>
         <el-col :span="6">
           <div class="grid-co bg-purple">
              <router-link to="/About">
              <div class="tenterb">
                   <img src="../../assets/logo.png" alt="">
                   <p>关于我们</p>
               </div>
              </router-link> 
            </div>
        </el-col>
      </el-row>
    </div>
  </div>
 </div>
</div>

</template>

<script>
// import hertD from './naber'
export default {
  name: 'hello',
  // components: {
  //   hertD
  // },
  data () {
    return {
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tx_img{
 vertical-align: middle;
    width: 64px;
    background: #fff;
    height: 57px;
    margin-top: 10px;
    margin-left: 15px;
    cursor: pointer;
}
.tx_con{
  margin-top: 10px;
}
.name_co{
  color: #fff;
}
.nav-logo{
  height: 110px;
}
.logo_con img{
  margin-top: 16px;
}
.el-row{
  margin-bottom: 15px;
}
.xy_conter{
height: 100%;
}
.block{
  margin-top: 20px;
}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px; 
}

a {
  color: #fff;
}
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
  .grid-co{
    width: 100%;
    height: 200px;
    position: relative;  
      margin-top: 15px;
      cursor: pointer;
  }
  .inde_com{
     margin-bottom: 30px;
  }
  .inde_com .el-row .el-col:nth-child(1) .grid-co {
     background-color: #8c35b8;
  }
  .inde_com .el-row .el-col:nth-child(2) .grid-co {
     background-color: #e74c2e;
  }
  .inde_com .el-row .el-col:nth-child(3) .grid-co {
     background-color: #81c031;
  }
  .inde_com .el-row .el-col:nth-child(4) .grid-co {
     background-color: #2fbfbf;
  }
  .inde_com .el-row .el-col:nth-child(5) .grid-co {
     background-color: #853536;
  }
  .inde_com .el-row .el-col:nth-child(6) .grid-co {
     background-color: #f2c230;
  }
   /* .inde_com .el-row .el-col div {
    margin-top: 15px;
  } */
   .tenterb {
     width: 80%;height: 60%;  
    margin:auto;  
    position: absolute;  
    left: 0px;   
    top: 0px;   
    right:0px;   
    bottom: 0px;  
   color: #fff;
   text-align: center;
    
}
 .tenterb img{
 width: 95px;  
    
}
 .tenterb p{
margin-top: 6px; 
    
}
</style>
