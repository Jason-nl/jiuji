/*
 * @Author: Jason 
 * @Date: 2019-04-09 10:30:06 
 * @Last Modified by: Jason
 * @Last Modified time: 2019-04-09 11:01:17
 */
<template>
  <div class="headline">
    <Banner :banners="banners"/>
    <InfoList :infolist="infolist"/>
  </div>
</template>

<script>
import Vuex from "vuex";
import Banner from "./headline/banner";
import InfoList from "./headline/infoList";
export default {
  name: "headline",
  components: { Banner, InfoList },
  computed: {
    ...Vuex.mapState({
      banners: state => state.Home.headBanner,
      infolist: state => state.Home.infoList
    })
  },
  created() {
    this.HandleHeadline();
  },
  methods: {
    ...Vuex.mapActions({
      HandleHeadline: "Home/HandleHeadline"
    })
  }
};
</script>

<style scoped>
.headline {
  width: 100%;
  height: 500px;
  overflow-y: scroll;
  overflow-x: hidden;
}
</style>
