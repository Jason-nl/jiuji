import  {hotSearch,phoneHOTData} from "@/api/classifyData-h";
export default {
    //contract显示和隐藏的判断
    handleCon(state){
        if ( state.contract==false){
            state.contract=true;
        } else {
            state.contract=false;
        }
    },
    //分类页侧边数据
    sidebarMutations(state,params){
        state.sidebarData.push(...params);
        window.sessionStorage.setItem("sidebarData",JSON.stringify(state.sidebarData))
    },
    //search-form页的热搜数据
    async hotSearch(state){
        let data= await hotSearch();
        let params=data.data;
        state.hotData=params;
    },
    //search-form页的输入框返回的数据
    searchShowData(state,params){
        state.searchShowData=[];
        state.searchShowData.push(...params);
    },
    //Search页的list的商品列表数据
    SearchListData(state,params){
        state.SearchListData=[];
        state.SearchListData.push(...params);
    },
    //手机热销排行榜的数据
    async phoneHot(state){
        let data= await phoneHOTData();
        let params=data.data;
        state.phoneHOTData.push(params);
    },

}
