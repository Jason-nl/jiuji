import {sidebarData} from "@/api/classifyData-h"
export default {
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
          console.log(arr)
           /*  console.log(arr[0].children[0][0]);
              console.log(arr[0].children[0][1]);
             console.log(arr[0].children[0][0].title);
             console.log(arr[0].children[0][0].children);*/
          commit("sidebarMutations",arr)
      },

}
