import axios from 'axios'

export default {
    handleHomeData({commit}){
        axios({
            method:'get',
            url:'/api/web/api/floors/v1?label=0&page=1&random=0'
        }).then(data =>{
            console.log(data);
        }).catch(err =>{
            console.log(err);
        })
    }
}