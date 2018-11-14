<template>
  <div class="title">
      {{title}}
  </div>
</template>
<script>
export default {
  props:{
    title:{
      type:String
    }
  }
}
</script>
<style lang="less" scoped>
 .title{
     line-height: 45px;
     background-color: #000000;
     text-align: center;
     color: #ffffff;
     font-size: 14px;
    //  margin-bottom: 45px; 
 }
</style>

