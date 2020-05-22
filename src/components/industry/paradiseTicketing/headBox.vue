<template>
    <div class="title-box ly-flex-center">
        <img src="@/assets/img/industry/paradiseTicketing/logo.png" alt="">
        <h1>杭州乐园</h1>
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
            width: .61rem;
            height: .67rem;
            margin-right: .24rem;
        }
        h1 {
            font-size: .28rem;
            font-weight: bold;
            color: rgba(16,142,233,1);
            line-height: .4rem;
        }
    }
</style>