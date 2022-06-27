import { ActionTypes } from "../constants/action-types"

export const setLatestNews = (latestNews) =>{
    return{
        type:ActionTypes.SET_LATEST_NEWS,
        payload : latestNews,
    }
}

export const setTopNews = (topnews) =>{
    return{
        type:ActionTypes.SET_TOP_NEWS,
        payload : topnews,
    }
}