/*
* @Author: Jason
* @Date: 2019-04-02 15:38:50
 * @Last Modified by: Jason
 * @Last Modified time: 2019-04-09 16:31:07
*/

<template>
  <div class="limitpro">
    <div id="timeTip" class="text-center">
      <!---->
      <!---->
      <p class="rush-timer">
        <Self :start="start" :end="end"/>
      </p>
    </div>
    <ul class="product">
      <li v-for="(item,index) in products" :key="index" data-title="抢购商品">
        <div class="proic" data-title="商品图片">
          <img :src="item.imagePath">
        </div>
        <div class="prodes" data-title="商品信息">
          <div class="proInfo">
            <p>{{item.name}}</p>
            <p>{{item.description}}</p>
          </div>
          <div class="proBtn">
            <h2>{{item.price}}</h2>
            <s>{{item.originalPrice}}</s>
            <p>{{endtime == '距结束'? item.surplusCount : botomdes}}</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import Self from "./self";
export default {
  name: "limitpro",
  props: ["activeIndex"],
  components: { Self },
  data() {
    return {
      products: [],
      endtime: "",
      botomdes: "",
      start: "",
      end: ""
    };
  },
  created() {
    let index = this.$store.state.Home.activeIndex;
    // this.$store.state.Home.limitProduct
    
    this.products = window.sessionStorage.getItem('spike')[index].list;
    this.starttime = this.products[1].startTime;
    let endTime = this.products[1].endTime;

    this.start = this.starttime;
    this.end = endTime;
    console.log(this.start, this.end);

    if (this.starttime < 0 && endTime > 0) {
      this.endtime = "距结束";
    } else if (this.starttime > 0 && endTime > 0) {
      this.endtime = "距开始";
    }
  },
  watch: {
    activeIndex(newVal) {
      this.handlePro(newVal);
    },
    endtime(newVal) {
      switch (newVal) {
        case "本场已结束":
          this.botomdes = "本商品抢购已结束";
          console.log(this.starttime);
          break;
        case "距开始":
          this.botomdes = "⏲10:00准时开抢️";
          break;
      }
    }
  },
  methods: {
    async handlePro(index) {
      let response = this.$store.state.Home.limitProduct;
      let data = response[index].list;
      this.products = data;
      this.starttime = this.products[1].startTime;
      let endTime = this.products[1].endTime;
      console.log(this.starttime, endTime);
      this.start = this.starttime;
      this.end = endTime;
      console.log(this.start, this.end);

      if (this.starttime < 0 && endTime < 0) {
        this.endtime = "本场已结束";
      } else if (this.starttime > 0 && endTime > 0) {
        this.endtime = "距开始";
      } else if (this.starttime < 0 && endTime > 0) {
        this.endtime = "距结束";
      }
    },
    callbackNOTStart() {
      this.maskerShow = true;
      this.maskerText = "未开始";
    },
    callbackStart() {
      this.maskerShow = false;
      // this._sellOut()
    },
    callback() {
      this.maskerShow = true;
      this.maskerText = "已结束";
    },
    // 处理后台传来的时间格式
    _timeFormat(timeStr) {
      return new Date(timeStr);
    }
  }
};
</script>

<style scoped lang="scss">
.limitpro {
  #timeTip {
    border-bottom: 2px dotted #f21c1c;
    margin: 20px 15px;
    position: relative;
    height: 7px;

    p {
      width: 200px;
      background: #fff;
      position: absolute;
      left: 50%;
      margin-left: -100px;
      color: #f21c1c;
      text-align: center;
    }
  }

  .product li {
    padding: 10px;
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #efefef;

    .proic {
      width: 90px;
      height: 90px;
      margin-right: 10px;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .prodes {
      flex: 1;
    }
  }
}
</style>

