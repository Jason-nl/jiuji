<template>
    <div class="commodity" data-title="3c推荐">
        <ul class="pro_top">
            <li v-for="(item,index) in phone_t" :key="index">
                <img :src="item.imagePath">
            </li>
        </ul>
        <ul class="pro_midd">
            <li v-for="(item,index) in phone_m" :key="index">
                <img :src="item.imagePath">
            </li>
        </ul>
        <ul class="pro_bott">
            <li v-for="(item,index) in phone_b" :key="index">
                <img :src="item.imagePath">
            </li>
        </ul>
    </div>
</template>

<script>
    import Vuex from "vuex";

    export default {
        name: "commodity",
        computed: {
            ...Vuex.mapState({
                phone_t: state => state.Home.phone_t,
                phone_m: state => state.Home.phone_m,
                phone_b: state => state.Home.phone_b,
            })
        }
    };
</script>

<style scoped>
    .pro_top,
    .pro_midd {
        width: 100%;
        height: 119px;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
    }

    .pro_top li {
        width: 50%;
        height: 100%;
    }

    .pro_midd li,
    .pro_bott li {
        width: 50%;
        height: 100%;
    }

    .pro_bott {
        width: 100%;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
    }

    .commodity img {
        width: 100%;
        height: 100%;
    }
</style>