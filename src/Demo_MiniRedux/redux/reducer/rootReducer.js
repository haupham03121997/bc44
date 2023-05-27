import { combineReducers } from "redux";
import { numberReducer } from "./numberReducer";

export const rootReducer = combineReducers({ numberReducer });

// { numberReducer }~ {numberReducer:numberReducer}
