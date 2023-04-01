import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer as mainReducer } from "./main/reducer";
import { reducer as authReducer } from "./Auth/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({ mainReducer, authReducer });

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
