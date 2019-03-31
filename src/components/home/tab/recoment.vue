<template>
    <div class="recomend">
        <!--推荐页的轮播模块---公共的组件--->
        <Banner/>
        <Floor/>
        <LimitActivity/>
        <Bulletin/>
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
