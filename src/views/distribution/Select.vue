<template> 
    <div class="select">
        <h1>选择分销合作方案</h1>
        <div class="selBox">
            <div :class="['selItem',selId == item.id?'selB':'']" v-for="(item,index) in arr" :key="index" @click="selHandler(item.id,index)">
                 <div class="selItem_left">
                      <div class="itmeLeft_top">
                          <div class="itmeLeft_tit">{{item.name}}</div>
                          <div class="itmeLeft_mon">￥{{item.price}}</div>
                      </div>
                      <div class="itmeLeft_bot">返佣比例：{{item.cost_rate}}%</div>
                 </div>
                 <div :class="['selItem_right',selId == item.id?'selRight':'']">
                     <img src="../../assets/img/distribution/sel_no.png" alt="" class="sel_img" v-show="selId != item.id">
                     <img src="../../assets/img/distribution/sel_is.png" alt="" class="sel_img" v-show="selId == item.id">
                 </div>
            </div>
        </div>
        <div class="box_btn" @click="next">下一步</div>
    </div>
</template>
<script>
  import {Toast} from "vant"
  export default {
      name:"selects",
      data(){
          return {
            selId:"",//选择的id
            selIndex:"",//选择的index
            arr:[],//合作方案
            payee:"",//传给下一页的支付人名称
          }
      },
      created(){
             let agentId = this.$route.query.agentId
             Toast.loading({
                message: '加载中...',
                forbidClick: true,
                duration:0
            });
            this.axios.get(this.$webConfig.apiAgentHost+'/public/agent/fx/role/list?agent_subject_id='+agentId)
            .then(res=>{
                Toast.clear()
                console.log('结果',res)
                if(res.data.code==200){
                   this.arr = res.data.data.list_resps
                   this.payee = res.data.data.payee
                }else{
                    Toast(res.data.message)
                }
            })
            .catch(rej=>{
                Toast.clear()
                Toast("网络异常");
            }) 
      },
      methods:{
          selHandler(id,index){
              this.selId = id
              this.selIndex = index
              console.log("id,indexs",id,index,this.arr[index])
          },
          next(){
              let index = this.selIndex
              if(index === ""){
                  return Toast("请选择合作方案!")
              }
              let openId = this.$route.query.openId
              let infos = {
                  "costRate":this.arr[index].cost_rate,
                  "fxAgentOpenRuleId":this.arr[index].id,
                  "price":this.arr[index].price,
                  "name":this.$route.query.name,
                  "rebateRate":this.arr[index].rebate_rate,
                  "tel":this.$route.query.mobile,
                  "agentSubjectId":this.$route.query.agentId
              }
             infos = JSON.stringify(infos)
             this.$router.push("/distribution/Order?infos="+infos+"&openId="+openId+"&payee="+this.payee)
        }
      }
  }
</script>
<style  scoped>
.select{
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
.selBox{
    width: 100%;
    margin-bottom: 1rem
}
.selItem{
    width: 100%;
    border: .02rem #D6D6D6 solid;
    border-radius: 0.08rem;
    display: flex;
    margin-bottom: .3rem
}
.selB{
    border: .02rem #F7AD32 solid;
    background: rgba(247, 173, 50, 0.1)
}
.selItem_left{
    flex:1;
    padding:.16rem 0 .16rem .32rem;
}
.selItem_right{
    width: 1.4rem;
    border-left: 0.02rem dashed #D6D6D6;
    padding:.5rem 0 
}
.selRight{
     border-left: 0.02rem dashed #F7AD32;
}
.itmeLeft_top{
    width: 100%;
    display: flex;
    align-items: center;
    font-size: .36rem ;
    margin-bottom: .16rem
}
.itmeLeft_tit{
    color: #242335;
    margin-right: .16rem
}
.itmeLeft_mon{
    color: #FE8233;
}
.itmeLeft_bot{
    font-size: .24rem;
    color: #242335;
    text-align: left
}
.sel_img{
    width: .4rem;
    height: .4rem;
    margin: 0 auto
}
.box_btn{
    width: 100%;
    height: .96rem;
    font-size: .32rem;
    color: #fff;
    text-align: center;
    line-height: .96rem;
    background: #1890FF;
}

</style>