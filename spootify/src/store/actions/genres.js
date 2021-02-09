import axios from "axios";
import config from "./../../config";
import { ActionTypes } from "./types";

const fetchGenresStart = () => {
  return {
    type: ActionTypes.fetchGenresStart,
  };
};

const fetchGenresSuccess = data => {
  return {
    type: ActionTypes.fetchGenresSuccess,
    payload: data
  }
}

const fetchGenresFailure = errorMessage => {
  return {
    type: ActionTypes.fetchGenresFailure,
    payload: errorMessage
  }
}

export const fetchGenres = () => async (dispatch, getState) => {
  const { auth } = getState();
  dispatch(fetchGenresStart());

  try {   
    const response = await axios(`${config.api.baseUrl}/browse/categories`, {
      method: "GET",
      headers: {
        "Authorization": "Bearer " + auth.token
      }
    });

    dispatch(fetchGenresSuccess(response.data.categories.items));
  } catch (err) {
    dispatch(fetchGenresFailure(err.message));
  }
}
