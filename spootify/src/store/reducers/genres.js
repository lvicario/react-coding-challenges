import { ActionTypes } from "./../actions";

const initialState = {
    isFetching: false,
    isFetched: false,
    albums: [],
    errorMessage: null
}

export const genresReducer = (state = initialState, action) => {
	switch (action.type) {
		case ActionTypes.fetchGenresStart:
			return {
				...state,
				isFetching: true
			};
		case ActionTypes.fetchGenresSuccess:
			return {
				...state,
				isFetching: false,
				isFetched: true,
				albums: action.payload,
				errorMessage: null
			};
		case ActionTypes.fetchGenresFailure:
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

export default genresReducer;
