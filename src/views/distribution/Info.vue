<template>
  <div class="info">
     <h1>填写分销商信息</h1>
     <div class="formBox">
        <div class="box_item">
            <div class="item_label">姓名</div>    
            <input type="text" placeholder="请输入姓名" v-model="name">
        </div>
        <div class="box_item">
            <div class="item_label">手机号</div>    
            <input type="number" oninput="if(value.length>11)value=value.slice(0,11)" placeholder="请输入手机号" v-model="mobile" @blur="getFocus" >
        </div>
        <div class="box_btn" @click="next">下一步</div>
        <span>提示：请输入正确的信息便于接收信息及账号管理</span>
     </div>
  </div>
</template>
<script>
import {Toast} from "vant"
export default {
  name: "info",
  data() {
    return {
        name:"",
        mobile:"",
        agentId:"",//从连接中获取的代理商id
        openId:"",//从连接中获取的代理商openId
    };
  },
  methods: {
        getFocus() {
            window.scroll(0, 0);
        },
        next(){
            console.log("this",this.name,this.mobile)
            let mobile = this.mobile;
            let name = this.name

            if(!name||!mobile){
                return Toast("请填写完整")
            }
            let reg = /^1\d{10}$/
            if(!reg.test(mobile)){
                 return  Toast("请输入正确手机号")
            }
            Toast.loading({
                message: '加载中...',
                forbidClick: true,
                duration:0
            });
            this.axios.get(this.$webConfig.apiAgentHost+'/public/agent/fx/tel/exist?tel='+mobile)
            .then(res=>{
                Toast.clear()
                console.log('结果',res)
                if(res.data.code==200){
                   this.$router.replace("/distribution/Select?name="+name+"&mobile="+mobile+"&agentId="+this.agentId+"&openId="+this.openId)
                }else{
                    Toast(res.data.message)
                }
            })
            .catch(rej=>{
                Toast.clear()
                Toast("网络异常");
            })       
        }
  },
  created() {
      this.agentId = this.$route.query.agentSubjectId
      this.openId =  this.$route.query.openid
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
    margin-bottom: 1.6rem;
    font-weight: bold
}
.formBox{
    width: 100%;
    color:#242335
}
.box_item{
    width: 100%;
    border-bottom: 0.02rem solid #D6D6D6;
    padding-bottom: .3rem;
    margin-bottom: .3rem
}
.item_label{
    font-size: .32rem;
    text-align: left;
    margin-bottom: .3rem
}
input{
    width: 100%;
    font-size: .36rem;
    font-weight: bold;
}
::placeholder{
    color: #D6D6D6
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
.span{
    font-size: .32rem
}
</style>