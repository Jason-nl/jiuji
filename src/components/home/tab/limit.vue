/*
* @Author: Jason
* @Date: 2019-04-02 15:39:36
* @Last Modified by: Jason
* @Last Modified time: 2019-04-03 17:45:55
*/

<template>
    <div class="limit">
        <Banner :banners="banners"/>
        <Rush/>
        <Product :activeIndex="activeIndex"/>
    </div>
</template>

<script>
    import Banner from "../common/banner";
    import Rush from "./limit/rush";
    import Product from "./limit/limitpro";
    import Vuex from "vuex";

    export default {
        name: "limit",
        created() {
            this.handleLimitData();
        },
        components: {
            Banner,
            Rush,
            Product
        },
        computed: {
            ...Vuex.mapState({
                banners: state => state.Home.limitBanner,
                activeIndex: state => state.Home.activeIndex,
            })
        },
        methods: {
            ...Vuex.mapActions({
                handleLimitData: "Home/handleLimitData"
            })
        },
    };
</script>

<style lang="scss" scoped>
    .limit {
        width: 100%;
        height: 500px;
        overflow-y: scroll;
        overflow-x: hidden;
    }
</style>