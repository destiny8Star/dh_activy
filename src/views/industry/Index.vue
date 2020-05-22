<template>
    <div class="industryIndex">
        <img src="@/assets/img/industry/bg.png" alt="">
        <div class="btnBox ly-flex-center">
            <div class="item" v-for="(ele,i) in btnList" :key="i" @click="jumpPage(ele)">{{ele.name}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Index",
        data(){
            return {
                btnList: [
                    {
                        id: 1,
                        name: '医院',
                        link: '/industry/hospital'
                    },
                    {
                        id: 2,
                        name: '加油站',
                        link: '/gas'
                    },
                    {
                        id: 3,
                        name: '药店',
                        link: 'https://ssl-h5.his.pay.dianjishenghuo.cn/#/goods'
                    },
                    {
                        id: 4,
                        name: '票务',
                        link: '/industry/paradiseTicketing'
                    }
                ]
            }
        },
        methods:{
            jumpPage(data){
                console.log(data);
                if(data.name=='药店'){
                    window.location.href = data.link;
                }else {
                    this.$router.push({path:data.link,query:{}})
                }
            }
        }
    }
</script>

<style scoped lang="scss">
.industryIndex {
    min-height: 100vh;
    img {
        width: 100%;
    }
    .btnBox {
        flex-wrap: wrap;
        justify-content: flex-start;
        padding: .2rem .3rem;
        .item {
            min-width: 1.2rem;
            line-height: .6rem;
            background: rgba(16,142,233,1);
            border-radius: .1rem;
            font-size: .28rem;
            color: #fff;
            padding: 0 .16rem;
            margin: .2rem .3rem;
        }
    }
}
</style>