import { ActionTypes } from "../constants/action-types";

const initialState = {
    latestNews:[]
}
export const latestNewsReducers = (state = initialState, {type, payload}) =>{
    switch ( type) {
        case ActionTypes.SET_LATEST_NEWS:
            return {...state, latestNews:payload}
    
        default:
            return state
    }
}