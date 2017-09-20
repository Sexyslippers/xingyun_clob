<template>
  <div class="home">
    <!-- <img src="../assets/bj_01.png" alt="" class="img_100"> -->
    <div class="content">
      <cont-e></cont-e>  
    </div>
   </div>
</template>
<script>
import contE from './public/Hello'
export default {
  name: 'home',
  components: {
    contE
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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


html{
  height: 100%;
  width: 100%;
}
body{
   height: 100%;
  width: 100%;
}
.home{
  height: 100%;
  width: 100%;
  background:url(../assets/bj_01.png);
  position: absolute;
  background-size: 100% 100%;
}
.img_100{
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top:0;
}
</style>
