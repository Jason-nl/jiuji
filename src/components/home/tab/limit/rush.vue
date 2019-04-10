/*
* @Author: Jason
* @Date: 2019-04-02 15:38:26
* @Last Modified by: Jason
* @Last Modified time: 2019-04-03 14:16:47
*/

<template>
    <div class="floor_rush_tab">
        <div class="relative-tabs">
            <div class="slider-tabs">
                <ul class="tab_center">
                    <li
                            v-for="(item,index) in rushTabs"
                            :key="index"
                            :class="{active:activeIndex == index}"
                            @touchstart="togglePro(index)"
                    >
                        <div class="date">{{item.title}}</div>
                        <span style="color: #999;">{{item.description}}</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import Vuex from "vuex";

    export default {
        name: "rush",
        computed: {
            ...Vuex.mapState({
                activeIndex: state => state.Home.activeIndex,
                rushTabs: state => state.Home.limitTab
            })
        },
        methods: {
            ...Vuex.mapActions({
                togglePro: "Home/togglePro"
            })
        }
    };
    /**
     *
     * 需求分析
     *
     * 三种状态 已结束  抢购中  即将开始

     1. 默认是抢购中的状态对应当天日期 isToday = true
     2. 切换不同状态返回对应的商品组件 switch
     3. 切换组件的活动样式以及对应的商品组件统一样式
     *
     * 组件切换 tab滑动动画
     *
     */
</script>

<style scoped lang="scss">
    .floor_rush_tab {
        width: 100%;
        height: 1.16rem;
        box-shadow: 0 5px 8px #eee;
        background-color: #fff;

        .relative-tabs {
            width: 7.5rem;
            height: 58px;
            box-sizing: border-box;
            margin-bottom: 10px;

            .slider-tabs {
                overflow-x: auto;
                overflow-y: hidden;
                height: 100%;

                .tab_center {
                    padding: 10px 0px;
                    width: 720px;
                    display: flex;
                    flex-direction: row;

                    li {
                        width: 80px;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        text-align: center;


                        .date {
                            width: 65px;
                            height: 23px;
                            line-height: 23px;
                        }
                    }

                    .active {
                        color: #f00;
                    }
                }
            }
        }
    }
</style>