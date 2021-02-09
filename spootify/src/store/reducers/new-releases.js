import { ActionTypes } from "./../actions";

const initialState = {
    isFetching: false,
    isFetched: false,
    albums: [],
    errorMessage: null
}

export const newReleaseReducer = (state = initialState, action) => {
	switch (action.type) {
		case ActionTypes.fetchNewReleaseStart:
			return {
				...state,
				isFetching: true
			};
		case ActionTypes.fetchNewReleaseSuccess:
			return {
				...state,
				isFetching: false,
				isFetched: true,
				albums: action.payload,
				errorMessage: null
			};
		case ActionTypes.fetchNewReleaseFailure:
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

export default newReleaseReducer;
