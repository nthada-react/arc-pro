import { ActionTypes } from "../constants/action-types";


const initialState = {
    topnews:[]
}
export const topNewsReducers = (state = initialState, {type, payload}) =>{
    switch ( type) {
        case ActionTypes.SET_TOP_NEWS:
            return {...state, topnews:payload}
    
        default:
            return state
    }
}