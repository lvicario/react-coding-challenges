import { combineReducers } from "redux";
import authReducer from "./auth";
import playlistReducer from "./playlist";

export const reducers = combineReducers({
	auth: authReducer,
	playlist: playlistReducer
});
