import { combineReducers } from "redux";
import authReducer from "./auth";
import newReleaseReducer from "./new-releases";
import playlistReducer from "./playlist";
import genresReducer from "./genres";

export const reducers = combineReducers({
	auth: authReducer,
	newRelease: newReleaseReducer,
	playlist: playlistReducer,
	genres: genresReducer
});
