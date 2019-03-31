<template>
    <div class="goods">
        <SectTop :index="index"/>
        <ul class="goodsBox">
            <li v-for="(item,index) in goodsPhone" :key="index">
                <img :src="item.imagePath" alt="" class="goodsImg">
                <p>{{item.sellingPoint}}</p>
                <p>{{item.title}}</p>
                <p>{{item.price}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
    import SectTop from './sectTop';
    import axios from 'axios';

    export default {
        name: "goods",
        data() {
            return {
                index: 25,
                goodsPhone: []
            }
        },
        components: {
            SectTop
        },
        created() {
            axios({
                method: 'get',
                url: "/api/web/api/floors/v1?label=0&page=1&random=0"
            }).then(data => {
                let top_t = data.data.data.container.floor[26].content;
                let top_b = data.data.data.container.floor[27].content;
                this.goodsPhone = top_t.concat(top_b);
            }).catch(err => {
                throw err;
            })
        }
    }
</script>

<style scoped>
    .goodsBox {
        width: 100%;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        padding: 10px;
    }

    .goodsBox li {
        width: 49%;
        height: 242px;
        background: #fff;
        margin-top: .2rem;
        padding-bottom: 10px;
        position: relative;
        box-shadow: 0 2px 10px 0 rgba(0, 0, 0, .08);
        border-radius: 3px;
    }

    .goodsBox li img {
        width: 144px;
        height: 144px;
    }


    .goodsBox li p {
        line-height: 20px;
        margin-top: 4px;
    }

    .goodsBox li p:nth-child(2) {
        background: #ebf6fe;
        color: #87acd8;
        padding: 5px 15px;
    }

    .goodsBox li p:nth-child(3) {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding: 0 15px;
    }

    .goodsBox li p:last-child {
        color: #f00;
        padding: 0 15px;
    }

</style>