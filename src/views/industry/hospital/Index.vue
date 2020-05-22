<template>
    <div class="hospital">
        <headBox/>
        <h2>请选择办理事项</h2>
        <div class="btn-box">
            <div class="item" @click="handleClick('/industry/hospital/registration')">挂号</div>
            <div class="item" @click="handleClick('/industry/hospital/phoneForm')">缴费</div>
        </div>
        <outBox/>
    </div>
</template>

<script>
    import headBox from '@/components/industry/hospital/headBox'
    import outBox from '@/components/industry/hospital/outBox'
    export default {
        name: "Index",
        components:{
            headBox,
            outBox
        },
        data(){
            return{

            }
        },
        methods:{
            /**
             * 按钮功能
             */
            handleClick(e){
                this.$router.push(e)
            }
        }
    }
</script>

<style scoped lang="scss">
    .hospital{
        width: 100%;
        height: 100vh;
        background: #fff;
        h2 {
            margin-top: 2.10rem;
            font-size: .32rem;
            font-weight: 500;
            color: rgba(51,51,51,1);
            line-height: .7rem;
            margin-bottom: .76rem;
        }
        .btn-box {
            width: 4.8rem;
            margin: 0 auto;
            .item {
                line-height: .96rem;
                text-align: center;
                color: #fff;
                font-size: .28rem;
                background: rgba(16,142,233,1);
                border-radius: .16rem;
                margin-top: .6rem;
            }
        }
    }

</style>