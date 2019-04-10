/*
 * @Author: Jason 
 * @Date: 2019-04-02 16:00:28 
 * @Last Modified by: Jason
 * @Last Modified time: 2019-04-09 10:12:09
 */


import { HomeData, HomeRes, HomeLimit, HomeTrade, HomeRepair, HomeHeadline } from '@/api/HomeData'

export default {
    /**
     * 推荐板块
     * @param {*} param0 
     */
    async handleHomeData({ commit }) {
        /** 首页推荐 */
        // console.log(HomeData);
        let data = await HomeData();
        let floor = data.data.container.floor;

        let homeres = await HomeRes();
        let v1data = homeres.data;

        let res = {
            floor,
            v1data,
        }
        commit("handleHomeData", res);
    },



    /**
     * 限时抢购
     * @param {*} param0 
     */

    async handleLimitData({ commit }) {
        let limitData = await HomeLimit();
        let data = limitData.data.container.floor;

        let banner = data[0].content;
        let tabs = data[1].content.tabs;
        let product = data[1].content.product;
        let res = {
            banner,
            tabs,
            product
        }
        commit('handleLimitData', res);
    },
    togglePro({ commit }, index) {
        commit('togglePro', index)
    },

    /**
     * 以旧换新
     * @param {*} param0 
     */

    async handleRepairData({ commit }) {
        let data = await HomeRepair();
        let res = data.data.container.floor;
        commit('handleRepairData', res);
    },

    /**
     * 手机快修
     * @param {*} param0 
     */
    async handleTradeData({ commit }) {
        let data = await HomeTrade();
        let res = data.data.container.floor;
        commit('handleTradeData', res);
    },

    /**
     * 头条
     * @param {*} {commit}
     */
    async HandleHeadline({ commit }) {
        let data = await HomeHeadline();
        let res = data.data.container.floor;
        commit('HandleHeadline', res);
    }



}