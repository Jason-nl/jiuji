export default {
    handleHomeData(state, params) {
        state.banners = params.floor[0].content;
        state.floors = params.floor[2].content;
        state.rushlist = params.v1data.rushToday;
        state.headlinelist = params.floor[7].content;
        state.newPro = params.floor[8].content;
        state.recomPro = params.floor[9].content;
        state.partsPro = params.floor[10].content.concat(params.floor[11].content);
        state.topic_l = params.floor[12].content[0].imagePath;
        state.topic_r = params.floor[12].content[1].imagePath;
        state.optimizs = params.v1data.optimize;

        state.phone_t = params.floor[16].content;
        state.phone_m = params.floor[17].content;
        state.phone_b = params.floor[18].content;
        state.workbox = params.floor[20].content.concat(params.floor[21].content);
        state.lifebox = params.floor[23].content.concat(params.floor[24].content);
        state.goodsPhone = params.floor[26].content.concat(params.floor[27].content);

        state.optimiz_img = params.floor[13].content[0].imagePath;
        state.boutique_img = params.floor[15].content[0].imagePath;
        state.word_img = params.floor[19].content[0].imagePath;
        state.life_img = params.floor[22].content[0].imagePath;
        state.goods_img = params.floor[25].content[0].imagePath;

        localStorage.setItem('optimiz_img',state.optimiz_img);

        localStorage.setItem('boutique_img',state.boutique_img);

        localStorage.setItem('word_img',state.word_img);

        localStorage.setItem('life_img',state.life_img);

        localStorage.setItem('goods_img',state.goods_img);

    }

}