<template>
    <div class="sectop">
        <img :src="imgpath" style="width: 100%;height: 100%">
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        props: ['index'],
        data() {
            return {
                imgpath: ""
            };
        },
        created() {
            axios({
                method: "get",
                url: "/api/web/api/floors/v1?label=0&page=1&random=0"
            })
                .then(data => {
                    let index = this._props.index;
                    this.imgpath =
                        data.data.data.container.floor[index].content[0].imagePath;
                })
                .catch(err => {
                    throw err;
                });
        }
    };
</script>

<style scoped>
    .sectop {
        width: 100%;
        height: 42px;
    }
</style>
