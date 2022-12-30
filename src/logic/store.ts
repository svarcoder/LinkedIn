import {
	applyMiddleware,
	combineReducers,
	createStore,
} from "@reduxjs/toolkit";
import userReducer from "./reducer/userReducer";
import thunk from "redux-thunk";
import articleReducer from "./reducer/articleReducer";

const rootReducer = combineReducers({
	userState: userReducer,
	articleState: articleReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
