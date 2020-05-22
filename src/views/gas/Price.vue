<template>
  <div class="index">
    <h2>请输入金额</h2>
    <div class="inp_box"><input type="number" placeholder="请输入金额" v-model="price"></div>
    <div class="btn" @click="next()">下一步</div>  
     <div class="out" @click="out">退出</div>
  </div>
</template>
<script>
import {Toast} from "vant"
export default {
  name: "price",
  data() {
    return {
        id:'',//选择型号
        price:'',//输入金额
    };
  },
  methods: {
      //跳转
      next(){
          let price = this.price
          let id = this.id
          console.log("price",price)
          if(!price)return Toast("请输入正确金额!");
          this.$router.push('/gasdetail?id='+id+"&price="+price)
      },
        //退出
      out(){
           my.reLaunch({url: '/pages/index/index'})
      }
  },
  created(){
   let id = this.$route.query.id
   this.id = id
   console.log('id',id)
  },
};
</script>
<style  scoped>
.index {
  padding-top: 1.2rem;
  width: 100%;
  height: 100%;
  background: #fff
}
h2 {
  font-size: 0.46rem;
  color: #333;
  text-align: center;
  margin-bottom: 1.3rem;
}
.inp_box{
    width: 100%;
    padding:0 1.05rem;
    margin-bottom: 2rem;
    font-size: .45rem
}
.btn{
    width: 4.8rem;
    height: .96rem;
    background: #108EE9;
    font-size: .28rem;
    color: #fff;
    border-radius: .16rem;
    text-align: center;
    line-height: .96rem;
    margin:0 auto
}
input{
    width: 100%;
    border-bottom: .01rem solid #D8D8D8;
    padding:.24rem 0
}
::placeholder{
    color: darkgray
}
.out{
    font-size: .32rem;
    color: #108EE9;
    position: absolute;
    bottom: .2rem;
    left: 0;
    right: 0;
}
</style>