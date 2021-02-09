import { ActionTypes } from "./../actions";

const initialState = {
    isAuthenticated: false,
    isFetching: false,
    token: null,
    errorMessage: null
}

export const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case ActionTypes.fetchAuthStart:
			return {
				...state,
				isFetching: true
			};
		case ActionTypes.fetchAuthSuccess:
			return {
				...state,
				isAuthenticated: true,
				isFetching: false,
				token: action.payload,
				errorMessage: null
			};
		case ActionTypes.fetchAuthFailure:
			return {
				...state,
				isAuthenticated: false,
				isFetching: false,
				data: null,
				errorMessage: action.payload
			};
		default:
			return state;
	}
}

export default authReducer;
