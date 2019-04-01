<template>
    <div class="product" data-title="新品推荐">
        <ul class="pro_top">
            <li v-for="(item,index) in newPro" :key="index">
                <img :src="item.imagePath">
            </li>
        </ul>
        <ul class="pro_midd">
            <li v-for="(item,index) in recomPro" :key="index">
                <img :src="item.imagePath">
            </li>
        </ul>
        <ul class="pro_bott">
            <li v-for="(item,index) in partsPro" :key="index">
                <img :src="item.imagePath">
            </li>
        </ul>
        <Gap/>
    </div>
</template>

<script>
    import Gap from '../../common/gap'
    import Vuex from 'vuex'
    export default {
        name: "product",
        components: {
            Gap
        },
        computed:{
            ...Vuex.mapState({
                newPro: state => state.Home.newPro,
                recomPro: state => state.Home.recomPro,
                partsPro: state => state.Home.partsPro,
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
        height: 100%;
    }

    .pro_top li:nth-child(1) {
        width: 50%;
    }

    .pro_top li:nth-child(2),
    .pro_top li:nth-child(3) {
        width: 25%;
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

    .product img {
        width: 100%;
        height: 100%;
    }
</style>