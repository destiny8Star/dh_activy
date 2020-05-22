<template>
    <div class="hospital">
        <headBox/>
        <div class="btn-box">
            <div class="item" @click="handleClick('/industry/paradiseTicketing/phoneForm',0)">购票</div>
            <div class="item" @click="handleClick('/industry/paradiseTicketing/phoneForm',1)">核销</div>
        </div>
        <outBox/>
    </div>
</template>

<script>
    import headBox from '@/components/industry/paradiseTicketing/headBox'
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
            handleClick(e,num){
                this.$router.push({path:e,query:{type:num}})
            }
        }
    }
</script>

<style scoped lang="scss">
    .hospital{
        width: 100%;
        height: 100vh;
        background: #fff;
        .btn-box {
            width: 4.8rem;
            margin: 3.42rem auto 0;
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