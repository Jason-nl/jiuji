<template>
    <div class="life">
        <SeleTop :index="index"/>

        <ul class="life-box">
            <li v-for="(item,index) in lifebox" :key="index">
                <img :src="item.imagePath">
            </li>
        </ul>
    </div>
</template>

<script>
    import SeleTop from "../../common/sectTop";
    import axios from 'axios';

    export default {
        name: "life",
        data() {
            return {
                index: 22,
                lifebox: []
            }
        },
        created() {
            axios({
                method: 'get',
                url: "/api/web/api/floors/v1?label=0&page=1&random=0"
            }).then(data => {
                let top_t = data.data.data.container.floor[23].content;
                let top_b = data.data.data.container.floor[24].content;
                this.lifebox = top_t.concat(top_b);
            }).catch(err => {
                throw err;
            })
        },
        components: {
            SeleTop
        }
    }
</script>

<style scoped>
    .life {
        width: 100%;
        height: 222px;
    }

    .life-box {
        width: 100%;
        height: 180px;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
    }

    .life-box li:nth-child(1), .life-box li:nth-child(2) {
        width: 25%;
        height: 120px;
    }

    .life-box li:nth-child(3) {
        width: 50%;
        height: 120px;
    }

    .life-box li:nth-child(4), .life-box li:nth-child(5) {
        width: 50%;
        height: 60px;
    }

    .life-box img {
        width: 100%;
        height: 100%;
    }
</style>