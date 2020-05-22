<template>
  <div class="index">
    <h2>欢迎光临加油站</h2>
    <div class="box">
        <h5>请选择加油枪</h5>
        <div class="contbox">
            <div :class="{'contItem':true,sel:sel == item.id }" v-for="(item,index) in gas" :key="index" @click="select(item.id)">
                <div class="item_tit">{{item.title}}</div>
                <h3>{{item.specs}}</h3> 
                <div class="item_price">单价：{{item.price}}</div>
            </div>
        </div>
        <div class="btn" @click="next(sel)">下一步</div>  
        <div class="out" @click="out">退出</div>
    </div>
  </div>
</template>
<script>
import {Toast} from "vant"
export default {
  name: "gas",
  data() {
    return {
        gas:[
           {
             id:1,
             title:"1号",
             specs:"92#",
             price:"0.01元/L"
           },
             {
             id:2,
             title:"2号",
             specs:"93#",
             price:"0.01元/L"
           },
             {
             id:3,
             title:"3号",
             specs:"97#",
             price:"0.01元/L"
           },
             {
             id:4,
             title:"4号",
             specs:"98#",
             price:"0.01元/L"
           },
        ],//汽油型号
        sel:'',//选择型号
    };
  },
  methods: {
      //选择加油型号
      select(id){
          console.log("id",id)
          this.sel = id
      },
      //跳转
      next(id){
          if(!id)return Toast("请选择加油枪!");
          this.$router.push('/gasprice?id='+id)
      },
      //退出
      out(){
           my.reLaunch({url: '/pages/index/index'})
      }
  }
};
</script>
<style  scoped>
.index {
  padding-top: 1.2rem;
  width: 100%;
  height: 100%;
}
h2 {
  font-size: 0.46rem;
  color: #333;
  text-align: center;
  margin-bottom: 1.3rem;
}
.box{
    width: 100%;
    padding:0 .92rem
}
h5{
    font-size: .32rem;
    color: #333;
    margin-left: -0.3rem;
    text-align: start;
    margin-bottom: .4rem
}
.contbox{
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: .8rem;
}
.contItem{
    width: 3rem;
    border-radius: .16rem;
    background: rgb(241, 241, 241);
    padding:.16rem 0 .24rem;
    color: #333;
    margin-bottom: .24rem

}
.sel{
    background: #108EE9;
    color: #fff
}
.item_tit{
    font-size: .28rem;
    text-align: start;
    margin-left: .16rem
}
h3{
    font-size: .4rem;
    margin: 0;
}
.item_price{
    font-size: .24rem
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
.out{
    font-size: .32rem;
    color: #108EE9;
    position: absolute;
    bottom: .2rem;
    left: 0;
    right: 0;
}
</style>