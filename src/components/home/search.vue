<template>
  <div class="search">
    <van-search
      label="昌平区"	
      v-model="value"
      placeholder="iPhone XS Max"
      background=""
      shape="round"
      @search="onSearch"
    >
    </van-search>
  </div>
</template>

<script>
export default {
  name: "search",
  data() {
    return {
      value: "",
      city:'昌平区'
    };
  },
  methods: {
    onSearch() {
      console.log();
    }
  }
};
</script>

<style scoped lang="scss">
.search {
  width: 100%;
  height: 1.08rem;
}
.search .van-search .van-search__content--round{
    background: rgba($color: #000000, $alpha: .4)
}
.van-search__label,.van-cell{
    color: #fff;
}

</style>
