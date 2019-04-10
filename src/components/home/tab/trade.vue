<template>
  <div class="trade">
    <Banner :banners="banners"/>
    <Floor :floors="floors"/>
  </div>
</template>

<script>
import Vuex from "vuex";
import Floor from '../common/floor'
import Banner from '../common/banner'
export default {
  name: "trade",
  created(){
      this.handleTradeData();
  },
  components:{
      Banner,
      Floor
  },
  computed: {
    ...Vuex.mapState({
      banners: state => state.Home.tradeBanner,
      floors: state => state.Home.tradeFloor
    })
  },
  methods:{
      ...Vuex.mapActions({
          handleTradeData:"Home/handleTradeData"
      })
  }
};
</script>

<style scoped>
.trade {
  width: 100%;
  height: 100%;
}
</style>

