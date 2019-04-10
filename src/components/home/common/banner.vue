<template>
  <div class="banner" data-title="首页轮播">
    <van-swipe :autoplay="3000" class="swiper_banner">
      <van-swipe-item v-for="(item, index) in banners" :key="index" class="swiperItem">
        <img :src="item.imagePath">
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: "banner",
  props: ["banners"]
};
</script>

<style scoped>
.banner {
  width: 100%;
  height: 4rem;
  padding: 0.2rem 0.4rem;
  box-sizing: border-box;
  background: linear-gradient(#e10f02, #e10f02 70%, #fff 0, #fff);
}

.swiper_banner {
  width: 100%;
  height: 100%;
  border-radius: 5px;
}
.swiper_banner img {
  width: 100%;
  height: 100%;
  border-radius: 5px;
}
</style>
