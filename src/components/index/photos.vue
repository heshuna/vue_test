<template>
  <div class="photos">
    <ul>
      <li v-for="(item,i) in image"> <img :src='item.src' > </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      image:[
        {src:require("../../assets/img/l_01.jpg")},
        {src:require("../../assets/img/l_02.jpg")},
        {src:require("../../assets/img/l_03.jpg")},
        {src:require("../../assets/img/l_04.jpg")},
        {src:require("../../assets/img/l_05.jpg")},
        {src:require("../../assets/img/l_06.jpg")},
        {src:require("../../assets/img/l_07.jpg")},
        {src:require("../../assets/img/s_1.jpg")},
        {src:require("../../assets/img/s_2.jpg")},
        {src:require("../../assets/img/s_3.jpg")},
        {src:require("../../assets/img/s_4.jpg")},
        {src:require("../../assets/img/s_5.jpg")},
        {src:require("../../assets/img/s_6.jpg")},
        {src:require("../../assets/img/s_7.jpg")},
        {src:require("../../assets/img/s_8.jpg")},

      ]
    }
  }
}
</script>

<style lang='less' scoped>
.photos {
  text-align: center;
  ul{
    li{
      width: 100%;
      img{
        width: 100%;
      }
    }
  }
}
</style>