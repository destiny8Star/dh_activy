<template>
    <div class="registration-box">
        <headBox/>
        <h2>请选择挂号科室</h2>
        <div class="item-box ly-flex-center">
            <div class="item" :class="{act:ele.flag}" v-for="(ele,i) in nameList" :key="i" @click="chooseClick(ele)">{{ele.name}}</div>
        </div>
        <div class="btn" @click="jumpPage">身份验证</div>
        <van-popup v-model="showCho" position="bottom">
            <div class="content-box">
                <img src="@/assets/img/industry/hospital/close.png" alt="" @click = 'showCho = !showCho'>
                <h4>请选择挂号时间</h4>
                <div class="content ly-flex-center-between">
                    <div class="item" :class="{act:ele.flag}" v-for="(ele,i) in dateList" :key="i" @click="chooseDateClick(ele)">
                        <h1>{{ele.name}}</h1>
                        <p>挂号费: {{ele.money}}元</p>
                    </div>
                </div>
                <div class="confirmBtn" :class="{win:choDateId!=''}" @click="confirmClick">确定</div>
            </div>
        </van-popup>
        <outBox/>
    </div>
</template>

<script>
    import headBox from '@/components/industry/hospital/headBox'
    import outBox from '@/components/industry/hospital/outBox'
    import {Toast} from "vant"

    export default {
        name: "Registration",
        components:{
            headBox,
            outBox
        },
        data(){
            return {
                showCho: false,//选择挂号时间--展示or隐藏
                choId: '',//选中的科目的id
                choDateId: '',//选中的挂机时间的id
                nameList: [
                    {
                        id: 1,
                        name: '儿科',
                        flag: false
                    },
                    {
                        id: 2,
                        name: '妇科',
                        flag: false
                    },
                    {
                        id: 3,
                        name: '外科',
                        flag: false
                    },
                    {
                        id: 4,
                        name: '内科',
                        flag: false
                    },
                    {
                        id: 5,
                        name: '口腔科',
                        flag: false
                    },
                    {
                        id: 6,
                        name: '耳鼻咽喉科',
                        flag: false
                    },
                    {
                        id: 7,
                        name: '眼科',
                        flag: false
                    },
                    {
                        id: 8,
                        name: '骨科',
                        flag: false
                    },
                    {
                        id: 9,
                        name: '肝肠科',
                        flag: false
                    }
                ],
                dateList: [
                    {
                        id: 1,
                        name: '上午挂号',
                        money: '0.01',
                        flag: false
                    },
                    {
                        id: 2,
                        name: '下午挂号',
                        money: '0.01',
                        flag: false
                    }
                ]
            }
        },
        methods:{
            /**
             * 选择挂号科目
             * @param data
             */
            chooseClick(data){
                console.log(data);
                this.showCho = ! this.showCho;
                this.choDateId = '';
                this.nameList.forEach(ele=>{
                    console.log(ele);
                    ele.flag = false;
                });
                data.flag = !data.flag;
                this.choId = data.id;
            },
            /**
             * 选择挂号时间
             * @param data
             */
            chooseDateClick(data){
                console.log(data);
                this.dateList.forEach(ele=>{
                    console.log(ele);
                    ele.flag = false;
                });
                data.flag = !data.flag;
                this.choDateId = data.id;
            },
            /**
             * 身份验证
             */
            jumpPage(){
                console.log("身份验证");
                if(this.choId == ''){
                    Toast('请选择挂号科室');
                    return false;
                }
                if(this.choDateId == ''){
                    Toast('请选择挂号时间');
                    return false;
                }
                localStorage.dateId = this.choDateId;
                localStorage.courseId = this.choId;
                this.$router.push({path:'/industry/hospital/phoneForm',query: {dateId:this.choDateId,courseId: this.choId}})
            },
            /**
             * 确认按钮
             */
            confirmClick(){
                if(this.choDateId == ''){
                    Toast('请选择挂号时间');
                    return false;
                }
                localStorage.dateId = this.choDateId;
                localStorage.courseId = this.choId;
                this.$router.push({path:'/industry/hospital/phoneForm',query: {dateId:this.choDateId,courseId: this.choId}})
            }
        }
    }
</script>

<style scoped lang="scss">
.registration-box {
    width: 100%;
    height: 100vh;
    background: #fff;
    h2 {
        font-size: .32rem;
        font-weight: 500;
        color: rgba(51,51,51,1);
        line-height: .7rem;
        margin-top: 1.12rem;
    }
    .item-box {
        padding: .48rem .84rem .92rem;
        flex-wrap: wrap;
        .item {
            width: 1.84rem;
            line-height: .96rem;
            text-align: center;
            border-radius: .16rem;
            border: .01rem solid rgba(51,51,51,1);
            font-size: .28rem;
            font-weight:bold;
            color: #333;
            margin: 0 .4rem .48rem 0;
        }
        .item:nth-child(3n) {
            margin-right: 0;
        }
        .item.act{
            background: rgba(16,142,233,1);
            border: .01rem solid rgba(16,142,233,1);
            color: #fff
        }
    }
    .btn {
        width: 4.8rem;
        line-height: .96rem;
        background: rgba(16,142,233,1);
        border-radius: .16rem;
        font-size: .28rem;
        font-weight: bold;
        color: #fff;
        margin: 0 auto;
    }
    .content-box {
        padding: .8rem .6rem .92rem;
        color: #333;
        text-align: center;
        position: relative;
        img {
            width: .48rem;
            height: .48rem;
            position: absolute;
            right: .6rem;
            top: .3rem
        }
        h4 {
            font-size: .32rem;
            font-weight:500;
            line-height: .7rem;
        }
        .content {
            margin: .7rem auto .85rem;
            .item {
                width: 3rem;
                height: 1.6rem;
                background: rgba(246,246,246,1);
                border-radius: .16rem;
                padding-top: .28rem;
                h1 {
                    font-size: .4rem;
                    font-weight: bold;
                    line-height: .56rem;
                }
                p {
                    font-size: .24rem;
                    line-height: .34rem;
                    margin-top: .15rem;
                }
            }
            .item.act {
                background: #108EE9;
                color: #fff;
            }
        }
        .confirmBtn {
            width: 4.8rem;
            line-height: .96rem;
            background: rgba(246,246,246,1);
            border-radius: .16rem;
            font-size: .28rem;
            font-weight: bold;
            margin: 0 auto;
        }
        .confirmBtn.win {
            background: #108EE9;
            color: #fff;
        }
    }
}
</style>