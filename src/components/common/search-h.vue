<template>
    <div class="search">
        <div class="s-right" @touchstart="jumpHome">
            <van-icon name="arrow-left" />
        </div>
        <div class="s-input" @touchstart="jumpSearch">
            <van-icon name='search'  class="van"/>
            <input type="text" placeholder="iPhone XS Max" >
        </div>
        <div class="s-left" @touchstart="flag">
            <van-icon name="ellipsis" />
        </div>
    </div>
</template>

<script>
    import Vuex from "vuex"
    export default {
        data() {
            return {
                place:""
            }
        },
        methods:{
            ...Vuex.mapMutations({
                flag:"Classify/handleCon",
            }),
            jumpHome(){
                this.$router.push({name:"home"})
            },
            jumpSearch(){
                this.$router.push({path:"/search-form"})

            }

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
    }
    .search>.s-right,.search>.s-left{
        font-size: .5rem;
        font-weight: 900;
        color:$color;
    }
    .search>.s-input{
        position: relative;
        .van{
            position: absolute;
            left: .1rem;
            top:.15rem;
            font-weight: 900;
        }
    }
    .search>.s-input>input{
        width: 5rem;
        height: .5rem;
        border-radius: .8rem;
        border: none;
        background: #e1e1e1;
        padding-left: .5rem;
    }
</style>
