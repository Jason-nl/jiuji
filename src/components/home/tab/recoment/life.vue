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
    import Vuex from 'vuex';

    export default {
        name: "life",
        data() {
            return {
                index: 22
            }
        },
        computed: {
            ...Vuex.mapState({
                lifebox: state => state.Home.lifebox
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