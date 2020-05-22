<template>
    <div class="BuyTickets">
        <headBox/>
        <h2>请选择门票类型</h2>
        <div class="kindBox">
            <div class="kindItemBox">
                <div class="item ly-flex-center-between">
                    <h3>成人票</h3>
                    <div class="numBox ly-flex-center">
                        <p class="ly-flex-baseline"><span>￥</span>{{manPrice}}</p>
                        <div class="numSet ly-flex-center">
                            <img src="@/assets/img/industry/paradiseTicketing/js@2x.png" alt="" @click="del(true)">
                            <b>{{manNum}}</b>
                            <img src="@/assets/img/industry/paradiseTicketing/tj@2x.png" alt="" @click="add(true)">
                        </div>
                    </div>
                </div>
                <div class="item ly-flex-center-between">
                    <h3>儿童票</h3>
                    <div class="numBox ly-flex-center">
                        <p class="ly-flex-baseline"><span>￥</span>{{childPrice}}</p>
                        <div class="numSet ly-flex-center">
                            <img src="@/assets/img/industry/paradiseTicketing/js@2x.png" alt="" @click="del(false)">
                            <b>{{childNum}}</b>
                            <img src="@/assets/img/industry/paradiseTicketing/tj@2x.png" alt="" @click="add(false)">
                        </div>
                    </div>
                </div>
                <div class="hintBox ly-flex-center">
                    <img src="@/assets/img/industry/paradiseTicketing/warning-circle@2x.png" alt="">
                    <span>仅限身高1.2米以下儿童使用</span>
                </div>
            </div>
        </div>
        <div class="explainBox">
            <p>使用说明：</p>
            <ul >
                <li v-for="(ele,i) in explainList" :key="i">{{ele.content}}</li>
            </ul>
        </div>
        <div class="carBox ly-flex-center-between">
            <div class="moneyBox ly-flex-center">
                <div class="imgBox">
                    <img src="@/assets/img/industry/paradiseTicketing/hezi@2x.png" alt="">
                    <div>{{totalNum}}</div>
                </div>
                <div class="numBox ly-flex-baseline">
                    <p>合计:</p>
                    <div class="ly-flex-baseline">￥<span>{{totalPrice}}</span></div>
                </div>
            </div>
            <div class="btn" @click="toPay">立即支付</div>
        </div>
    </div>
</template>

<script>
    import headBox from '@/components/industry/paradiseTicketing/headBox'
    import {Toast} from "vant"

    export default {
        name: "BuyTickets",
        components:{
            headBox,

        },
        data() {
            return {
                type: '',//【1：核销，0：购票】
                phone: '',//输入手机号
                manNum: 0,//成人票数量
                manPrice: '0.01',//成人票价钱
                childNum: 0,//儿童票数量
                childPrice: '0.01',//儿童票价钱
                // totalNum: '2',//总数量
                // totalPrice: '234',//总金额
                explainList: [
                    {
                        content: '1. 本门票仅能使用一次;'
                    },
                    {
                        content: '2. 本门票适用于:激流勇进、失落丛林、海盗船、飞出地平线、七个小矮人等项目，冲上云霄、动感电车需额外购票。'
                    }
                ]
            };
        },
        computed:{
            totalPrice(){
                return this.manPrice*this.manNum + this.childPrice*this.childNum
            },
            totalNum(){
                return this.manNum + this.childNum
            }
        },
        methods: {
            /**
             * 加
             */
            add(flag){
                if(flag){
                // 成人
                    this.manNum ++;
                }else {
                // 儿童
                    this.childNum ++
                }
            },
            /**
             *  减
             */
            del(flag){
                if(flag){
                    // 成人
                    if(this.manNum<1){
                        Toast('成人票购票张数为0')
                    }else {
                        this.manNum --;
                    }
                }else {
                    // 儿童
                    if(this.childNum<1){
                        Toast('儿童票购票张数为0')
                    }else {
                        this.childNum --;
                    }
                }
            },
            /**
             * 支付
             */
            toPay(){
                if(!this.totalPrice){
                    Toast('请先选择需要购买的票');
                    return false
                }
                let price = this.totalPrice;
                my.postMessage({'price':price});
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
        margin: 1.3rem 0;
    }
    .kindBox {
        width: 7.18rem;
        height: 2.56rem;
        box-shadow: 0 .16rem .32rem 0 rgba(39,43,46,0.14);
        border-radius: .24rem;
        margin: 0 auto;
        .kindItemBox {
            padding: .25rem 0;
            .item {
                height: .78rem;
                font-size: .32rem;
                padding: 0 .58rem;
                border-bottom: .02rem solid #E1E1E1;
                h3 {
                    font-weight:bold;
                }
                .numBox {
                    p {
                        font-weight: bold;
                        color: #FF5D5D;
                        margin-right: .22rem;
                        span {
                            font-size: .24rem;
                        }
                    }
                    .numSet {
                        img {
                            width: .39rem;
                            height: .39rem;
                        }
                        b {
                            margin: 0 .22rem;
                        }
                    }
                }
            }
            .item:nth-child(2){
                border: 0;
            }
        }
        .hintBox {
            padding: .02rem .58rem;
            img {
                width: .24rem;
                height: .24rem;
                margin-right: .08rem;
            }
            span {
                color: #999999;
            }
        }
    }
    .explainBox {
        padding: .45rem .6rem;
        text-align: left;
        line-height: .36rem;
        font-size: .26rem;
        p {
            font-size: .32rem;
            font-weight: bold;
            margin-bottom: .06rem;
        }
    }
    .carBox {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 99;
        height: 1.12rem;
        box-shadow: 0 -.02rem 0 0 rgba(216,216,216,1);
        padding: 0 .6rem;
        .moneyBox {
            .imgBox {
                position: relative;
                margin-right: .3rem;
                img {
                    width: .6rem;
                    height: .6rem;
                }
                div {
                    position: absolute;
                    right: -50%;
                    /*transform: translateX(10%);*/
                    top: -.12rem;
                    min-width: .4rem;
                    padding: 0 .08rem;
                    line-height: .3rem;
                    background: rgba(255,93,93,1);
                    border-radius: .16rem;
                    color: #fff;
                    font-size: .16rem;
                }
            }
            .numBox {
                div {
                    color: #FF5D5D;
                    span {
                        font-size: .4rem;
                    }
                }
            }
        }
        .btn {
            width: 2.24rem;
            line-height: .8rem;
            background: rgba(16,142,233,1);
            border-radius: .16rem;
            font-size: .26rem;
            font-weight:bold;
            color: #fff;
        }
    }
}
</style>