<template>
    <p class="count-down">
        {{content}}
    </p>
</template>
<script>
    export default {
        components: {},
        props: {
            startTime: {
                type: String,
                default: ''
            },
            endTime: {
                type: String,
                default: ''
            },
            serverDate: {
                type: String,
                default: ''
            },
            endText: {
                type: String,
                default: '本场已结束'
            }
        },
        mounted() {
            this.$nextTick(() => {
                // this.countdownStart(this.startTime)
                this.t1 = new Date(this.startTime).getTime() - new Date(this.serverDate).getTime()
                this.t2 = new Date(this.endTime).getTime() - new Date(this.serverDate).getTime()
                this.countdown1()
            })
        },
        computed: {},
        watch: {},
        data() {
            return {
                content: '',
                t1: 0,
                t2: 0
            }
        },
        methods: {
            countdown1(timestamp) {
                let self = this;
                let timer1 = setInterval(() => {
                    this.t1 = this.t1 - 1000;
                    if (this.t1 > 0) {
                        self.content = '距开始：' + self._timeFormat1(this.t1);
                        self.$emit('callbackNOTStart')
                    } else {
                        clearInterval(timer1);
                        self.countdowm2(self.endTime)
                        self.$emit('callbackStart')
                    }
                }, 1000);
            },
            countdowm2(timestamp) {
                let self = this;
                let timer2 = setInterval(() => {
                    if (this.t2 > 0) {
                        this.t2 = this.t2 - 1000;
                        self.content = '距结束：' + self._timeFormat2(this.t2);
                    } else {
                        clearInterval(timer2);
                        self.content = self.endText;
                        self.$emit('callback')
                    }
                }, 1000);
            },
            _timeFormat1(t) {
                let day = Math.floor(t / 86400000);
                let hour = Math.floor((t / 3600000) % 24);
                let min = Math.floor((t / 60000) % 60);
                let sec = Math.floor((t / 1000) % 60);
                hour = hour < 10 ? '0' + hour : hour;
                min = min < 10 ? '0' + min : min;
                sec = sec < 10 ? '0' + sec : sec;
                let format = '';
                if (day > 0) {
                    format = `${day}天${hour}时${min}分${sec}秒`;
                }
                if (day <= 0 && hour > 0) {
                    format = `${hour}时${min}分${sec}秒`;
                }
                if (day <= 0 && hour <= 0) {
                    format = `${min}分${sec}秒`;
                }
                return format
            },
            _timeFormat2(t) {
                let day = Math.floor(t / 86400000);
                let hour = Math.floor((t / 3600000) % 24);
                let min = Math.floor((t / 60000) % 60);
                let sec = Math.floor((t / 1000) % 60);
                hour = hour < 10 ? '0' + hour : hour;
                min = min < 10 ? '0' + min : min;
                sec = sec < 10 ? '0' + sec : sec;
                let format = '';
                if (day > 0) {
                    format = `${day}天${hour}时${min}分${sec}秒`;
                }
                if (day <= 0 && hour > 0) {
                    format = `${hour}时${min}分${sec}秒`;
                }
                if (day <= 0 && hour <= 0) {
                    format = `${min}分${sec}秒`;
                }
                return format
            },
            countdownStart(timestamp) {
                let self = this;
                let timer1 = setInterval(() => {
                    let nowTime1 = new Date();
                    let startTime1 = new Date(timestamp);
                    let t1 = startTime1.getTime() - nowTime1.getTime();
                    if (t1 > 0) {
                        self.content = '距开始：' + self._time(t1);
                        self.$emit('callbackNOTStart')
                    } else {
                        clearInterval(timer1);
                        self.countdowm(self.endTime)
                        self.$emit('callbackStart')
                    }
                }, 1000);
            },
            countdowm(timestamp) {
                let self = this;
                let timer =
                    setInterval(() => {
                        let nowTime = new Date();
                        let endTime = new Date(timestamp);
                        let t = endTime.getTime() - nowTime.getTime();
                        if (t > 0) {
                            self.content = '距结束：' + self._time(t);
                        } else {
                            clearInterval(timer);
                            self.content = self.endText;
                            self.$emit('callback')
                        }
                    }, 1000);
            },
            _time(t) {
                let day = Math.floor(t / 86400000);
                let hour = Math.floor((t / 3600000) % 24);
                let min = Math.floor((t / 60000) % 60);
                let sec = Math.floor((t / 1000) % 60);
                hour = hour < 10 ? '0' + hour : hour;
                min = min < 10 ? '0' + min : min;
                sec = sec < 10 ? '0' + sec : sec;
                let format = '';
                if (day > 0) {
                    format = `${day}天${hour}时${min}分${sec}秒`;
                }
                if (day <= 0 && hour > 0) {
                    format = `${hour}时${min}分${sec}秒`;
                }
                if (day <= 0 && hour <= 0) {
                    format = `${min}分${sec}秒`;
                }
                return format
            }
        }
    }

</script>
<style lang="scss">
    // .count-down {
    //     height: 1.3rem;
    // }

</style>