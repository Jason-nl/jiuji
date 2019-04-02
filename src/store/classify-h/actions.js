import {sidebarData} from "@/api/classifyData-h"
export default {
      async handle(){
            let data = await sidebarData();
          console.log(data)

      }
}
