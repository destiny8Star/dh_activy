<template>
    <div class="BuyTickets">
        <headBox/>
        <h2>请选择需核销的门票</h2>
        <div class="itemBox">
            <div class="item ly-flex-center" v-for="(ele,i) in ticketList" :key="i">
                <div class="signBox">
                    <img v-if="!ele.flag" src="@/assets/img/industry/paradiseTicketing/wx@2x.png" alt="" @click="ele.flag = !ele.flag">
                    <img v-if="ele.flag" src="@/assets/img/industry/paradiseTicketing/xz@2x.png" alt="" @click="ele.flag = !ele.flag">
                </div>
                <div class="ticket">
                    <div class="titleBox ly-flex-center-between">
                        <div class="imgBox">
                            <img src="@/assets/img/industry/paradiseTicketing/piao@2x.png" alt="">
                            <span>{{ele.type}}</span>
                        </div>
                        <p>￥{{ele.price}}</p>
                    </div>
                    <div class="ticketNo">编号：{{ele.ticketNo}}</div>
                </div>
            </div>
        </div>
        <div class="confirmBtn" @click="confirmClick()">确定</div>
        <outBox/>
    </div>
</template>

<script>
    import headBox from '@/components/industry/paradiseTicketing/headBox'
    import outBox from '@/components/industry/hospital/outBox'
    import {Toast} from "vant"

    export default {
        name: "Verification",
        components:{
            headBox,
            outBox
        },
        data() {
            return {
                ticketList: [
                    {
                        flag: true,
                        type: '成人票',
                        price: '200',
                        ticketNo: '546745765674564'
                    },
                    {
                        flag: true,
                        type: '成人票',
                        price: '200',
                        ticketNo: '546745756474545'
                    },
                    {
                        flag: true,
                        type: '儿童票',
                        price: '100',
                        ticketNo: '546542736674564'
                    }
                ]
            }
        },
        methods:{
            /**
             * 确认核销
             */
            confirmClick(){
                let checkFlag = 0;
                this.ticketList.forEach(ele=>{
                    if(ele.flag){
                        checkFlag ++;
                    }
                });
                console.log(checkFlag);
                if(checkFlag == 0){
                    Toast('请选择需核销的票');
                    return false
                }
                this.$router.push({path:'/industry/paradiseTicketing/win',query:{}})
            }
        }
    }
</script>

<style scoped lang="scss">
    .BuyTickets {
        color: #333;
        width: 100%;
        min-height: 100vh;
        background: #fff;
        h2 {
            line-height: .7rem;
            font-size: .46rem;
            font-weight: 500;
            margin: 1.3rem 0 .58rem;
        }
        .itemBox {
            margin: 0 auto;
            width: 5.26rem;
            .item {
                .signBox {
                    margin: -.4rem .2rem 0 0;
                    img {
                        width: .28rem;
                        height: .28rem;
                    }
                }
                .ticket {
                    width: 5.08rem;
                    height: 1.92rem;
                    background: url("../../../assets/img/industry/paradiseTicketing/bg(2).png");
                    background-size: 100% 100%;
                    padding: .18rem .48rem;
                    .titleBox {
                        .imgBox {
                            line-height: .9rem;
                            img {
                                width: .37rem;
                                height: .28rem;
                                margin: -.04rem .16rem 0 0;
                            }
                        }
                        p {
                            color: #FF5D5D
                        }
                    }
                    .ticketNo {
                        line-height: .48rem;
                        text-align: left;
                    }
                }
            }
        }
        .confirmBtn {
            width: 4.80rem;
            line-height: .96rem;
            background: rgba(16,142,233,1);
            border-radius: .16rem;
            font-size: .28rem;
            font-weight:bold;
            color: #fff;
            margin: .8rem auto 0;
        }
    }
</style>