<template>
    <div class="work">
        <SeleTop :index="index"/>

        <ul class="work-box">
            <li v-for="(item,index) in workbox" :key="index">
                <img :src="item.imagePath">
            </li>
        </ul>
    </div>
</template>

<script>
    import SeleTop from "../../common/sectTop";
    import Vuex from 'vuex';

    export default {
        name: "word",
        data() {
            return {
                index: 19,
            }
        },
        computed: {
            ...Vuex.mapState({
                workbox: state => state.Home.workbox
            })
        },
        components: {
            SeleTop
        }
    }
</script>

<style scoped>
    .work {
        width: 100%;
        height: 282px;
    }

    .work-box li {
        width: 50%;
        height: 100%;
    }

    .work-box {
        width: 100%;
        height: 120px;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
    }

    .work-box img {
        width: 100%;
        height: 100%;
    }
</style>