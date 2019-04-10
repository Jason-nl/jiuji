/*
 * @Author: Jason 
 * @Date: 2019-04-02 16:00:36 
 * @Last Modified by: Jason
 * @Last Modified time: 2019-04-10 10:19:43
 */



export default {

    /**
     * 首页推荐
     * @param {*} state 
     * @param {*} params 
     */
    handleHomeData(state, params) {
        let floor = params.floor;
        state.banners = floor[0].content;
        state.floors = floor[2].content;
        state.rushlist = params.v1data.rushToday;
        state.headlinelist = floor[6].content;
        state.newPro = floor[7].content;
        state.recomPro = floor[8].content;
        state.partsPro = floor[9].content.concat(floor[10].content);
        state.topic_l = floor[11].content[0].imagePath;
        state.topic_r = floor[11].content[1].imagePath;
        state.optimizs = params.v1data.optimize;

        state.phone_t = floor[15].content;
        state.phone_m = floor[16].content;
        state.phone_b = floor[17].content;

        state.workbox = floor[19].content.concat(floor[20].content);

        state.lifebox = floor[22].content.concat(floor[23].content);
        
        state.goodsPhone = floor[25].content.concat(floor[26].content);

        state.optimiz_img = floor[12].content[0].imagePath;
        state.boutique_img = floor[14].content[0].imagePath;
        state.word_img = floor[18].content[0].imagePath;
        state.life_img = floor[21].content[0].imagePath;
        state.goods_img = floor[24].content[0].imagePath;


        localStorage.setItem('optimiz_img', state.optimiz_img);

        localStorage.setItem('boutique_img', state.boutique_img);

        localStorage.setItem('word_img', state.word_img);

        localStorage.setItem('life_img', state.life_img);

        localStorage.setItem('goods_img', state.goods_img);

    },

    /**
     * 限时抢购
     * @param {*} state 
     * @param {*} params 
     */
    handleLimitData(state, params) {
        //默认是抢购状态
        state.limitBanner = params.banner;
        state.limitTab = params.tabs;
        state.limitProduct = params.product;
        for (var i = 0; i < state.limitTab.length; i++) {
            if (state.limitTab[i].isToday) {
                state.activeIndex = state.limitTab[i].label - 1;
            }
        }
        console.log(state.activeIndex);

        window.sessionStorage.setItem('spike',JSON.stringify(state.limitProduct));
    },

    togglePro(state, params) {

        state.activeIndex = params;
        // console.log(state.activeIndex);//当前活动下标
        /** 
         *  已失效背景图  https://img2.ch999img.com/m/static/assets/end.5ead8ce17d95631a9b4448fc4086ed13.png 
        */
    },

    /**
     * 以旧换新
     * @param {*} state 
     * @param {*} params 
     */
    handleRepairData(state, params) {
        console.log(params);
        state.repairBanner = params[0].content;
        state.repairFloor = params[1].content;
    },

    /**
     * 手机快修
     * @param {*} state 
     * @param {*} params 
     */
    handleTradeData(state, params) {
        state.tradeBanner = params[0].content;
        state.tradeFloor = params[1].content;
    },


    /**
     * 头条
     * @param {*} state
     * @param {*} params
     */
    HandleHeadline(state,params){
        console.log(params);
        state.headBanner = params[0].content;
        state.infoList = params[1].content;
    }


}

