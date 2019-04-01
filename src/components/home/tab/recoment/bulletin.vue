<template>
  <div class="bulletin" data-title="头条">
    <div class="floor-tops flex-align-centers flex flex-justify-between">
      <div class="icon_l">
        <img :src="icon_l">
      </div>
      <ul class="headline_r">
        <van-swipe :autoplay="3000" vertical class="vertical_t">
          <van-swipe-item
            v-for="(item, index) in headlinelist"
            :key="index"
            class="item_t"
          >
            <span class="headline_txt">{{item.title}}</span>
            <img :src="item.picture" class="headline_topic">
          </van-swipe-item>
        </van-swipe>

        <!-- <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item, index) in headlinelist" :key="index">
              <span class="headline_txt">{{item.title}}</span>
              <img :src="item.picture" class="headline_topic">
            </div>
          </div>
        </div>-->
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "bulletin",
  props:["headlinelist"],
  data() {
    return {
      icon_l:
        "https://img2.ch999img.com/m/static/assets/news.631f4fc3356569715f192b0173db71da.png",
    };
  }
};
</script>

<style scoped>
.bulletin {
  width: 100%;
}

.bulletin .flex-justify-between {
  height: 34px;
  margin: 0.4rem;
  background: #fde9e9;
  border-radius: 50px;
  overflow: hidden;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
}

.bulletin .icon_l img {
  width: 68px;
  margin: 0 12px;
}

.bulletin .headline_r {
  flex: 1;
  height: 34px;
}

.bulletin .headline_r .vertical_t {
  width: 100%;
  height: 34px;
}

.bulletin .headline_r .vertical_t .item_t {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Swiper 解决方案 */
/* .bulletin .headline_r .swiper-container {
  width: 100%;
  height: 100%;
}
.bulletin .headline_r .swiper-container .swiper-wrapper {
  width: 100%;
  height: 100%;
}
.bulletin .headline_r .swiper-container .swiper-slide {
  width: 100%;
  height: 34px;
  display: flex;
  justify-content: space-between;
  align-items: center;
} */

.bulletin .headline_r .headline_txt {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.bulletin .headline_r .headline_topic {
  height: 100%;
}
</style>