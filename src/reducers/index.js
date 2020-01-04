import recipesReducer from "./recipes";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
	recipesReducer
});

export default rootReducer;