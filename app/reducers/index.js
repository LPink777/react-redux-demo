// 合并所有reducer
import { userInfo } from "./userInfo";
import { collection } from "./collection";
import { combineReducers } from "redux";

export default combineReducers({
    userInfo,
    collection
})