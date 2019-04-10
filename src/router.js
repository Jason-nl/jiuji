import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: "/home",
            name: "home",
            component: () => import("./views/Home.vue"),
            meta:{
                flag:true
            }
        },
        {
            path: "/category",
            name: "category",
            component: () => import("./views/Category.vue"),
            meta:{
                flag:true
            }
        },
        {
            path: "/message",
            name: "message",
            component: () => import("./views/Message.vue"),
            meta:{
                flag:false
            }
        },
        {
            path: "/cart",
            name: "cart",
            component: () => import("./views/Cart.vue"),
            meta:{
                flag:true
            }
        },
        {
            path: "/member",
            name: "member",
            component: () => import("./views/Member.vue"),
            meta:{
                flag:true
            }
        },
        {
            path: "/search-form",
            name: "search-form",
            component: () => import("./views/search-form-h.vue"),
            meta:{
                flag:false
            }

        },
        {
            path: "/search/:shopName",
            name: "search",
            component: () => import("./views/Search.vue"),
            meta:{
                flag:false
            }

        },
        {
            path: "/product",
            name: "product",
            component: () => import("./views/product-h.vue"),
            meta:{
                flag:false
            }

        },
    ]
});

