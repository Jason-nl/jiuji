import http from "@/utils/http"
//获取分类页列表数据
export const sidebarData = ()=>http("get","/api/web/api/products/category/v1");
//获取search-form页的热搜数据
export const hotSearch = ()=>http("get","/api/web/api/search/hotAndHistorySearch/v1?history=");
//获取search-form页的搜索框输入时显示的数据
export const searchShow = (val)=>http("get","/api/web/api/search/recommendSearch/v1?keyword="+val+"&count=10");
//获取search页商品列表的数据
export const SearchList = (valOne,valTwo)=>http("get","/api/web/api/products/v2?coll="+valOne+"&keyword="+valTwo+"&productId=0&page=1&inStock=0");
//获取手机热销排行榜的数据
export const phoneHOTData = ()=>http("get","/api/web/api/products/hotRank/v1?cid=2");




