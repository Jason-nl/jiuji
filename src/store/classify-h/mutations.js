export default {
    handleCon(state){
        if ( state.contract==false){
            state.contract=true;
        } else {
            state.contract=false;
        }
    }
}