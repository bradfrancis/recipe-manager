import { 
	REQUEST_RECIPES,
	RECEIVE_RECIPES,
	RECEIVE_MORE_RECIPES
} from '../constants/ActionTypes';

const initialState = {
	query: '',
	isFetching: false,
	fetchingDidError: false,
	recipes: []
};

export default function recipes(state = initialState, action) {
	switch (action.type) {
		case REQUEST_RECIPES:
			return Object.assign({}, state, {
				...state,
				query: action.payload.query,
				isFetching: true
			});

		case RECEIVE_RECIPES:
			return Object.assign({}, state, {
				...state,
				isFetching: false,
				fetchingDidError: action.error,
				recipes: action.error ? state.recipes : action.payload.recipes
			});

		case RECEIVE_MORE_RECIPES:
			return Object.assign({}, state, {
				...state,
				fetchingDidError: false,
				isFetching: false,
				recipes: state.recipes.concat(action.payload.recipes)
			});

		default:
			return state
	}
}