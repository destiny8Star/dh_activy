<template>
  <div class="index">
    <h2>订单确认</h2>
    <div class="box">
       <div class="item"><span>加油枪</span><span class="fbold">{{item.title}}</span> </div>
       <div class="item"><span>汽油品类</span><span class="fbold">{{item.specs}}</span> </div>
       <div class="item"><span>单价</span><span class="fbold">{{item.price}}</span> </div>
       <div class="item"><span>加油金额</span><span class="fbold">￥{{price}}</span> </div>
       <div class="item"><span>加油量</span><span class="fbold">{{number}}L</span> </div>
    </div> 
    <div class="btn" @click="toPay">确认</div> 
     <div class="out" @click="out">退出</div> 
  </div>
</template>
<script>
import {Toast} from "vant"
export default {
  name: "price",
  data() {
    return {
        price:'',//输入金额
        number:'',//加油量
        item:{},//当前选中的item
          gas:[
           {
             id:1,
             title:"1号加油枪",
             specs:"92号汽油",
             price:"0.01元/L"
           },
             {
             id:2,
             title:"2号加油枪",
             specs:"93号汽油",
             price:"0.01元/L"
           },
             {
             id:3,
             title:"3号加油枪",
             specs:"97号汽油",
             price:"0.01元/L"
           },
             {
             id:4,
             title:"4号加油枪",
             specs:"98号汽油",
             price:"0.01元/L"
           },
        ],//汽油型号
    };
  },
  methods: {
    //支付
    toPay(){
        let price = this.price
        my.postMessage({'price':price});
    },
      //退出
      out(){
           my.reLaunch({url: '/pages/index/index'})
      }
  },
  created(){
   let id = this.$route.query.id
   this.price = this.$route.query.price
   this.item =  this.gas.find(function (item) {
            return item.id = id
    })
   this.number = this.price*100
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
.box{
    width: 100%;
    padding:0 1.24rem;
    font-size: .32rem;
    color: #333;
    margin-bottom: 1.2rem
}
.item{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: .16rem 0
}
.fbold{
    font-weight: bolder;
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