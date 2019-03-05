// reducer adalah tempat penyimpanan global state
import { combineReducers } from 'redux'
import UserState from './userGLobal'
import ProductState from './productGlobal'
import KataState from './kataGlobal'
import TodoState from './weekendGlobal'

export default combineReducers({
    user : UserState,
    product : ProductState,
    kata : KataState,
    todo : TodoState
});