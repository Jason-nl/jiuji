<template>
    <div class="list">
        <div class="banner"><img :src="sidebarData[index].pic" alt=""></div>
        <div class="listPic" v-for="(item,key) in sidebarData[index].children">
            <h2>{{item.title}}</h2>
            <div class="domeList">
            <div class="dome" v-for="(data,sum) in sidebarData[index].children[key].children">
                <a href="####">
                <img :src="data.picture" alt="">
                <p>{{data.title}}</p>
                </a>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            sidebarData:{
                type:Array,
            },
            index:{
                type:Number,
            }
        },
        data() {
            return {
                img:require("@/assets/logo.png")
            }
        },
        created(){
            console.log(this.sidebarData)
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.list{
    width: 75%;
    height: 11rem;
    background: #fff;
    position: absolute;
    top: 0rem;
    right: 0;
    z-index: 10;

}
    .list>.banner{
        width: 95%;
        height:1.7rem ;
        margin: .2rem auto;
        border:1px solid #333;
         border-radius:.2rem;
        img{
            width: 100%;
            height: 100%;
        }
    }

.list>.listPic{
    width:95%;
    margin: .2rem auto;
    border: #e1e1e1  1px solid;
    border-radius:.1rem;
    height:auto;
    box-shadow:1px 1px 3px gray;
    h2{
        margin: .2rem;
    }

}
.list>.listPic>.domeList{
    display: flex;
    justify-content: flex-start;
    flex-wrap:wrap;
}
.list>.listPic>.domeList>.dome{
    padding: .1rem;
    margin-left: .17rem;
    width: 30%;
    img{
        width:100% ;
    }
    p{
        text-align: center;
        color: #666666;
    }
}
</style>
