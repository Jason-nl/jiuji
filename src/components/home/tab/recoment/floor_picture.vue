<template>
  <div class="floor_picture">
    <a href="topic_l">
      <img :src="item_l">
    </a>
    <a href="topic_r">
      <img :src="item_r">
    </a>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "floor_picture",
  data() {
    return {
      item_l: "",
      item_r: ""
    };
  },
  created() {
    axios({
      method: "get",
      url: "/api/web/api/floors/v1?label=0&page=1&random=0"
    })
      .then(data => {
          let topicture = data.data.data.container.floor[12].content;
          this.item_l = topicture[0].imagePath;
          this.item_r =  topicture[1].imagePath;
      })
      .catch(err => {
        throw err;
      });
  }
};
</script>

<style scoped>
.floor_picture {
  width: 100%;
  height: 60px;
  display: flex;
  flex-flow: row nowrap;
}
.floor_picture a {
  width: 50%;
  height: 100%;
}
.floor_picture a img {
  width: 100%;
  height: 100%;
}
</style>

