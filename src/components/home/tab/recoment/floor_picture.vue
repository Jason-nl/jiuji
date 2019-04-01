<template>
    <div class="floor_picture">
        <a href="topic_l">
            <img :src="topic_l">
        </a>
        <a href="topic_r">
            <img :src="topic_r">
        </a>
    </div>
</template>

<script>
    import Vuex from 'vuex'

    export default {
        name: "floor_picture",
        computed: {
            ...Vuex.mapState({
                topic_l: state => state.Home.topic_l,
                topic_r: state => state.Home.topic_r
            })
        }
    };
</script>

<style scoped>
    .floor_picture {
        width: 100%;
        height: 60px;
        display: flex;
        flex-flow: row nowrap;
    }

    .floor_picture a {
        width: 50%;
        height: 100%;
    }

    .floor_picture a img {
        width: 100%;
        height: 100%;
    }
</style>

