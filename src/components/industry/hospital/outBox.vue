<template>
    <h3 @click="out">退出</h3>
</template>

<script>
    export default {
        name: "outBox",
        methods:{
            /**
             * 退出
             */
            out(){
                my.reLaunch({url: '/pages/index/index'})
            }
        }
    }
</script>

<style scoped lang="scss">
    h3 {
        width: 100%;
        text-align: center;
        font-size: .32rem;
        font-weight: 500;
        color: rgba(16,142,233,1);
        line-height: .45rem;
        position: fixed;
        bottom: .24rem;
        left: 0;
    }
</style>