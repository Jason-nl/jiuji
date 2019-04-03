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
            this.handleSidebar();
       },
        data() {
            return {
                // 左侧高亮元素的index
                mainActiveIndex: 0,
                // 被选中元素的id
                activeId: 1
            }
        },
        components:{
           List
        },
        computed:{
            ...Vuex.mapState({
                itemData:state=>state.Classify.sidebarData,
            })
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
    text-align: center;
}
.van-tree-select__nav{
    width: 25%;
}
.van-tree-select__nitem--active{
    color:red;
}
</style>
