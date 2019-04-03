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
    }

}