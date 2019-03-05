const INITIAL_STATE = {todo : 0}

export default(state = INITIAL_STATE, action) => {
    if(action.type == 'UBAH_TODO'){
        return{...INITIAL_STATE, todo : action.payload}
    } else{
        return state
    }
}