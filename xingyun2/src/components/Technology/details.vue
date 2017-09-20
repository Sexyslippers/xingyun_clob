<template>
    <div class="xy_tzcon">
        <div class="xy_wzcn">
            <h3>“六个口袋”亲子阅读计划——1000个家庭招募中</h3>
            <p>
                “六个口袋亲子阅读计划”众筹项目在众多热爱儿童阅读的朋友们支持下，顺利超额完成目标：截至到目前，以超额237%的优异成绩提前宣布众筹成功！
            </p>
            <p>
                感谢所有参与众筹的朋友们，你们用一份对孩子阅读能力培养的爱来参与这个计划，我们将以最专业最用心的阅读服务来陪伴孩子养成终身受益的阅读习惯！
            </p>
            <p>
                8月18日，我们从购买了“六个口袋”亲子阅读计划的家长群体中，随机的找了8位妈妈访谈，访谈内容有料有趣，已经通过我们的公众号哎呦教育（myedu-）刊登。家长们为何愿意参加这个阅读计划？她们是这样说的：
            </p>

            <p>
                觉得这钱很值得的，买书从来不眨眼，1008元不觉得贵，而且后来又有朋友一起做了五人团，分享很快乐。六个口袋这样子有点互相督促挺好的。”
            </p>
        </div>
        <div class="xy_plco">
            <div class="pl_tx fl">
                <img src="" alt="">
            </div>
            <div class="pl_cosr fl">
                <span class="xy_dlx"  v-on:click="closeMysel">
                    登录
                </span>
                后发表评论
            </div>
        </div>
        <hr>

        <div class="pl_dh_com">
            <ul id="testWrap">

                <li>
                    <img width="50" height="50" src="http://test.ffcka.com/assets/img/jpg/avatar1.jpg" class="img-circle img-responsive">
                    <div class="bubble">
                        <p class="message">
                            你好请问您需要什么服务。
                        </p>
                        <p class="hf_bt"> 
                           <span>spangoubuli : </span> @ acxasdasdasdas秋谷大 
                        </p>
                        <p class="time">
                          <span class="fr">2017-05-06 23:00</span>
                          <span class="fl">
                              <i class="el-icon-upload2"></i>
                              回复
                          </span>
                        </p>
                        <p class="xy_tjxplbtn">
                            <i class="el-icon-edit"></i>
                            添加新评论
                        </p>
                    </div>
                </li>
                <li class="current-user">
                    <img width="50" height="50" src="http://test.ffcka.com/assets/img/jpg/avatar1.jpg" class="img-circle img-responsive">
                    <div class="bubble">
                        <p class="message">
                            请问VIP服务都包含啥，我觉得普通的消息就够用了。
                        </p>
                          <p class="hf_bt"> 
                           <span>spangoubuli : </span> @ acxasdasdasdas秋谷大 
                          </p>
                         <p class="time">
                          <span class="fl">2017-05-06 23:00</span>
                          <span class="fr">
                            <i class="el-icon-upload2"></i>  <!-- <img src="../../assets/hf_ico" alt=""> -->
                              回复
                          </span>
                        </p>
                          <p class="xy_tjxplbtn">
                            <i class="el-icon-edit"></i>
                            添加新评论
                        </p>
                    </div>
                </li>

            </ul>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    isShow: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {

    }
  },
  methods: {
    closeMysel () {
      alert(this.$emit('onclosdse'))
      this.$emit('onclosdse')
    }
  }
}
</script>

<style>
.pl_dh_com{
    margin-top:120px;
}
.time{
    overflow: hidden;
    color: #808080;
    font-size: 14px;
}
.xy_tjxplbtn{
    margin-top: 20px;
     color: #808080;
}
.bubble{
    text-align: left;
}
.current-user .bubble{
     text-align: right;
}
.hf_bt span{
color: blue;
}
.pl_dh_com ul li .bubble:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: -5px;
    background: url(../../assets/chat-left.png) left top no-repeat;
    width: 13px;
    height: 13px;
    display: block;
}
.pl_dh_com ul li.current-user .bubble:after {
    background: url(../../assets/chat-right.png) left top no-repeat;
    left: auto;
    right: -6px;
}
.pl_dh_com ul {
    list-style: none;
    position: relative;
}
.pl_dh_com ul li {
    margin-bottom: 38px;
    padding-left: 63px;
    padding-right: 80px;
    position: relative;
}
 .pl_dh_com ul li img {
    position: absolute;
    bottom: -2px;
    left: 0;
    border-radius: 50%;
    opacity: 1;
    filter: alpha(opacity=100);
    transition: all .3s ease-in 0s;
    -moz-transition: all .3s ease-in 0s;
    -webkit-transition: all .3s ease-in 0s;
    -o-transition: all .3s ease-in 0s;
}
 .pl_dh_com ul li .bubble {
    padding: 12px 15px;
    background: #e5e5ea;
    border-radius: 15px;
    position: relative;
    overflow: inherit;
}
 .pl_dh_com ul li {
    margin-bottom: 38px;
    padding-left: 63px;
    padding-right: 80px;
    position: relative;
}
.pl_dh_com ul li.current-user img {
    right: 19px;
    left: auto;
}

.pl_dh_com ul li img {
    position: absolute;
    bottom: -2px;
    left: 0;
    border-radius: 50%;
    opacity: 1;
    filter: alpha(opacity=100);
    transition: all .3s ease-in 0s;
    -moz-transition: all .3s ease-in 0s;
    -webkit-transition: all .3s ease-in 0s;
    -o-transition: all .3s ease-in 0s;
}


hr {
    margin-top: 60px;
    border-bottom: 1px dashed #bdbdbd;
}

.xy_dlx {
    background: #3193d0;
    color: #fff;
    border-radius: 5px;
    padding: 4px 10px;
    margin-right: 10px;
    cursor: pointer;
}

.pl_tx {
    background: RED;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-right: 48px;
}

.xy_plco {
    overflow: hidden;
    margin-top: 70px;
}

.pl_cosr {
    border-radius: 5px;
    background: #f5f5f5;
    width: 80%;
    height: 184px;
    line-height: 184px;
}

.xy_tzcon {
    overflow: hidden;
}

.xy_wzcn p {
    text-align: left;
    text-indent: 1.5em;
}

.xy_wzcn h3 {
    margin-top: 20px;
    margin-bottom: 30px;
    font-size: 19px;
}
</style>


