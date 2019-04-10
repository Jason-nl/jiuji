<template>
    <div class="searchHome">
        <div class="search">
            <div class="s-right" @touchstart="handleBack">
                <van-icon name="arrow-left" />
            </div>
            <div class="s-input" @touchstart="handleBack">
                <van-search :placeholder="placeholder"   class="van-search"/>
            </div>
            <div class="s-left" @touchstart="handleChange">
                <van-icon :name="nameS" />
            </div>
        </div>
        <div class="navBar">
            <div class="item">综合</div>
            <div class="item">价格</div>
            <div class="item">新品优先</div>
            <div class="item">筛选</div>
            <div class="item">品牌</div>
            <div class="item">运行内存</div>
            <div class="item">机身内存</div>
            <div class="item">屏幕尺寸</div>
        </div>
        <div class="searchMsg">
            <van-card
                    v-for="(item,index) in ListData"
                    tag="HOT"
                    class="listItem"
                    currency="$"
                    :thumb="item.imagePath"
                    thumb-link="/product"
            >
                <div slot="title">{{item.name}}</div>
                <div slot="desc">{{item.installment}}</div>
                <div slot="price">{{item.price}}</div>
                <div slot="desc">{{item.profile}}</div>
                <div slot="num">好评：{{item.praiseRate}}</div>
                <div slot="footer"

                >
                    <van-button size="mini"
                                v-for="(msg,index) in item.tag"
                    >{{msg}}</van-button>

                </div>
            </van-card>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                placeholder:"",
                nameS:"apps-o"
            }
        },
        created(){
            this. placeholder=this.$route.params.shopName
        },

        methods:{
            handleBack(){
                this.$router.back()
            },
            handleChange(){
                    this.nameS="search"
            }
        },
        computed:{
            ListData(){
                return this.$store.state.Classify.SearchListData
            }
        },
        watch:{
            placeholder(newVal,oldVal){
                if (newVal != oldVal){
                    let params = newVal;
                    this.$store.dispatch("Classify/SearchList",params)
                }
            }
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    $color:#333;

    .searchHome{

    }
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
        font-size: .5rem;
        font-weight: 800;
    }

   /* 二维布局样式*/
    .navBar{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows:auto;
        grid-column-gap:.4rem;
        grid-row-gap:.3rem;
        justify-items: center;
        algin-items:center;
        margin-bottom: .4rem;
    }


    .searchMsg{
        padding-top: 8px;
        box-shadow:0px 5px 10px -5px red inset;
        height:10rem;
        overflow:auto;
        .listItem{
            margin-bottom: 8px;
        }
    }
</style>
