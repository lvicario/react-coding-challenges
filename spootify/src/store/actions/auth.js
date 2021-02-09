import axios from "axios";
import config from "./../../config";
import { ActionTypes } from "./types";

// Temporary, should be in environment variable
const clientId = "d486a396a80a479bb38ea3d697c0b77d";
const clientSecret = "a0cc8610e0f049dcba084a69e4285993";

const fetchAuthStart = () => {
    return {
        type: ActionTypes.fetchAuthStart,
    };
};

const fetchAuthSuccess = data => {
    return {
        type: ActionTypes.fetchAuthSuccess,
        payload: data
    }
}

const fetchAuthFailure = errorMessage => {
    return {
        type: ActionTypes.fetchAuthFailure,
        payload: errorMessage
    }
}

export const fetchAuth = () => async (dispatch) => {
	dispatch(fetchAuthStart());

	try {		
		const response = await axios.post(config.api.authUrl, 
			"grant_type=client_credentials", {
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
				"Authorization": "Basic " + btoa(clientId + ":" + clientSecret)
			}
		});

		dispatch(fetchAuthSuccess(response.data.access_token));
	} catch (err) {
		dispatch(fetchAuthFailure(err.message));
	}
}
