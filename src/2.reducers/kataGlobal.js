const INITIAL_STATE = {jumlahKata : 0}

export default (state = INITIAL_STATE, action) => {
    if(action.type == 'UBAH_JUMLAH'){
        return {...INITIAL_STATE, jumlahKata : action.payload}
    } else{
        return state
    }
}