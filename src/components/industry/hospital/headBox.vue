<template>
    <div class="title-box ly-flex-center">
        <img src="@/assets/img/industry/hospital/logo.png" alt="">
        <h1>浙江省立同德医院</h1>
    </div>
</template>

<script>
    export default {
        name: "headBox"
    }
</script>

<style scoped lang="scss">
    .title-box {
        padding: .32rem .6rem .24rem;
        img {
            width: 1.2rem;
            height: .74rem;
            margin-right: .08rem;
        }
        h1 {
            font-size: .28rem;
            font-weight: bold;
            color: rgba(16,142,233,1);
            line-height: .4rem;
        }
    }
</style>