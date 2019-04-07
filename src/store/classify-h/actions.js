import {sidebarData,searchShow} from "@/api/classifyData-h"
export default {
    //sidebar页数据的处理
      async handleSidebar({commit}){
          let arr=[];
            let data = await sidebarData();
            let len = data.data.length;
              for (var i=0; i<len;i++){
                  let obj={};
                  let title =  data.data[i].title;
                  let picture= data.data[i].picture;
                obj.text = title;
                obj.pic=picture;
                obj.children = [];
                for (let index in data.data[i].children){
                    obj.children.push(data.data[i].children[index]);
                }
                  arr.push(obj);
              }
          commit("sidebarMutations",arr)
      },
    //search-form页输入框输入时数据的处理
    async searchShow({commit},params){
          let  data = await searchShow(params);
          let arrData =data.data
        commit("searchShowData",arrData)
    },

}
