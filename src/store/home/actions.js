import {HomeData, HomeRes} from '../../api/HomeData'

export default {
    async handleHomeData({commit}) {
        let data = await HomeData();
        let floor = data.data.container.floor;

        let homeres = await HomeRes();
        let v1data = homeres.data;

        let res = {
            floor,
            v1data
        }
        commit("handleHomeData", res);
    },
    handleSwitch({commit},params){
        // console.log(params);
        commit('handleMutationsToggle',params);
    }
}