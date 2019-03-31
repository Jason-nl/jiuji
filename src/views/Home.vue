<template>
  <div class="home">
    <header class="header">
      <Search/>
      <Tab/>
    </header>
  </div>
</template>

<script>
import Search from "../components/home/search";
import Tab from "../components/home/tab";
export default {
  name: "home",
  components: {
    Search,
    Tab
  },
  created(){
    console.log(this);
  }
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
}
.header {
  width: 100%;
  height: 1.88rem;
  background: #e10f02
    url(https://img2.ch999img.com/m/static/assets/bg_M1.8cd016926540b05a490ed176c5d2977a.png)
    no-repeat bottom;
  background-size: cover;
}
</style>