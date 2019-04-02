import http from "@/utils/http"
//获取分类页列表数据
export const sidebarData = ()=>http("get","/api/web/api/products/category/v1");
