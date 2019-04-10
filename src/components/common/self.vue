<template>
    <countDown :startTime="( new Date() ).getTime()+Number(`-14811`)*1000" :endTime="( new Date() ).getTime()+Number(`-71589`)*1000" :serverDate="new Date()"
               @callbackNOTStart="callbackNOTStart" @callbackStart="callbackStart" @callback="callback">
    </countDown>
</template>

<script>
    import countDown from './countDown';
    export default {
        //item.startDate
        name: "self",
        components:{
            countDown
        },
        methods: {

            callbackNOTStart() {
                this.maskerShow = true
                this.maskerText = '未开始'
            },
            callbackStart() {
                this.maskerShow = false
                // this._sellOut()
            },
            callback() {
                this.maskerShow = true
                this.maskerText = '已结束'
            },
            // _sellOut() {
            //     // 抢光 true
            //     if (this.item.gStock === 0) {
            //         this.maskerShow = true
            //         this.maskerText = '已抢完'
            //     }
            // },
            // 处理后台传来的时间格式
            _timeFormat(timeStr) {
                return new Date(timeStr);
            },
        }
    }
</script>

<style scoped>

</style>




