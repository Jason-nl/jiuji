<template>
  <countDown
    :startTime="( new Date() ).getTime()+Number(start)*1000"
    :endTime="( new Date() ).getTime()+Number(end)*1000"
    :serverDate="new Date()"
    
  ></countDown>
</template>

<script>
import countDown from "@/components/common/countDown";
export default {
  name: "self",
  // data() {
  //   return {
  //     startTime: "",
  //     endTime: ""
  //   };
  // },
  props: ["start","end"],
  created(){
    console.log(this);
  },
  // watch: {
  //   start(newVal) {
  //     this.startTime = newVal;
  //     console.log(this.startTime);
  //   },
  //   end(newVal) {
  //     this.endTime = newVal;
  //     console.log(this.endTime);
  //   }
  // },
  components: {
    countDown
  },
  updated(){
    console.log(this);
  },
  methods: {
    // callbackNOTStart() {
    //   this.maskerShow = true;
    //   this.maskerText = "未开始";
    // },
    // callbackStart() {
    //   this.maskerShow = false;
    //   // this._sellOut()
    // },
    // callback() {
    //   this.maskerShow = true;
    //   this.maskerText = "已结束";
    // },
    // _sellOut() {
    //     // 抢光 true
    //     if (this.item.gStock === 0) {
    //         this.maskerShow = true
    //         this.maskerText = '已抢完'
    //     }
    // },
    // 处理后台传来的时间格式
    // _timeFormat(timeStr) {
    //   return new Date(timeStr);
    // }
  }
};
</script>

<style scoped>
</style>




