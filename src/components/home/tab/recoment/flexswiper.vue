<template>
    <div class="optimize-box">
        <div class="flex swiper">
            <a v-for="(item,index) in optimizs" :key="index" class="optimize-item flex-child-noshrink">
                <img :src="item.imagePath" class="lazy-img">
                <p>{{item.title}}</p>
                <p>{{item.sellingPoint}}</p>
                <p>{{item.price}}</p>
            </a>
        </div>
    </div>

</template>

<script>
    import axios from 'axios'

    export default {
        name: "flexswiper",
        data() {
            return {
                optimizs: []
            }
        },
        created() {
            axios({
                method: 'get',
                url: '/api/web/api/floors/specialEnjoy/v1'
            }).then(data => {

                this.optimizs = data.data.data.optimize;
            }).catch(err => {
                throw err;
            })
        }
    }
</script>

<style scoped>
    .flex {
        width: 100%;
        height: 221px;
        display: flex;
        flex-flow: nowrap row;
        overflow-x: scroll;
        overflow-y:hidden;
        padding: 10px;

    }

    .optimize-item {
        width: 140px;
        height: 202px;
        margin-right: 10px;
        padding: 10px;
        box-shadow: 0 0 10px #e1e1e1;
        border-radius: 3px;
        flex-shrink: 0;
    }

    .optimize-item:last-child img,.optimize-item:last-child p:nth-child(3) {
        display: none;
    }

    .optimize-item:last-child p:nth-child(2){
        text-align: center;
        line-height: 202px;
    }

    .optimize-item img {
        width: 120px;
        height: 120px;
        box-sizing: border-box;
    }

    .optimize-item p {
        line-height: 14px;
        margin-top: 5px;
    }

    .optimize-item > p:nth-child(2) {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .optimize-item > p:nth-child(4) {
        color: #f00;
    }
</style>