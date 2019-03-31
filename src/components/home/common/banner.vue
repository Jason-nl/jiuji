<template>
    <div class="banner">
        <van-swipe :autoplay="3000">
            <van-swipe-item v-for="(item, index) in images" :key="index">
                <img :src="item.imagePath"/>
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "banner",
        created: function () {
            axios.get('/api/web/api/floors/v1?label=0&page=1&random=0').then(data => {
                let res = data.data.data.container.floor[0].content;
                this.images = res;
            }).catch((err) => {
                throw err;
            })
        },
        data() {
            return {
                images: []
            }
        }
    }
</script>

<style scoped>
    .banner {
        width: 100%;
        height: 4rem;
        padding: .2rem .4rem;
        box-sizing: border-box;
        background: linear-gradient(#e10f02, #e10f02 70%, #fff 0, #fff);
    }

    .van-swipe {
        width: 100%;
        height: 100%;
        border-radius: 5px;
    }
    .van-swipe img{
        width: 100%;
        height: 100%;
        border-radius: 5px;
    }
</style>
