import axios from "axios";
import config from "./../../config";
import { ActionTypes } from "./types";

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
        "Authorization": "Basic " + btoa(process.env.REACT_APP_CLIENT_ID + ":" + process.env.REACT_APP_CLIENT_SECRET)
      }
    });

    dispatch(fetchAuthSuccess(response.data.access_token));
  } catch (err) {
    dispatch(fetchAuthFailure(err.message));
  }
}
