<template>
  <div id="vieo">
    <nabe-r></nabe-r>
    <div class="vo_com">
       <div  class="video_xy" width="100%">
            <video controls="controls" height="540px" >
                <source src="http://img-cdn.wanyouxi.com/video/20170601_mdzz_recommend_video.mp4" type="video/mp4">
            </video>
        </div>
    </div>
    <div class="container">
      <div class="xy_pl">
       <h3>课程评价</h3>
      <textarea name="" id="" class="text-ys" cols="30" rows="10" placeholder="吐槽、表扬、鼓励。。。。。。想说啥就说啥！"></textarea>
      <span class="xy_plbtn">
        发表评论
      </span>
      </div>
      <div class="pl_list">
          <ul>
            <li>
              <div class="pl_tx fl">
                <img src="https://ss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=458384479,1520424408&fm=202&mola=new&crop=v1" alt="">
              </div>
              <div class="pl_rcon fl">
                <h3 class="xy_nc">
                  按时打卡
                </h3>
                <p class="xy_nr">
                 按时打卡按时打卡按时打卡按时打卡按时打卡按时打卡按时打卡按时打卡按时打卡按时打卡按时打卡按时打卡按时打卡按时打卡按时打卡按时打卡按时打卡按时打卡按时打卡按时打卡按时打卡按时打卡按时打卡按时打卡按时打卡按时打卡按时打卡按时打卡按时打卡
                </p>
                <small>
                 时间 ： 2016-03-48
                </small>
              </div>
            </li>
             <li>
              <div class="pl_tx fl">
                <img src="https://ss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=458384479,1520424408&fm=202&mola=new&crop=v1" alt="">
              </div>
              <div class="pl_rcon fl">
                <h3 class="xy_nc">
                  按时打卡
                </h3>
                <p class="xy_nr">
                 按时打卡按时打卡按时打卡按时打卡按时打卡按时打卡按时打卡按时打卡按时打卡按时打卡按时打卡按时打卡按时打卡按时打卡按时打卡按时打卡按时打卡按时打卡按时打卡按时打卡按时打卡按时打卡按时打卡按时打卡按时打卡按时打卡按时打卡按时打卡按时打卡
                </p>
                <small>
                 时间 ： 2016-03-48
                </small>
              </div>
            </li>
          </ul>
      </div>
    </div>
    <foote-r></foote-r>
  </div>
</template>
<script>
import nabeR from '../public/naber'
import footeR from '../public/footer'

export default {
  name: 'vieo',
  components: {
    nabeR,
    footeR
  }
}
</script>
<style>
small{
  color: #89998c;
}
.vo_com{
  background: #000;
}
.pl_tx img{
 width: 43px;
 height: 43px;
 border-radius: 50%;
 margin-right: 25px;
}
.xy_pl h3{
text-align: left;
color: #00339a;
margin-top: 57px;
font-size: 18px;
}
.text-ys{
  width: 100%;
  height: 260px;
  background: #f5f5f5;
  border-radius: 4px;
  border: 1px solid #eaeaea;
  padding: 15px;
  margin-top: 30px;
  resize: none;

}
.text-ys:focus{
  /* background-origin: border-box; */
  border: 1px solid #eaeaea;

}
.xy_nc{
  margin-top: 9px;
}
.pl_list{
  overflow: hidden;
  margin-top: 40px;
}
.pl_list ul li{
  border-bottom: 1px solid #e8e8e8;
  overflow: hidden;
  padding-top: 30px;
  padding-bottom: 30px;
}
.xy_plbtn{
  color: #FFF;
  float: right;
  margin-top: 30px;
  width: 150px;
  text-align: center;
  line-height: 50px;
  background: #023b95;
  cursor: pointer;
}
.xy_plbtn:hover{
  background: #008cff;
}
.xy_pl{
  overflow: hidden;
}
.pl_rcon{
  text-align: left;
  width: 90%;
}
</style>


