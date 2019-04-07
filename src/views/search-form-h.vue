<template>
    <div class="search-form">
    <div class="search">
        <div class="s-right" @touchstart="">
            <van-icon name="arrow-left" />
        </div>
        <div class="s-input" @touchstart="">
            <van-search placeholder="iPhone XS Max" v-model="value"  class="van-search"/>
        </div>
        <div class="s-left" @touchstart="">
            搜索
        </div>
        <div class="shopList">
            <mt-cell
                    v-for="(item,index) in searchData"
                    to="//github.com"
                    is-link
                    icon="search"
            >
                {{item.name}}
            </mt-cell>
        </div>
    </div>
    <div class="hot">
        <h3>热门搜索</h3>
        <div class="hotList">
        <div class="listauto">
            <li
                v-for="(item,index) in hotData.hotSearch"
            ><a href="/home">{{item}}</a></li>
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

                   <!-- 填充搜索框内我那个&lt;!&ndash;&ndash;&gt;
                    提供多样店铺模板，快速搭建网上商城-->
                </van-collapse-item>
            </van-collapse>
    </div>
    </div>
</template>

<script>
    export default {
        created(){
            this.handleHotData();
        },
        updated(){
            console.log(this. searchData)
        },
        data() {
            return {
                value:"",
                active: 0,
                activeName:2,
               /* hotData:this.$store.state.Classify.hotData*/
            }
        },
        methods:{
            handleHotData(){
                this.$store.commit("Classify/hotSearch");
            },

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
</style>
