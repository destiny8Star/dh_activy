<template>
    <div class="winBox">
        <headBox/>
        <img src="@/assets/img/industry/paradiseTicketing/cg@2x.png" alt="">
        <h4>核销成功</h4>
        <p>祝您游玩愉快！</p>
        <outBox/>
    </div>
</template>

<script>
    import headBox from '@/components/industry/paradiseTicketing/headBox'
    import outBox from '@/components/industry/hospital/outBox'
    export default {
        name: "Win",
        components:{
            headBox,
            outBox
        },
    }
</script>

<style scoped lang="scss">
.winBox {
    width: 100%;
    min-height: 100vh;
    background: #fff;
    color: #333;
    img {
        width: 1.85rem;
        height: 1.85rem;
        margin: 1.6rem auto .32rem;
    }
    h4 {
        line-height: .7rem;
        font-size: .46rem;
        font-weight: bold;
    }
    p {
        line-height: .7rem;
        font-size: .32rem;
        margin: .16rem 0;
    }
}
</style>