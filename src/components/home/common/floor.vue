<template>
    <div class="floor">
        <nav>
            <ul>
                <li v-for="(item,index) in floor_server">
                    <img :src="item.imagePath" alt="">
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>

    import axios from 'axios'

    export default {
        name: "floor",
        created() {
            axios.get('/api/web/api/floors/v1?label=0&page=1&random=0').then(data => {
                let res = data.data.data.container.floor[2].content;
                this.floor_server = res;
            }).catch((err) => {
                throw err;
            })
        },
        data() {
            return {
                floor_server:[]
            }
        }
    }
</script>

<style scoped>
    .floor {
        width: 100%;
        height: 1.5rem;
        text-align: center;
    }
    .floor ul{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        flex-flow: nowrap row;
        align-items: center;
    }
    .floor ul>li{
        flex: 1;
    }
    .floor ul>li img{
        width: 100%;
        height: 100%;
    }
</style>