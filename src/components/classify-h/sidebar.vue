<template>
    <div class="sidebar">
        <ul>
            <li @click="handle">test</li>
        </ul>
    </div>
</template>

<script>
    import Vuex from 'vuex'
    export default {
        data() {
            return {
            }
        },
        methods:{
            ...Vuex.mapActions({
                handle:"Classify/handle"
            })
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
