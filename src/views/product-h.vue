<template>
    <div class="product">
        <div class="header">
            <van-nav-bar left-arrow fixed
                @click-left="handleBack()"
                         @click-right="handleShow()"
                         ref="target"
            >
                <van-icon  slot="title" ><a href="#shop"
                >商品</a></van-icon>
                <van-icon  slot="title" ><a href="#judge">评论</a></van-icon>
                <van-icon  slot="title" ><a href="#detail">详情</a></van-icon>
                <van-icon name="descending" slot="right" />
            </van-nav-bar>
            <transition name="movie" >
                <Contract v-show="flag" id="CON"/>
            </transition>
        </div>
        <div class="main">
            <div id="shop">
                <div class="swipe">
                    <van-swipe :autoplay="3000">
                        <van-swipe-item v-for="(image, index) in images" :key="index">
                            <img v-lazy="image" />
                        </van-swipe-item>
                    </van-swipe>
                </div>

            </div>
            <div id="judge">
                <van-notice-bar mode="link">
                    1.商品的质量，主要功能，与其他商品比较有何特别之处。  2.商品的价格，如是否合理。  3.售后服务有哪些？等等…………
                </van-notice-bar>
            </div>
            <div id="detail">
                <van-tabs v-model="active">
                    <van-tab title="图文详情">内容 1</van-tab>
                    <van-tab title="售后体验">内容 2</van-tab>
                    <van-tab title="详细参数">内容 3</van-tab>
                    <van-tab title="联系反馈">内容 4</van-tab>
                </van-tabs>
            </div>
        </div>
        <div class="footer">
            <van-goods-action>
                <van-goods-action-mini-btn
                        icon="chat-o"
                        text="客服"
                />
                <van-goods-action-mini-btn
                        info="5"
                        icon="cart-o"
                        text="购物车"
                />
                <van-goods-action-mini-btn
                        icon="shop-o"
                        text="店铺"
                />
                <van-goods-action-big-btn text="加入购物车" />
                <van-goods-action-big-btn
                        primary
                        text="立即购买"
                />
            </van-goods-action>
        </div>
    </div>
</template>

<script>
    import Contract from "@/components/classify-h/contract"
    export default {
        data() {
            return {
                flag:false,
                active:2,
                images: [
                    'https://img2.ch999img.com/pic/product/800x800/20190104220944318.jpg.webp',
                    'https://img2.ch999img.com/pic/product/800x800/20190104220945317.jpg.webp',
                    "https://img2.ch999img.com/pic/product/800x800/20190218114540844.jpg"
                ]
            }
        },
        methods:{
            handleBack(){
                this.$router.push('/category')
            },
            handleShow(){
                this.flag=!this.flag
            }
        },
        components:{
            Contract
        },
        mounted(){
            let dom = document.getElementsByClassName("van-nav-bar__title")[0]
            dom.onclick = function(event){
                var event = event || window.event;
                var target = event.target || event.srcElement;
                if(target.nodeName.toLowerCase() === 'a'){
                    target.style.fontSize = "24px";
                }
            };

        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .header{
        padding-top: 1rem;
        position: relative;
    }
    #CON{
       position: absolute;
        z-index: 99;
    }
.header i{
    color: darkslategray;
    margin-left: .2rem;
    font-size: .42rem;
}
.movie-enter-active,.movie-leave-active{
    transition: all 2s;
}
.movie-enter,.movie-leave-to{
    padding: 0;
    opacity: 0;
}
    .main{
        height: 11rem;
        overflow:auto;
        div{
           height: 11rem;
        }
    }

    .van-swipe{
        padding: .3rem;
        width: 100% !important;
        height: 5rem !important;
        img{
            width: 100% !important;
            height: 5rem !important;
        }
    }

</style>
