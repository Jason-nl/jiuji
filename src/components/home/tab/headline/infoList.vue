<template>
  <div class="infolist">
    <ul>
      <li v-for="(item,index) in infolist" :key="index" class="resInfo">
        <div class="info_l">
          <img :src="item.imagePath">
        </div>
        <div class="infores">
          <div class="info_title">{{item.title}}</div>
          <div class="author">
            <p>{{item.author}}</p>
            <p>{{item.pageView+'阅读'}}</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "infolist",
  props: {
    infolist: {
      type: Array,
      default: []
    }
  }
};
</script>

<style scoped lang="scss">
.infolist {
  width: 100%;
  .resInfo {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #efefef;
    // margin-bottom: 10px;
    .info_l {
      width: 80px;
      height: 60px;

      img {
        width: 100%;
        height: 100%;
      }
    }
    .infores {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-left: 10px;
      width: 250px;
      height: 60px;
      
      .author {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }
    }
  }
}
</style>
