<template>
  <div class="sectop">
    <img :src="imgpath" style="width: 100%;height: 100%">
  </div>
</template>

<script>
export default {
  props: ["index"],
  data() {
    return {
      imgpath: ""
    };
  },
  created() {
    let index = this._props.index;
    this.handleSwitch(index);
  },

  methods: {
    handleSwitch(index) {
      switch (index) {
        case 13:
          this.imgpath = localStorage.getItem("optimiz_img");
          break;
        case 15:
          this.imgpath = localStorage.getItem("boutique_img");
          break;
        case 19:
          this.imgpath = localStorage.getItem("word_img");
          break;
        case 22:
          this.imgpath = localStorage.getItem("life_img");
          break;
        case 25:
          this.imgpath = localStorage.getItem("goods_img");
          break;
      }
    }
  }
};
</script>

<style scoped>
.sectop {
  width: 100%;
  height: 42px;
}
</style>
