<template>
    <div class="headBox">
        <div class="content-box ly-flex-start">
            <img src="@/assets/img/industry/medicine/logo.png" alt="">
            <div class="content">
                <div class="ly-flex-start">
                    <img src="@/assets/img/industry/medicine/logo.png" alt="" style="">
                    <h1>漱玉平民大药房</h1>
                </div>
                <p>蜂鸟专送/38分钟送达</p>
            </div>
        </div>
        <div class="under-box">
            <img src="@/assets/img/industry/medicine/logo.png" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        name: "headBox"
    }
</script>

<style scoped lang="scss">
    .headBox {
        overflow: hidden;
        position: relative;
        color: #fff;
        background: rgba(7,17,27,.5);
        .content-box {
            position: relative;
            padding: .48rem .24rem .36rem .48rem;
            img {
                width: 1.28rem;
                height: 1.28rem;
                border-radius: .04rem;
            }
            .content {
                margin-left: 0.3rem;
                text-align: left;
                div {
                    margin: .04rem 0 .16rem;
                    img {
                        width: .6rem;
                        height: .36rem;
                    }
                    h1 {
                        margin-left: .18rem;
                        font-size: .32rem;
                        line-height: .36rem;
                        font-weight: 700;
                    }
                }
                p {
                    margin-bottom: .2rem;
                    line-height: .24rem;
                    font-size: .24rem;
                }
            }
        }
        .under-box {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            -webkit-filter: blur(10px);
            filter: blur(10px);
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
</style>