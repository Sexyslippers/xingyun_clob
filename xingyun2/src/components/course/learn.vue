<template>
    <div class="sales-board">
        <el-row :gutter="20">
            <el-col :span="8" v-for="item in Courselis">
                <router-link :to="{path: item.path}">
                    <div class="grid-course-con">
                        <div class="coure_img_con pr">
                           <img :src="item.imgs" alt="" class="pa video-bj">
                            <div class="pa vide-btn">
                                <i class="el-icon-caret-right"></i>
                            </div>
                        </div>
                        
                        <h4>
                            {{item.name}}
                        </h4>
                        <div class="xy_video_com">
                            <span>
                               <i class="el-icon-date"></i> 17学习
                            </span>
                            <span>
                             <i class="el-icon-edit"></i> 0 评论
                            </span>
                            <span>
                               持续更新中
                            </span>
                        </div>
                    </div>
                </router-link>

            </el-col>
        </el-row>

    </div>
</template>
<script>
export default {
  data () {
    return {
      Courselis: [
        {
          name: '数据统计数据统计数据统计数据统计数据统计数据统计数据统计数据统计',
          path: '/video',
          imgs: 'https://wx4.sinaimg.cn/mw690/5e016382gy1fj3xeahjd0j21jb1jbwky.jpg'
        },
        {
          name: '数据统计',
          path: '/video',
          imgs: 'https://wx1.sinaimg.cn/mw690/5e016382gy1fj3xebzv98j21jb1jbwmm.jpg'
        },
        {
          name: '数据统计',
          path: '/video',
          imgs: 'https://wx4.sinaimg.cn/mw690/5e016382gy1fj3xeahjd0j21jb1jbwky.jpg'
        },
        {
          name: '数据统计',
          path: '/video',
          imgs: 'https://wx1.sinaimg.cn/mw690/5e016382gy1fj3xebzv98j21jb1jbwmm.jpg'
        },
        {
          name: '数据统计',
          path: '/video',
          imgs: 'https://wx4.sinaimg.cn/mw690/5e016382gy1fj3xeahjd0j21jb1jbwky.jpg'
        },
        {
          name: '数据统计',
          path: '/video',
          imgs: 'https://wx1.sinaimg.cn/mw690/5e016382gy1fj3xebzv98j21jb1jbwmm.jpg'
        },
        {
          name: '数据统计',
          path: '/video',
          imgs: 'https://wx4.sinaimg.cn/mw690/5e016382gy1fj3xeahjd0j21jb1jbwky.jpg'
        },
        {
          name: '数据统计',
          path: '/video',
          imgs: 'https://wx1.sinaimg.cn/mw690/5e016382gy1fj3xebzv98j21jb1jbwmm.jpg'
        },
        {
          name: '数据统计',
          path: '/video',
          imgs: 'https://wx4.sinaimg.cn/mw690/5e016382gy1fj3xeahjd0j21jb1jbwky.jpg'
        },
        {
          name: '数据统计',
          path: '/video',
          imgs: 'https://wx1.sinaimg.cn/mw690/5e016382gy1fj3xebzv98j21jb1jbwmm.jpg'
        },
        {
          name: '数据统计',
          path: '/video',
          imgs: 'https://wx4.sinaimg.cn/mw690/5e016382gy1fj3xeahjd0j21jb1jbwky.jpg'
        },
        {
          name: '数据统计',
          path: '/info',
          imgs: 'https://wx1.sinaimg.cn/mw690/5e016382gy1fj3xebzv98j21jb1jbwmm.jpg'
        },
        {
          name: 'sadasdasd',
          path: '/info',
          imgs: 'https://wx1.sinaimg.cn/mw690/5e016382gy1fj8c7b5tk5j21w02io7wi.jpg'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.xy_video_com span{
float: left;
width: 33.3%;
font-size: 13px;
color: #b4b8b9;
}

a:hover{
    color: #000;
}
.el-icon-caret-right{
  font-size: 40px;
    line-height: 59px;
    color: rgba(0, 0, 0, 0.64)
    }
.grid-course-con {
    overflow: hidden;
    border: 1px solid #d1d1d1;
}
.vide-btn{
    width: 60px;
    height: 60px;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
   background: rgba(0, 0, 0, 0.42);
    border-radius: 50%;
}
.xy_video_com{
    overflow: hidden;
}
.grid-course-con .video-bj {
    width: 100%;
    max-height: 165px;
    left: 0;
    top: 0;
}
.coure_img_con{
    height: 165px;
    overflow: hidden;
}
.grid-course-con .vide-btn:hover {
 -webkit-transform: scale(1.1);
    transform: scale(1.1);
}

.el-row {
    margin-bottom: 20px;
    &:last-child {
        margin-bottom: 0;
    }
}

.el-col {
    border-radius: 4px;
    margin-top: 30px;
}

.bg-purple-dark {
    background: #99a9bf;
}

.bg-purple {
    background: #d3dce6;
}

.bg-purple-light {
    background: #e5e9f2;
}

.grid-content {
    border-radius: 4px;
    min-height: 36px;
}

.row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
}
.grid-course-con h4{
overflow: hidden;
width: 97%;
padding-left: 4%;
text-overflow:ellipsis;
white-space: nowrap;
}
</style>
