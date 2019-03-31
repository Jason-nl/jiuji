<template>
  <div id="app">
    <router-view/>
    <Tabbar v-if="this.$route.meta.flag"/>
  </div>
</template>
<script>
  import Tabbar from './views/Tabbar'

  export default {
    name: 'app',
    components: {
      Tabbar
    }
  }
</script>
<style lang="scss">
  #app {
    width: 100%;
    height: 100%;
  }
</style>
