<template>
    <div class="category">
        <Search/>
        <transition name="movie">
            <Contract v-show="contract"/>
        </transition>
        <Sidebar/>
    </div>
</template>

<script>
    import Search from "@/components/common/search-h"
    import Contract from "@/components/classify-h/contract"
    import Sidebar from "@/components/classify-h/sidebar"
    import Vuex from "vuex"
    export default {
        name: "Category",
        components:{
            Search,
            Contract,
            Sidebar,
        },
        computed:{
            ...Vuex.mapState({
                contract:state=>state.Classify.contract
            })
        },
    }
</script>

<style scoped>
    .movie-enter-active,.movie-leave-active{
        transition: all 2s;
    }
    .movie-enter,.movie-leave-to{
        padding: 0;
        opacity: 0;
    }
</style>