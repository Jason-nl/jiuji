<template>
    <div class="floor">
        <nav>
            <ul>
                <li v-for="(item,index) in floors">
                    <img :src="item.imagePath" alt="">
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>

    export default {
        name: "floor",
        props:["floors"]
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