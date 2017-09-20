<template>
    <div class="sales-board">
        <el-row :gutter="20">
            <el-col :span="8" v-for="item in Courselis">
                <router-link :to="{path: item.path}">
                    <div class="grid-course-con">
                        <div class="coure_img_con">
                           <img :src="item.imgs" alt="">
                        </div>
                        
                        <h4>
                            {{item.name}}
                        </h4>
                    </div>
                </router-link>

            </el-col>
            <div v-for="item in r">
                {{item.id}}
            </div>
        </el-row>

    </div>
</template>
<script>
export default {
  created () {
    this.$api.get('topics', null, r => {
      console.log(r)
    })
  },
  data () {
    return {
      Courselis: [
        {
          name: '数据统计',
          path: 'info',
          imgs: 'https://wx4.sinaimg.cn/mw690/5e016382gy1fj3xeahjd0j21jb1jbwky.jpg'
        },
        {
          name: '数据统计',
          path: 'info',
          imgs: 'https://wx1.sinaimg.cn/mw690/5e016382gy1fj3xebzv98j21jb1jbwmm.jpg'
        },
        {
          name: '数据统计',
          path: 'info',
          imgs: 'https://wx4.sinaimg.cn/mw690/5e016382gy1fj3xeahjd0j21jb1jbwky.jpg'
        },
        {
          name: '数据统计',
          path: 'info',
          imgs: 'https://wx1.sinaimg.cn/mw690/5e016382gy1fj3xebzv98j21jb1jbwmm.jpg'
        },
        {
          name: '数据统计',
          path: 'info',
          imgs: 'https://wx4.sinaimg.cn/mw690/5e016382gy1fj3xeahjd0j21jb1jbwky.jpg'
        },
        {
          name: '数据统计',
          path: 'info',
          imgs: 'https://wx1.sinaimg.cn/mw690/5e016382gy1fj3xebzv98j21jb1jbwmm.jpg'
        },
        {
          name: '数据统计',
          path: 'info',
          imgs: 'https://wx4.sinaimg.cn/mw690/5e016382gy1fj3xeahjd0j21jb1jbwky.jpg'
        },
        {
          name: '数据统计',
          path: 'info',
          imgs: 'https://wx1.sinaimg.cn/mw690/5e016382gy1fj3xebzv98j21jb1jbwmm.jpg'
        },
        {
          name: '数据统计',
          path: 'info',
          imgs: 'https://wx4.sinaimg.cn/mw690/5e016382gy1fj3xeahjd0j21jb1jbwky.jpg'
        },
        {
          name: '数据统计',
          path: 'info',
          imgs: 'https://wx1.sinaimg.cn/mw690/5e016382gy1fj3xebzv98j21jb1jbwmm.jpg'
        },
        {
          name: '数据统计',
          path: 'info',
          imgs: 'https://wx4.sinaimg.cn/mw690/5e016382gy1fj3xeahjd0j21jb1jbwky.jpg'
        },
        {
          name: '数据统计',
          path: 'info',
          imgs: 'https://wx1.sinaimg.cn/mw690/5e016382gy1fj3xebzv98j21jb1jbwmm.jpg'
        },
        {
          name: 'sadasdasd',
          path: 'info',
          imgs: 'https://wx1.sinaimg.cn/mw690/5e016382gy1fj8c7b5tk5j21w02io7wi.jpg'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.grid-course-con {
    overflow: hidden;
    border: 1px solid #d1d1d1;
}

.grid-course-con img {
    width: 100%;
    max-height: 165px;
}
.coure_img_con{
    height: 165px;
    overflow: hidden;
}
.grid-course-con img:hover {
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
</style>
