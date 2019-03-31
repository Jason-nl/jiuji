<template>
    <div class="phone">
        <SeleTop :index="index"/>
        <Commodity/>
    </div>
</template>

<script>
    import SeleTop from "../../common/sectTop";
    import Commodity from '../../common/commodity'
    export default {
        name: "phone",
        data(){
          return {
              index:15
          }
        },
        components:{
            SeleTop,
            Commodity
        },

    }
</script>

<style scoped>

</style>