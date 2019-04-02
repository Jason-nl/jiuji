<template>
    <div class="nav">
                <router-link  v-for="(item,index) in navs"
                              :to="item.path"
                              :key="index"
                              tag="li"
                >
                    <span><img :src="item.normal" alt=""></span>
                    <span>{{item.title}}</span>
                </router-link>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                navs:[
                {
                   path: "/home",
                    title: "首页",
                    normal: require("@/common/icon/home.png"),
                },
                {
                    path: "/category",
                    title: "分类",
                    normal: require("@/common/icon/category.png"),
                },
                {
                    path: "/cart",
                    title: "购物车",
                    normal: require("@/common/icon/cart.png"),
                },
                {
                    path: "/member",
                    title: "我的",
                    normal: require("@/common/icon/mine.png"),
                }
                ]
            }
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
        .nav{
            width: 100%;
            display: flex;
            justify-content: space-around;
            padding: .2rem 0;
            background: orangered;

        }
        .nav span{
            display: block;
            color:gray;
            margin-top:.1rem;
            img{
                width:.5rem;
            }
        }
</style>
