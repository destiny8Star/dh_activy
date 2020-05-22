<template> 
   <div class="img-box">
        <img :src="img" alt="">
   </div>
</template>
<script>
   export default {
       name:'poster',
       data(){
           return {
               img:''
           }
       },
       created(){
           this.img = this.$route.query.img
           console.log("获取图片地址",this.img)
       }
   }
</script>
<style  scoped>
.img-box{
    width: 100%;
    height: 100%;
}
.img-box img{
    width: 100%;
    height: 100%;
}
</style>