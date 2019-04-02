import http from "@/utils/http"

export const classify = params => http("get",
    "/api/web/api/products/category/v1",
    params);


console.log(http)
