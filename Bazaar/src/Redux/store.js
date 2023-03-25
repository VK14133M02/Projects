import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";

import { reducer as companyReducer } from "./company/reducer";
import { reducer as authReducer } from "./auth/reducer";

const rootReducer = combineReducers({ companyReducer, authReducer });

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export { store };
