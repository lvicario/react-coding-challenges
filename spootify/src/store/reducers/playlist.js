import { ActionTypes } from "./../actions";

const initialState = {
  isFetching: false,
  isFetched: false,
  albums: [],
  errorMessage: null
}

export const playlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.fetchPlaylistStart:
      return {
        ...state,
        isFetching: true
      };
    case ActionTypes.fetchPlaylistSuccess:
      return {
        ...state,
        isFetching: false,
        isFetched: true,
        albums: action.payload,
        errorMessage: null
      };
    case ActionTypes.fetchPlaylistFailure:
      return {
        ...state,
        isFetching: false,
        isFetched: false,
        albums: [],
        errorMessage: action.payload
      };
    default:
      return state;
  }
}

export default playlistReducer;
