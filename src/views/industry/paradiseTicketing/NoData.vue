<template>
    <div class="noData">
        <headBox/>
        <img src="@/assets/img/industry/paradiseTicketing/kong@2x.png" alt="">
        <p>未查询到门票信息，请先购票</p>
        <outBox/>
    </div>
</template>

<script>
    import headBox from '@/components/industry/paradiseTicketing/headBox'
    import outBox from '@/components/industry/hospital/outBox'
    export default {
        name: "noData",
        components:{
            headBox,
            outBox
        },
    }
</script>

<style scoped lang="scss">
    .noData {
        width: 100%;
        min-height: 100vh;
        background: #fff;
        img {
            width: 2.12rem;
            height: 2.08rem;
            margin: 2.6rem auto .32rem;
        }
        p {
            line-height: .48rem;
            font-size: .32rem;
            font-weight:500;
            color: rgba(216,216,216,1);
        }
    }
</style>