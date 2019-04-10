<template>
    <div class="sidebar">
        <van-tree-select
                :items="itemData"
                :main-active-index="mainActiveIndex"
                :active-id="activeId"
                @navclick="onNavClick"
                @itemclick="onItemClick"
        />
        <List :sidebarData="itemData" :index=" mainActiveIndex"/>
    </div>
</template>

<script>
    import List from "@/components/classify-h/listShow"
    import Vuex from 'vuex'
    export default {
       created(){
           if (window.sessionStorage.getItem("sidebarData")){
              this.itemData=JSON.parse(window.sessionStorage.getItem("sidebarData"))
           }else{
               this.handleSidebar();
           }
       },
        data() {
            return {
                itemData:this.$store.state.Classify.sidebarData,
                // 左侧高亮元素的index
                mainActiveIndex: 0,
                // 被选中元素的id
                activeId: 1
            }
        },
        components:{
           List
        },
        methods:{
            ...Vuex.mapActions({
                handleSidebar:"Classify/handleSidebar"
            }),
            onNavClick(index) {
                this.mainActiveIndex = index;
            },
            onItemClick(data) {
                this.activeId = data.id;
            }
        },

    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .sidebar{
        position: relative;
    }
.van-tree-select{
    height: 11rem !important;
}
.van-tree-select__nitem{
    line-height:1rem ;
    font-size: .24rem;
}
.van-tree-select__nav{
    width: 25%;
}
.van-tree-select__nitem--active{
    color:red;
}
</style>
