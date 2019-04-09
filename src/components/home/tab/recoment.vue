<template>
    <div class="recomend">
        <Banner :banners="banners"/>
        <Floor :floors="floors"/>
        <LimitActivity :rushlist="rushlist"/>
        <Bulletin :headlinelist="headlinelist"/>
        <Product/>
        <Flootopic/>
        <Optimize/>
        <Phone/>
        <Work/>
        <Life/>
        <Gap/>
        <GoodsPhone/>
    </div>
</template>

<script>
    import Banner from "../common/banner";
    import Floor from "../common/floor";
    import LimitActivity from "./recoment/limit_activity";
    import Bulletin from "./recoment/bulletin";
    import Product from "./recoment/product";
    import Flootopic from "./recoment/floor_picture";
    import Optimize from './recoment/optimize';
    import Phone from './recoment/phone';
    import Work from './recoment/work';
    import Life from './recoment/life';
    import Gap from '../common/gap';
    import GoodsPhone from '../common/goods';
    import Vuex from 'vuex';

    export default {
        name: "recomend",
        data() {
            return {};
        },
        components: {
            Banner,
            Floor,
            LimitActivity,
            Bulletin,
            Product,
            Flootopic,
            Optimize,
            Phone,
            Work,
            Life,
            Gap,
            GoodsPhone
        },
        computed: {
            ...Vuex.mapState({
                banners: state => state.Home.banners,
                floors: state => state.Home.floors,
                rushlist: state => state.Home.rushlist,
                headlinelist: state => state.Home.headlinelist,
            })
        },
        created() {
            this.handleHomeData();
        },
        methods: {
            ...Vuex.mapActions({
                handleHomeData: "Home/handleHomeData"
            })
        }
    };
</script>

<style scoped>
    .recomend {
        width: 100%;
        height: 500px;
        overflow-y: scroll;
        -webkit-overflow-scrolling: touch;
    }
</style>
