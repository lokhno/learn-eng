import { combineReducers } from "redux";

import categories from "./categories";
import words from "./words";

const rootReducer = combineReducers({ categories, words });
export default rootReducer;
