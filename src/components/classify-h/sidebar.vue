<template>
    <div class="sidebar">
        <ul>
            <li @click="hanf">yijain</li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        methods:{
            hanf(){
                this.$store.dispatch("Classify/handle")
            }

        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
