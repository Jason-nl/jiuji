<template>
    <article class="limit_activity" data-title="限时抢购">
        <Gap/>
        <div class="activity limit">

            <div class="container_limit">
                <aside class="ac_l">
                    <div class="timer">
                        <div class="white">距结束</div>
                        <span class="rush-timer">{{hr}}:{{min}}:{{sec}}</span>
                    </div>
                </aside>
                <div class="rush-today-list">
                    <div class="flex flex-center full-height" ref="warpper">
                        <a v-for="(item,index) in rushlist" :key="index" class="rush-today-item overflow-hide">
                            <div class="flex-center flex-col flex-justify-between">
                                <p>{{item.name}}</p>
                                <p>{{item.price}}</p>
                                <p>{{item.description}}</p>
                                <img :src="item.imagePath">
                            </div>
                        </a>
                    </div>
                </div>
            </div>


        </div>
    </article>
</template>

<script>
    import axios from 'axios'
    import Gap from '../../common/gap'
    export default {
        name: "limit_activity",
        components:{
            Gap
        },
        created() {
            axios.get('/api/web/api/floors/specialEnjoy/v1').then(data => {
                let res = data.data.data.rushToday;
                // console.log(res);
                this.rushlist = res;
            }).catch(err => {
                // console.log(err);
            })
        },
        data() {
            return {
                hr: 0, min: 0, sec: 0,
                rushlist: [],
            }
        },
        mounted: function () {
            this.countdown();
        },
        methods: {
            countdown: function () {
                let d = new Date();
                d.setTime(d.getTime() + 24 * 60 * 60 * 1000);
                let s = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
                let date = s.toLocaleLowerCase();
                // console.log(date);
                const end = Date.parse(date);//new Date('2019-03-28')
                const now = Date.parse(new Date())
                const msec = end - now
                // let day = parseInt(msec / 1000 / 60 / 60 / 24)
                let hr = parseInt(msec / 1000 / 60 / 60 % 24)
                let min = parseInt(msec / 1000 / 60 % 60)
                let sec = parseInt(msec / 1000 % 60)

                // console.log(typeof (hr));
                // this.day = day
                this.hr = hr > 9 ? hr : '0' + hr
                this.min = min > 9 ? min : '0' + min
                this.sec = sec > 9 ? sec : '0' + sec
                // console.log(this.hr,this.min,this.sec);
                const that = this
                setTimeout(function () {
                    that.countdown()
                }, 1000)
            }
        }
    }
</script>

<style scoped>
    .limit_activity {
        width: 100%;
        height: 165px;
        background: #fff;
    }

    .activity .container_limit {
        box-shadow: 0 0 10px #e1e1e1;
        border-radius: 5px;
        margin: 15px;
        display: flex;
        flex-flow: nowrap row;
        justify-content: space-between;
        align-items: center;
    }

    .activity .container_limit .ac_l {
        background: url(https://img2.ch999img.com/m/static/assets/rush.82f4bd14fffee2f211439b7a1767024a.png) no-repeat;
        background-size: contain;
        width: 92px;
        height: 140px;
        position: relative;

    }

    .activity .ac_l .timer {
        position: absolute;
        top: 75px;
        left: 16px;
        font-size: 12px;
        width: 60px;
        text-align: center;
        color: #fff;
    }

    .activity .ac_l .timer .rush-timer {
        color: #ff0000;
    }

    .pro_ic {
        width: 100%;
        height: 10px;
        background: #f5f5f5;
    }

    .container_limit .rush-today-list {
        width: 238px;
        overflow-x: auto;
        overflow-y: hidden;
        background: #fff;
        padding: 0 5px;
        border-radius: 0 5px 5px 0;
        line-height: 20px;
        height: 140px;
    }

    .container_limit .rush-today-list .full-height {
        width: 2800px; /*js动态设置宽度*/
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-flow: row nowrap;
    }

    .container_limit .rush-today-list .full-height .rush-today-item {
        width: 100px;
        padding: 4px 5px;
        overflow: hidden;
    }

    .container_limit .rush-today-list .full-height .rush-today-item img {
        width: 70px;
        height: 70px;
        margin: 0 auto;
    }

    .container_limit .rush-today-list .full-height .rush-today-item p:nth-child(1) {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 100%;
    }

    .container_limit .rush-today-list .full-height .rush-today-item p:nth-child(2){
        color: #ff0000;
    }

    .container_limit .rush-today-list .full-height .rush-today-item p:nth-child(3) {
        font-size: 12px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .white{
        margin-bottom: 8px;
    }
</style>