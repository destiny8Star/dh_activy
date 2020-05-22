<template>
    <div class="index">
        <!-- <headBox/> -->
        <h2>请输入手机号</h2>
        <div class="inp_box"><input type="number" placeholder="请输入手机号" v-model="phone"></div>
        <div class="btn" @click="next()">下一步</div>
        <div class="out" @click="out">退出</div>
    </div>
</template>
<script>
    import headBox from '@/components/industry/hospital/headBox'
    import {Toast} from "vant"
    let reg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
    export default {
        name: "PhoneForm",
        components:{
            headBox
        },
        data() {
            return {
                dateId: '',//选择挂号时间id
                courseId: '',//选择医院科目id
                phone: '',//输入手机号
            };
        },
        methods: {
            //跳转
            next(){
                if(this.phone==''){
                    Toast("请输入手机号!");
                    return false ;
                }
                if(!reg.test(this.phone)){
                    Toast("请输入正确手机号!");
                    return false ;
                }
                this.$router.push({path:'/industry/hospital/orderDetail',query:{id:this.id,phone:this.phone}})
            },
            //退出
            out(){
                my.reLaunch({url: '/pages/index/index'})
            }
        },
        created(){
            if(this.$route.query){
                this.courseId = this.$route.query.courseId;
                this.dateId = this.$route.query.choDateId;
            }
            let id = this.$route.query.courseId;
            this.id = id;
            console.log('id',id)
        },
    };
</script>
<style scoped>
    .index {
        width: 100%;
        height: 100%;
        background: #fff
    }
    h2 {
        padding-top: 1.2rem;
        font-size: 0.46rem;
        color: #333;
        text-align: center;
        margin-bottom: 1.3rem;
    }
    .inp_box{
        width: 100%;
        padding:0 1.05rem;
        margin-bottom: 2rem;
        font-size: .45rem
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
    input{
        width: 100%;
        border-bottom: .01rem solid #D8D8D8;
        padding:.24rem 0
    }
    ::placeholder{
        color: darkgray
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