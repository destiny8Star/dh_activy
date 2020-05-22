<template>
    <div class="OrderDetail">
        <headBox/>
        <h2>个人信息</h2>
        <div class="item-box">
            <div class="item ly-flex-center-between" v-for="(ele,i) in orderDetail" :key="i">
                <p>{{ele.name}}</p>
                <div>
                    <span v-if="i==4">￥</span>
                    <span>{{ele.value}}</span>
                </div>
            </div>
        </div>
        <div class="payBtn" @click="toPay">刷脸支付</div>
        <outBox/>
    </div>
</template>

<script>
    import headBox from '@/components/industry/hospital/headBox'
    import outBox from '@/components/industry/hospital/outBox'
    export default {
        name: "OrderDetail",
        components:{
            headBox,
            outBox
        },
        data(){
            return{
                mapDate: {1:'上午',2:'下午',null:'上午',undefined:'上午'},//挂号时间
                mapCourse: {1:'儿科',2:'妇科',3:'外科',4:'内科',5:'口腔科',6:'耳鼻咽喉科',7:'眼科',8:'骨科',9:'肝肠科',null:'儿科',undefined:'儿科'},//挂号科目
                orderDetail: [
                    {
                        name: '姓名',
                        value: '张三'
                    },
                    {
                        name: '身份证号',
                        value: '330898277648483392'
                    },
                    {
                        name: '挂号科室',
                        value: '口腔科'
                    },
                    {
                        name: '挂号时间',
                        value: '下午'
                    },
                    {
                        name: '费用',
                        value: '0.01'
                    }
                ]
            }
        },
        methods:{
            /**
             * 刷脸支付
             */
            toPay(){
                let price = this.orderDetail[4].value;
                my.postMessage({'price':price});
            }
        },
        created(){
            this.orderDetail[2].value = this.mapCourse[localStorage.courseId];
            this.orderDetail[3].value = this.mapDate[localStorage.dateId]
        }
    }
</script>

<style scoped lang="scss">
.OrderDetail{
    height: 100vh;
    min-height: 100vh;
    background: #fff;
    h2 {
        font-size: .46rem;
        font-weight: 500;
        color: rgba(51,51,51,1);
        line-height: .7rem;
        margin: .56rem 0 1.36rem;
    }
    .item-box {
        padding: 0 1.24rem;
        .item {
            margin: .36rem 0;
            font-size: .32rem;
            color: rgba(51,51,51,1);
            line-height: .46rem;
            div {
                font-weight: bolder;
            }
        }
    }
    .payBtn {
        width: 4.8rem;
        line-height: .96rem;
        color: #fff;
        background: rgba(16,142,233,1);
        border-radius: .16rem;
        font-size: .28rem;
        font-weight: bold;
        margin: .58rem auto;
    }
}
</style>