<template>
  <div class="commodity" data-title="3c推荐">
    <ul class="pro_top">
      <li v-for="(item,index) in xinpin" :key="index">
        <img :src="item.imagePath">
      </li>
    </ul>
    <ul class="pro_midd">
      <li v-for="(item,index) in recom" :key="index">
        <img :src="item.imagePath">
      </li>
    </ul>
    <ul class="pro_bott">
      <li v-for="(item,index) in parts" :key="index">
        <img :src="item.imagePath">
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "commodity",
  created() {
    axios
      .get("/api/web/api/floors/v1?label=0&page=1&random=0")
      .then(data => {
        let xin = data.data.data.container.floor[16].content;
        let comp = data.data.data.container.floor[17].content;
        let part = data.data.data.container.floor[18].content;
        this.xinpin = xin;
        this.recom = comp;
        this.parts = part;
      })
      .catch(err => {
        throw err;
      });
  },
  data() {
    return {
      xinpin: [],
      recom: [],
      parts: []
    };
  }
};
</script>

<style scoped>
.pro_top,
.pro_midd {
  width: 100%;
  height: 119px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
}
.pro_top li {
  width: 50%;
  height: 100%;
}

.pro_midd li,
.pro_bott li {
  width: 50%;
  height: 100%;
}

.pro_bott {
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
}
.commodity img {
  width: 100%;
  height: 100%;
}
</style>