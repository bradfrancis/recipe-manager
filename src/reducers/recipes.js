import { 
	REQUEST_RECIPES,
	RECEIVE_RECIPES,
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
			if (action.error) {
				return Object.assign({}, state, {
					...state,
					isFetching: false,
					fetchingDidError: true
				});
			} else {
				const recipes = action.payload.append
					? state.recipes.concat(action.payload.recipes)
					: action.payload.recipes;

				return Object.assign({}, state, {
					...state,
					isFetching: false,
					fetchingDidError: false,
					recipes: recipes
				});
			}

		default:
			return state
	}
}