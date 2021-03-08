import { combineReducers } from "redux";

import categories from "./categories";
import words from "./words";
import user from "./user";

const rootReducer = combineReducers({ categories, words, user });
export default rootReducer;
