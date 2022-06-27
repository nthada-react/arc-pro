import { combineReducers } from "redux";
import { latestNewsReducers } from "./latestNewsReducers";
import { topNewsReducers } from "./topNewsReducers";

const reducers = combineReducers({
    latestNews:latestNewsReducers,
    allTopnews:topNewsReducers,
})

export default  reducers