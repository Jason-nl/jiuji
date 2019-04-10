/*
 * @Author: Jason 
 * @Date: 2019-04-09 10:29:56 
 * @Last Modified by: Jason
 * @Last Modified time: 2019-04-09 10:47:00
 */
<template>
  <div class="headBaner" data-title="头条轮播">
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(item, index) in banners" :key="index">
        <img :src="item.imagePath">
        <div class="bantitle">{{item.title}}</div>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: "headBaner",
  props: {
    banners: {
      type: Array,
      default: []
    }
  }
};
</script>

<style scoped lang="scss">
.headBaner {
  width: 100%;
  height: 3.6rem;
  position: relative;
  .van-swipe {
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .bantitle {
    width: 100%;
    height: 0.8rem;
    line-height: 0.8rem;
    padding-left: 10px;
    color: #fff;
    background: rgba($color: #000000, $alpha: 0.8);
    position: absolute;
    top: 2.8rem;
  }
}
</style>
