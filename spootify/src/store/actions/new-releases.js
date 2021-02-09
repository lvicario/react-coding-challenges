import axios from "axios";
import config from "./../../config";
import { ActionTypes } from "./types";

const fetchNewReleaseStart = () => {
    return {
        type: ActionTypes.fetchNewReleaseStart,
    };
};

const fetchNewReleaseSuccess = data => {
    return {
        type: ActionTypes.fetchNewReleaseSuccess,
        payload: data
    }
}

const fetchNewReleaseFailure = errorMessage => {
    return {
        type: ActionTypes.fetchNewReleaseFailure,
        payload: errorMessage
    }
}

export const fetchNewRelease = () => async (dispatch, getState) => {
	const { auth } = getState();
	dispatch(fetchNewReleaseStart());

	try {		
		const response = await axios(`${config.api.baseUrl}/browse/new-releases?limit=10`, {
			method: "GET",
			headers: {
				"Authorization": "Bearer " + auth.token
			}
		});

		dispatch(fetchNewReleaseSuccess(response.data.albums.items));
	} catch (err) {
		dispatch(fetchNewReleaseFailure(err.message));
	}
}
