<template>
    <div class="member">
        <h2>我的</h2>
        <Self/>
    </div>
</template>

<script>
    import Self from '../components/common/self.vue'
    export default {
        name: "member",
        components:{
            Self
        }
    }
</script>

<style scoped>

</style>