<template>
    <div class="container">
        <div class="tab">
            <nav>
                <ul>
                    <li v-for="(item,index) in tabs"
                        :key="index"
                        @click.prevent="handleToggle(item.tab)"
                        :class="{active:activeIndex == item.tab}"
                    >
                        {{item.title}}
                    </li>
                </ul>
            </nav>
        </div>

        <keep-alive>
            <component :is="activeIndex"></component>
        </keep-alive>
    </div>

</template>

<script>
    import Recomend from "./tab/recoment.vue";
    import Limit from "./tab/limit.vue";
    import Repair from "./tab/repair.vue";
    import Trade from "./tab/trade.vue";
    import Headline from "./tab/headline.vue";

    export default {
        name: "tab",

        components: {
            "Recomend": Recomend,
            "Limit": Limit,
            "Repair": Repair,
            "Trade": Trade,
            "Headline": Headline
        },
        data() {
            return {
                activeIndex: "Recomend",
                tabs: [
                    {
                        title: "推荐",
                        tab: 'Recomend'
                    },
                    {
                        title: "限时购",
                        tab: 'Limit'
                    },
                    {
                        title: "以旧换新",
                        tab: 'Repair'
                    },
                    {
                        title: "手机快修",
                        tab: 'Trade'
                    },
                    {
                        title: "头条",
                        tab: 'Headline'
                    }
                ]
            };
        },
        methods: {
            handleToggle(tab) {
                this.activeIndex = tab;
            }
        }
    };
</script>

<style scoped lang="scss">
    .container {
        width: 100%;
        height: 100%;
    }

    .tab {
        width: 100%;
        height: .8rem;
        line-height: .8rem;
        text-align: center;
    }

    .tab ul {
        display: flex;
        align-items: center;
        flex-flow: row nowrap;
        justify-content: center;
    }

    .tab ul > li {
        flex: 1;
        color: #efefef;
    }

    .active {
        font-size: 16px;
        color: #fff;
    }
</style>
