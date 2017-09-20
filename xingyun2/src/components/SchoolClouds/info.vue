<template>
    <div class="xy_xycon">
        <div class="ov">
             <div class="xycon-img fl">
               <img src="" alt="">
             </div>
            <div class="fl xycon-book">
                <h3>ruby原理婆媳</h3>
                <p class="cbor">
                    ruby原理婆媳ruby原理婆媳ruby原理婆媳ruby原理婆媳ruby原理婆媳ruby原理婆媳ruby原理婆媳
                </p>
                <p class="hbor">
                    ruby原理婆媳ruby原理婆媳ruby原理婆媳ruby原理婆媳ruby原理婆媳ruby原理婆媳ruby原理婆媳 ruby原理婆媳ruby原理婆媳ruby原理婆媳ruby原理婆媳ruby原理婆媳ruby原理婆媳ruby原理婆媳
                </p>
                <a href="http://product.dangdang.com/24134991.html" class="xy_gmbtn">立即购买</a>

             </div>
        </div>
       
        <div id="main" class="video_xy" width="100%">
            <video controls="controls" height="100%" >
                <source src="http://img-cdn.wanyouxi.com/video/20170601_mdzz_recommend_video.mp4" type="video/mp4">
            </video>
        </div>
        <div class="xy_tjjj">
            <h3 class="bt">
                推荐教材
            </h3>
            <div class="xytjcon" v-for="ls in Courtj">
                <router-link :to="{path: ls.path}">
                <div class="cfl fl">
                     <img :src="ls.imgs" alt="" class="">
                     <p>
                        {{ls.name}}
                     </p>
                </div>
                <div class="fl tjcon">
                    <h5>
                        产品介绍
                    </h5>
                    <p>
                      {{ls.conters}}
                    </p>
                </div>
            </router-link>
            </div>
        </div>
    </div>
</template>


<script>
export default {
  data () {
    return {
      Courtj: [
        {
          name: '数据统计数据统计数据统计数据统计数据统计',
          path: 'info',
          conters: '数据统计数据统计数据统计数据统计数据统计数据统计数据统计数据统计数据统计数据统计数据统计数据统计',
          imgs: 'https://wx4.sinaimg.cn/mw690/5e016382gy1fj3xeahjd0j21jb1jbwky.jpg'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a:hove{
    color: #666;
}
.xytjcon{
    margin-top: 20px;
    overflow: hidden;
}
.tjcon{
   width: 60%;
padding: 30px; 
}
.tjcon h5{
  text-align: left;
  color: #000;
  font-size: 18px;
  padding-bottom: 30px;
  padding-top: 5px;
  font-weight: bold;
}
.tjcon p{
   line-height: 1.8em;
    text-align: left;
    overflow: hidden;
    color: #333333;
}
.cfl{
width: 40%;
}
.cfl img{
  width: 100%;
  height: 250px;
/* background: #ccc; */
margin-top: 10px;
padding: 20px;
padding-left:0;
}
.cfl p{
  width: 100%;
padding: 40px;
padding-top:10px;
line-height: 1.8em;
}
.bt{
    font-size: 18px;
    font-weight: bold;
    color: #003d9e;
    width: 88px;
   padding-bottom:8px;
    border-bottom: 1px solid #b8c1de;
}
.xy_tjjj{
    margin-top: 130px;
}
.xy_xycon {
    overflow: hidden;
    width: 100%;
   min-height: 430px;
}
.ov{
    overflow: hidden;
    height: 430px;
}
.xy_gmbtn {
    text-align: center;
    line-height: 50px;
    width: 150px;
    color: #fff;
    font-size: 16px;
    background: #d93b32;
    display: block;
    margin-top: 25px;
}

.xy_gmbtn:hover {
    background: #ff2832;
}

.xycon-img {
    width: 40%;
    height: 100%;
    padding: 50px;
}

.xycon-img img {
    width: 100%;
    height: 100%;
    background: #cccc;
}

.xycon-book {
    width: 60%;
    height: 100%;
    background: #fff;
    padding: 30px 40px;
}

.xycon-book p {
    line-height: 1.8em;
    text-align: left;
    overflow: hidden;
}

.xycon-book .cbor {
    color: #909090;
    height: 63px;
}

.xycon-book .hbor {
    color: #333333;
    height: 125px;
}

.xycon-book h3 {
    color: #000;
    font-weight: bold;
    font-size: 19px;
    text-align: left;
    margin-bottom: 25px;
}
.video_xy{
    background: #000;
    width: 100%;
    height: 350px;
    margin-top: 30px;
    padding-bottom: 0px;
}
.video_xy video{
    width: 100%;
    height: 100%;
}
</style>
