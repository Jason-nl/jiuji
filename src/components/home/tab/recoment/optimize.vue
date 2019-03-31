<template>
    <div class="optimize" data-title="为你优选">
        <Gap/>
        <SeleTop :index="index"/>
        <FlexSwiper/>
        <Gap/>
    </div>
</template>

<script>
    import Gap from "../../common/gap";
    import SeleTop from "../../common/sectTop";
    import FlexSwiper from './flexswiper'

    export default {
        name: "optimize",
        data() {
            return {
                index: 13
            };
        },
        components: {
            Gap,
            SeleTop,
            FlexSwiper
        }
    };
</script>

<style scoped>
</style>
