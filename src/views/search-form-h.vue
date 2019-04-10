<template>
    <div class="search-form">
    <div class="search">
        <div class="s-right" @touchstart="handleBack">
            <van-icon name="arrow-left" />
        </div>
        <div class="s-input" @touchstart="">
            <van-search :placeholder="placeholder" v-model="value"  class="van-search"/>
        </div>
        <div class="s-left" @touchstart="handleGo(placeholder)">
            搜索
        </div>
        <div class="shopList" ref="shopList">
            <mt-cell
                    v-for="(item,index) in searchData"
                    icon="search"
                    is-link arrow-direction="down"
                    href="/search/:shopName"
            >
                    <template slot="title">
                    <span class="custom-text"

                    >{{item.name}}</span>
                    </template>

            </mt-cell>
    </div>
    </div>
    <div class="hot">
        <h3>热门搜索</h3>
        <div class="hotList">
        <div class="listauto">
            <li
                    v-for="(item,index) in hotData.hotSearch"
                    @touchstart="handleGo(item)"

            >{{item}}</li>
        </div>
        </div>
    </div>
        <div class="list">
            <van-collapse v-model="activeName" accordion>
                <van-collapse-item
                        v-for="(item,index) in hotData.advertise"
                        icon="search"
                >
                    <div slot="title"
                         name="index"
                    >{{item.content}}</div>
                       <div class="banner" v-show="index==1">
                           <div class="oneImg"></div>
                           <div class="twoImg"></div>
                           <div class="threeImg"></div>
                       </div>
                        <div class="hotSHop" v-show="index==0">
                            <p>{{list[0]?list[0].title:""}}</p>
                            <van-list
                                    v-model="loading"
                                    :finished="finished"
                                    finished-text="没有更多了"
                                    @load="onLoad"
                            >
                                <van-card
                                        v-for="(item,index) in list[0]?list[0].ranks:''"
                                        :thumb="item.image"
                                        thumb-link="/product"
                                >
                                <div slot="title">{{item.productName}}</div>
                                    <div slot="price">￥：
                                        {{item.price}}</div>
                                    <div slot="num">销量排名：{{item.rank}}</div>
                                    <div slot="desc">
                                        热度：
                                        <van-progress
                                                :percentage="(item.percentage)*100"
                                                pivot-color="#7232dd"
                                                color="linear-gradient(to right, #be99ff, #7232dd)"
                                        />

                                       </div>
                                </van-card>
                            </van-list>
                        </div>
                </van-collapse-item>
            </van-collapse>
    </div>
    </div>
</template>

<script>
    export default {
        created(){
            this.handleHotData();
            this.handlePhoneHot();
        },
        data() {
            return {
                value:"",
                activeName:2,
                placeholder:"iPhone XS Max",
               /* hotData:this.$store.state.Classify.hotData*/
                list: this.$store.state.Classify.phoneHOTData,
                loading: false,
                finished: false
            }
        },
        methods:{
            handleHotData(){
                this.$store.commit("Classify/hotSearch");
            },
            handlePhoneHot(){
                this.$store.commit("Classify/phoneHot");
            },
            handleBack(){
                this.$router.back()
            },
            handleGo(val){
                this.$router.push("/search/"+val);
            },




            onLoad() {
                let arr = [];
                arr = this.list[0].ranks
                // 异步更新数据
                setTimeout(() => {
                    for (let i = 0; i < 10; i++) {
                        this.list.push(this.list[0].ranks.length + 1);
                    }
                    // 加载状态结束
                    this.loading = false;

                    // 数据全部加载完成
                    if (this.list[0].ranks.length >= 20) {
                        this.finished = true;
                    }
                }, 500);
            }

        },
        computed:{
           hotData(){
               return this.$store.state.Classify.hotData
            },
            searchData(){
                return this.$store.state.Classify.searchShowData
            },
        },

        watch:{
            value(newVal,oldVal){
                let params =newVal;
                this.$store.dispatch("Classify/searchShow",params);
            },
        }

    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    $color:#333;
    .search{
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: .2rem 0;
        position: relative;
    }
    .search>.s-right{
        font-size: .5rem;
        font-weight: 900;
        color:$color;
    }
    .search>.s-left{
        font-size: .32rem;
    }


    .search>.s-input>.van-search>.van-search__content input{
        width: 5rem;
        height: .7rem;
        border-radius: .8rem;
        border: none;
        background: #e1e1e1;
        padding-left: .5rem;
    }
    .hot{
        width: 100%;
    h3{
            border-bottom: #e1e1e1 1px solid;
            border-top: #e1e1e1 1px solid;
            padding: .1rem .2rem;
        }

    }
    .hotList{
        overflow:auto;
        padding:.4rem;
    }
    .listauto{
        width:13rem;
    li{
        display: inline-block;
        width: 2rem;
        height: .5rem;
        background: #87acd8;
        border-radius: .2rem;
        text-align: center;
        line-height: .5rem;
        margin-left: .1rem;
        a{
            color:orangered;
        }
    }
    }


    .list{
        border-top: #e1e1e1 6px solid;
    }
    .shopList{
        position: absolute;
        top: 1rem;
        left:0;
        width:100%;
        z-index: 9;
    }
    .shopList>.mint-cell>.mint-cell-wrapper>.mint-cell-title{
     flex: none;
    }
    .shopList>.mint-cell>.mint-cell-wrapper>.mint-cell-value>.is-link{
        margin-right:0;
    }

    .banner{
        height: 7rem;
        width: 100%;
        overflow: auto;
    }
    .banner>.oneImg{
        width: 100%;
        height: 5rem;
        background-color: rgb(255, 255, 255);
        background-image: url("http://img2.ch999img.com//pic/topic/2019032705139717.jpg");background-position: center center;
        background-repeat: no-repeat;
        background-size:100%;
    }
    .banner>.twoImg{
        margin: .3rem 0;
        width: 100%;
        height: 5rem;
        background-color: rgb(255, 255, 255);
        background-image: url("http://img2.ch999img.com//pic/topic/2019032711038503.jpg");background-position: center center;
        background-repeat: no-repeat;
        background-size:100%;
    }
    .banner>.threeImg{
        width: 100%;
        height: 5rem;
        background-color: rgb(255, 255, 255);
        background-image: url("http://img2.ch999img.com//pic/topic/2019032711036918.jpg");background-position: center center;
        background-repeat: no-repeat;
        background-size:100%;
    }
    .hotSHop{
        height: 7rem;
        width: 100%;
        overflow: auto;
        p{
            margin-bottom:.3rem;
            text-align: center;
        }
    }
</style>
