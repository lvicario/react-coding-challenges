import axios from "axios";
import config from "./../../config";
import { ActionTypes } from "./types";

const fetchPlaylistStart = () => {
    return {
        type: ActionTypes.fetchPlaylistStart,
    };
};

const fetchPlaylistSuccess = data => {
    return {
        type: ActionTypes.fetchPlaylistSuccess,
        payload: data
    }
}

const fetchPlaylistFailure = errorMessage => {
    return {
        type: ActionTypes.fetchPlaylistFailure,
        payload: errorMessage
    }
}

export const fetchPlaylist = () => async (dispatch, getState) => {
	const { auth } = getState();
	dispatch(fetchPlaylistStart());

	try {		
		const response = await axios(`${config.api.baseUrl}/browse/new-releases?limit=10`, {
			method: "GET",
			headers: {
				"Authorization": "Bearer " + auth.token
			}
		});

		dispatch(fetchPlaylistSuccess(response.data.albums.items));
	} catch (err) {
		dispatch(fetchPlaylistFailure(err.message));
	}
}
