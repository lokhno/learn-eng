import { createStore, compose } from "redux";

import rootReducer from "./redusers";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(rootReducer, composeEnhancers());

export default store;
