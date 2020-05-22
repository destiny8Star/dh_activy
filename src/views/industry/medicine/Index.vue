<template>
    <div>
        <headBox/>
        <footBox/>
    </div>
</template>

<script>
    import headBox from '@/components/industry/medicine/headBox'
    import footBox from '@/components/industry/medicine/footBox'
    export default {
        name: "medicine",
        components:{
            headBox,
            footBox
        },
        data(){
            return {

            }
        }
    }
</script>

<style scoped>

</style>