<template>
  <div class="info">
      <!-- <button @click="onBridgeReady">点击支付</button> -->
     <h1>确认支付</h1>
     <div class="infoMon">￥{{infos.price}}</div>
     <div class="infoCont">
        <div class="infoCont_le">收款人</div>
        <div class="infoCont_ri">{{payee}}</div>
     </div>
     <div class="box_btn" @click="onBridgeReady">立即支付</div>
  </div>
</template>
<script>
import { Toast} from "vant"
export default {
  name: "info",
  data() {
    return {
      payee:"",//收款人
      infos:{},//各种信息
    };
  },
  methods: {
      //支付方法
    onBridgeReady() {
      let that = this
      let fx_agent_info = JSON.stringify(this.infos)
      Toast.loading({
            message: '加载中...',
            forbidClick: true,
            duration:0
        });
        this.axios.post(this.$webConfig.apiAgentHost+'/agent/public/createOrder',{
            "agent_subject_id": this.infos.agentSubjectId,
            "fx_agent_info":fx_agent_info ,
            "openid":this.$route.query.openId,
            "price": this.infos.price
        })
        .then(res=>{
            Toast.clear()
            console.log('结果',res)
            let datas = res.data
            if(datas.code==200){
                if(datas.data.code == "SUCCESS"){
                   return datas
                }else{
                  Toast(datas.data.msg)
                }
            }else{
                Toast(res.data.message)
            }
        })
        .then(res=>{
            if (typeof WeixinJSBridge == "undefined"){
              if( document.addEventListener ){
                  document.addEventListener('WeixinJSBridgeReady', function(){this.wxPay(res)}, false);
              }else if (document.attachEvent){
                  document.attachEvent('WeixinJSBridgeReady', function(){this.wxPay(res)}); 
                  document.attachEvent('onWeixinJSBridgeReady', function(){this.wxPay(res)});
              }
            }else{
               this.wxPay(res);
            }
        })
        .catch(rej=>{
            Toast.clear()
            Toast("网络异常");
        }) 
    },
    wxPay(datas){
      let that = this
      //微信支付
       WeixinJSBridge.invoke(
          "getBrandWCPayRequest",
          {
            appId: datas.data.app_id, //公众号名称，由商户传入
            timeStamp: datas.data.time_stamp+"", //时间戳，自1970年以来的秒数
            nonceStr:datas.data.nonce_str, //随机串
            package: datas.data.wx_package,
            signType: datas.data.sign_type, //微信签名方式：
            paySign:datas.data.pay_sign //微信签名
          },
          res => {
            if (res.err_msg == "get_brand_wcpay_request:ok") {
                that.$router.replace("/distribution/payres?mobile="+that.infos.tel)
            }
          }
        );
    }
  },
  created() {
    // if (typeof WeixinJSBridge == "undefined") {
    //    //需要在微信中打开
    //   return Toast("请在微信中打开！")
    // } 
    this.infos = JSON.parse(this.$route.query.infos)
    this.payee = this.$route.query.payee
    console.log("获取信息",this.payee,this.infos)
  }
};
</script>
<style  scoped>
.info{
  width: 100%;
  height: 100%;
  background: #fff;
  padding: 1.20rem .96rem 0 
}
h1{
    font-size: .48rem;
    color: #242335;
    margin-bottom: .32rem;
    font-weight: bold
}
.infoMon{
  font-size: .48rem;
  color: #FE8233;
  font-weight: bold;
  margin-bottom: .9rem
}
.infoCont{
  width: 100%;
  border-bottom: .02rem solid #D6D6D6;
  padding-bottom: .3rem;
  font-size: .32rem;
  color: #242335;
  display: flex;
  align-items: center;
  justify-content: space-between
}
.infoCont_ri{
  font-weight: bold
}
.box_btn{
    width: 100%;
    height: .96rem;
    font-size: .32rem;
    color: #fff;
    text-align: center;
    line-height: .96rem;
    background: #1890FF;
    margin:.9rem 0 .15rem
}
.box_cancel{
  font-size: .28rem;
  color: #242335;
  font-weight: bold
}
</style>