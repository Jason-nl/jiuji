<template>
  <div class="repair">
    <Banner :banners="banners"/>
    <Floor :floors="floors"/>
  </div>
</template>

<script>
import Vuex from "vuex";
import Floor from '../common/floor'
import Banner from '../common/banner'
export default {
  name: "repair",
  components:{
      Banner,
      Floor
  },
  created(){
      this.handleRepairData();
  },
  computed: {
    ...Vuex.mapState({
      banners: state => state.Home.repairBanner,
      floors: state => state.Home.repairFloor
    })
  },
  methods:{
      ...Vuex.mapActions({
          handleRepairData:"Home/handleRepairData"
      })
  }
};
</script>

<style scoped>
.repair {
  width: 100%;
  height: 100%;
}
</style>
