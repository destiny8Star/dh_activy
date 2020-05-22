<template>
    <div>
        <div class="bg_box">
            <img class="bg_img" src="../../assets/img/dialActivity/bg@2x.png" alt="">
            <div class="wheel_wrapper">
                <p class="wheel-pointer" @click="onClickRotate">立即<br>抽奖</p>
                <div class="wheel-bg" :class="{freeze: freeze}" :style="`transform: rotate(${wheelDeg}deg)`">
                    <div class="prize-list">
                        <div class="prize-item-wrapper" v-for="(item,index) in prizeList" :key="index">
                            <div class="prize-item" :style="`transform: rotate(${(360/ prizeList.length) * index}deg)`">
                                <div class="prize-name" :class="{thank:item.sign}">{{ item.grade }}</div>
                                <!--<div class="prize-icon">
                                    <img :src="item.icon">
                                </div>-->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="hint_box">您还有{{prizeInfo.count}}次抽奖机会</div>
            <div class="explain_box">
                <h1>奖品说明</h1>
                <div v-for="(ele,i) in explainList" :key="i"><div class="explain_item" v-if="!ele.sign">{{ele.grade}}： <p>{{ele.name}}</p></div></div>
            </div>
            <div class="prize_box" v-if="prizeStatus">
                <img src="../../assets/img/dialActivity/guanbi@2x.png" alt="" @click="prizeStatus = !prizeStatus">
                <div class="prize">
                    <h1>{{prizeInfo.id ? '恭喜抽中' : '谢谢参与'}}</h1>
                    <h2>{{prizeInfo.id ? prizeInfo.grade : '您还有' + `${prizeInfo.count}` + '次'}}</h2>
                    <h3>{{prizeInfo.id ? prizeInfo.name : '抽奖机会'}}</h3>
                    <p>请联系收银员</p>
                </div>
                <div class="btn_box" v-if="prizeInfo.count" @click="prizeStatus = !prizeStatus">再来一次</div>
            </div>
        </div>
    </div>
</template>

<script>
    import { Toast } from 'vant';
    export default {
        name: "dialActivity",
        data() {
            return {
                prizeStatus: false,//弹窗状态
                order_no:'', //订单号，传递过来的
                prizeInfo: {
                    grade: '',
                    name: '',
                    id: 0,
                    count: 0,//抽奖次数
                },
                freeze: false,//冻结
                rolling: false,//旋转中
                wheelDeg: 0,//转动角度
                prizeNumber: 6,//转盘平均数量
                prizeListOrigin: [
                   /* {
                        icon: "https://picsum.photos/40?random=1",
                        grade: "$10000"
                    },
                    {
                        icon: "https://picsum.photos/40?random=1",
                        grade: "$10000"
                    },
                    {
                        icon: "https://picsum.photos/40?random=2",
                        grade: "$500"
                    },
                    {
                        icon: "https://picsum.photos/40?random=6",
                        grade: "$50"
                    },
                    {
                        icon: "https://picsum.photos/40?random=5",
                        grade: "$10"
                    },
                    {
                        icon: "https://picsum.photos/40?random=6",
                        grade: "$100"
                    }*/
                ],
                explainList: [
                    /*{
                        grade: '一等奖',
                        name: 'iPhone 11 一部'
                    },
                    {
                        grade: '二等奖',
                        name: 'iPhone X 一部'
                    },
                    {
                        grade: '三等奖',
                        name: 'HUAWEI P30 一部'
                    },
                    {
                        grade: '二等奖',
                        name: 'iPhone X 一部'
                    },
                    {
                        grade: '三等奖',
                        name: 'HUAWEI P30 一部'
                    }*/
                ]
            }
        },
        computed: {
            prizeList() {
                return this.prizeListOrigin.slice(0, this.prizeNumber)
            }
        },
        methods: {
            onClickRotate() {
                if (this.rolling) {
                    return;
                }
                if (this.prizeInfo.count == 0) {
                    Toast('您的抽奖机会已用完');
                    return;
                }
                this.rolling = true;
                console.log(this.rolling);
                this.prizeInfo.count --;
                console.log(this);
                let postData = {
                    // "order_no": 'VIP1201374635267067904'
                    "order_no": this.order_no
                };
                this.axios.post('/mer/marketing/activy/raffle',postData).then(res=>{
                    console.log(res);
                    if(res.data.code === this.$webConfig.httpSuccessStatus){
                        this.prizeInfo = res.data.data;
                        if(this.prizeInfo.id){
                            console.log('已中奖')
                            //已中奖
                            this.prizeList.forEach((ele,i)=>{
                                if(ele.id == this.prizeInfo.id){
                                    const {wheelDeg, prizeList} = this;
                                    console.log(this);
                                    const random = i;
                                    console.log(random);
                                    this.wheelDeg =
                                        wheelDeg -
                                        wheelDeg % 360 +
                                        6 * 360 +
                                        (360 - 360 / prizeList.length * random);
                                }
                            });
                        }else {
                            console.log('未中奖');
                            //未中奖
                            this.prizeList.some((ele,i)=>{
                                if(!ele.id){
                                    const {wheelDeg, prizeList} = this;
                                    console.log(this);
                                    const random = i;
                                    console.log(random);
                                    this.wheelDeg =
                                        wheelDeg -
                                        wheelDeg % 360 +
                                        6 * 360 +
                                        (360 - 360 / prizeList.length * random);
                                    return false
                                }
                            });
                        }
                        setTimeout(() => {
                            this.prizeStatus = true;
                            this.rolling = false;
                        }, 3500);
                    }else {
                        Toast(res.data.message);
                    }
                });
                /*const {wheelDeg, prizeList} = this;
                console.log(this);
                const random = Math.floor(Math.random() * (prizeList.length));
                console.log(random);
                this.wheelDeg =
                    wheelDeg -
                    wheelDeg % 360 +
                    6 * 360 +
                    (360 - 360 / prizeList.length * random);
                setTimeout(() => {
                    this.rolling = false;
                    alert("Result：" + prizeList[random].grade);
                }, 2500);*/
            },
            /**
             * 获取奖项list
             */
            getList(){
                let listItem = {grade: '谢谢惠顾',sign: true};
                let list = [1,2,3,4,5,6,7,8,9,10];
                let postData = {
                    // "order_no": 'VIP1201374635267067904'
                    "order_no": this.order_no
                };
                this.axios.post('/mer/marketing/activy/selectListMarketingActivyInfo',postData).then(res=>{
                    console.log(res);
                    if(res.data.code === this.$webConfig.httpSuccessStatus){
                        this.prizeInfo.count = res.data.data.count;
                        this.prizeListOrigin = res.data.data.list;
                        this.explainList = res.data.data.list;
                        console.log(this.prizeListOrigin,this.explainList);
                        if(this.prizeListOrigin.length==5){
                            this.prizeListOrigin.push(listItem);
                            console.log(this.prizeListOrigin);
                        }else {
                            list.forEach((ele,i)=>{
                                console.log(ele,i);
                                if( i%2 == 0&&this.prizeListOrigin.length<this.prizeNumber+1 ){
                                    this.prizeListOrigin.splice(i+1,0,listItem)
                                }
                            });
                            console.log(this.prizeListOrigin);
                        }
                    }else {
                        Toast(res.data.message);
                    }
                });

            }
        },
        watch: {
            prizeNumber() {
                this.freeze = true
                this.wheelDeg = 0

                setTimeout(() => {
                    this.freeze = false
                }, 0)
            }
        },
     
        mounted(){
            this.order_no = this.$route.query.order
           
            // 获取奖项list   
            this.getList();
        }
    }
</script>

<style scoped>
    .bg_box {
        min-height: 108vh;
        height: 12.8rem;
        position: relative;
        background: #DC3243;
        overflow: hidden;
        overflow-y: auto;
    }

    .bg_img {
        width: 99vw;
    }

    .wheel_wrapper {
        left: 50%;
        top: 3.13rem;
        margin-left: -3.3rem;
        width: 6.6rem;
        height: 6.6rem;
        position: absolute;
        background: url("../../assets/img/dialActivity/circleb@2x.png");
        background-size: 100% 100%;
    }

    .wheel-pointer {
        width: 2.09rem;
        height: 2.52rem;
        position: absolute;
        top: 1.86rem;
        left: 50%;
        background: url("../../assets/img/dialActivity/pointer@2x.png");
        background-size: 100% 100%;
        font-size: .4rem;
        font-weight: bold;
        color: rgba(250, 68, 69, 1);
        line-height: .48rem;
        padding-top: .99rem;
        margin-left: -1.045rem;
        z-index: 99;
    }

    .wheel-bg {
        width: 100%;
        height: 100%;
        border-radius: 1000px;
        overflow: hidden;
        /*transition: transform 4s ease-in-out;*/
        transition: transform 3s cubic-bezier(0, 0.08, 0, 0.96);
        /*background: #7EEF97;*/
        background: url("../../assets/img/dialActivity/circleb@2x.png");
        background-size: 100% 100%;
    }

    .freeze {
        transition: none;
        background: red;
    }

    .prize-list {
        width: 100%;
        height: 100%;
        position: relative;
    }

    .prize-item-wrapper {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 50%;
        height: 50%;
    }

    .prize-item {
        width: 100%;
        height: 100%;
        line-height: 2.6rem;
        transform-origin: bottom;
    }

    .prize-name {
        font-size: .36rem;
        font-weight: bold;
        color: rgba(255, 48, 45, 1);
    }

    .prize-name.thank {
        font-size: .3rem;
        font-weight: 400;
        color: rgba(181, 117, 64, 1);
    }

    .prize-icon {

    }

    .hint_box {
        width: 5.9rem;
        height: .74rem;
        background: url("../../assets/img/dialActivity/chancea@2x.png");
        background-size: 100% 100%;
        position: absolute;
        top: 9.76rem;
        left: 50%;
        transform: translateX(-50%);
        font-size: .36rem;
        font-weight: 600;
        color: rgba(220, 50, 67, 1);
        line-height: .62rem;
    }

    .explain_box {
        max-width: 6rem;
        text-align: left;
        position: absolute;
        top: 10.85rem;
        left: 50%;
        transform: translateX(-50%);
        font-size: .3rem;
        font-weight: bold;
        color: rgba(251, 227, 78, 1);
        line-height: .42rem;
        white-space: nowrap;
    }
    .explain_box h1 {
        margin-bottom: .04rem;
    }
    .explain_item {
        display: flex;
        align-items: baseline;
    }
    .explain_item p {
        /*white-space: normal;*/
    }

    .prize_box {
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        margin: 0;
        z-index: 999;
        background: rgba(0,0,0,0.6);
        color: rgba(220,50,67,1);
    }
    .prize_box img {
        width: .48rem;
        height: .48rem;
        margin: 2.57rem 1.1rem .19rem 6.42rem;
    }
    .prize {
        width: 5.8rem;
        height: 5.4rem;
        background: url("../../assets/img/dialActivity/packet@2x.png");
        background-size: 100% 100%;
        margin: 0 auto;
        padding: 1.56rem 0 .6rem;
    }
    .prize h1 {
        font-size: .3rem;
        margin-bottom: .1rem;
    }
    .prize h2, .prize h3{
        font-size: .36rem;
        font-weight: bold;
        line-height: .48rem;
    }
    .prize p{
        font-size: .24rem;
        color: #fff;
        margin-top: 1.56rem;
    }
    .btn_box {
        width: 4rem;
        height: .75rem;
        font-size: .28rem;
        font-weight: bold;
        padding-top: .2rem;
        margin: 0 auto;
        background: url("../../assets/img/dialActivity/btn@2x.png");
        background-size: 100% 100%;
    }
</style>