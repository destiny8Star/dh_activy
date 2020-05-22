<template> 
<div class="res">
   <div class="res_img"><img src="../../assets/img/distribution/end.png" alt=""></div>
   <h1>支付成功</h1>
   <div class="res_cont"><span style="margin-right:.6rem"></span>请保存好您的账号信息，并及时登录修改密码、完善信息。</div>
   <div class="res_bot">
        <div class="res_botTit">分销商账号开通成功</div>
        <div class="res_botItem">账号：<span class="itemRi">{{$route.query.mobile}}</span></div>
        <div class="res_botItem">密码：<span class="itemRi">123456</span></div>
        <div class="res_botItem">登录地址：
            <div class="itemRi2">
                <span class="itemRi">{{urls}}</span>
                <div class="copy" v-clipboard:copy="urls" v-clipboard:success="onCopy" v-clipboard:error="onError">复制</div>
            </div>
        </div>
   </div>
</div>
</template>
<script>
  import {Toast} from "vant"
  export default {
      name:"payres",
      data(){
          return{
              urls:"http://agent.pay.dianjishenghuo.cn/",//地址
          }
      },
      methods:{
            // 复制成功时的回调函数
            onCopy (e) {
              Toast("内容已复制到剪切板！")
            },
            // 复制失败时的回调函数
            onError (e) {
              Toast("抱歉，复制失败！")
            }
      }
  }
</script>
<style  scoped>
.res{
    width: 100%;
    height: 100%;
    background: #fff;
    padding: 1.20rem .96rem 0 
}
h1{
    font-size: .48rem;
    color: #242335;
    margin-bottom: 1.8rem;
    font-weight: bold
}
.res_img{
    width:1.8rem;
    height: 1.8rem;
    margin: 0 auto .2rem
}
img{
    width: 100%;
    height: 100%;
}
.res_cont{
    width: 100%;
    font-size: .32rem;
    color: #555559;
    border-bottom: .02rem solid #D6D6D6;
    padding-bottom: .32rem;
    margin-bottom: .8rem;
    text-align: left
}
.res_bot{
    font-size: .3rem;
    color:#242335;
    text-align: left;
}
.res_botTit{
    margin-bottom: .32rem
}
.res_botItem{
    margin-bottom: .16rem
}
.itemRi{
    font-weight: bold
}
.itemRi2{
    width: 100%;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: space-between
}
.copy{
    font-size: .24rem;
    color: #2DBFF5
}
</style>