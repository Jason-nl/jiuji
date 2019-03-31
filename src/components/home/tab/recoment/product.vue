<template>
  <div class="product" data-title="新品推荐">
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
    <Gap/>
  </div>
</template>

<script>
import axios from "axios";
import Gap from '../../common/gap'
export default {
  name: "product",
  components:{
    Gap
  },
  created() {
    axios
      .get("/api/web/api/floors/v1?label=0&page=1&random=0")
      .then(data => {
        let xin = data.data.data.container.floor[8].content;
        let comp = data.data.data.container.floor[9].content;
        let part = data.data.data.container.floor[10].content;
        let bot = data.data.data.container.floor[11].content;
        this.xinpin = xin;
        this.recom = comp;
        this.parts = part.concat(bot);
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
  height: 100%;
}
.pro_top li:nth-child(1) {
  width: 50%;
}
.pro_top li:nth-child(2),
.pro_top li:nth-child(3) {
  width: 25%;
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
.product img {
  width: 100%;
  height: 100%;
}
</style>