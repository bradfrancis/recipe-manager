import fetch from "cross-fetch";
import {
	REQUEST_RECIPES,
	RECEIVE_RECIPES,
} from "../constants/ActionTypes";

function requestRecipes(query, offset) {
	return {
		type: REQUEST_RECIPES,
		payload: {
			query,
			offset
		}
	}
}

function receiveRecipes(json, append) {
	return {
		type: RECEIVE_RECIPES,
		payload: {
			recipes: json.hits.map(hit => hit.recipe),
			append
		},
		error: false
	}
}

function receiveRecipesDidError(err) {
	return {
		type: RECEIVE_RECIPES,
		payload: new Error(err.message),
		error: true
	}
}

export function fetchRecipes(query, offset, append) {
	const APP_ID = '7a6d9577';
	const APP_KEY = '5152014cac5e42eed2aa82f005fa9ac9';
	const resultsPerQuery = 12;
	const from = offset || 0;
	const to = from + resultsPerQuery;

	return dispatch => {
		dispatch(requestRecipes(query, offset));

		return fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=${from}&to=${to}`)
			.then(res => res.json())
			.then(json => dispatch(receiveRecipes(json, append)))
			.catch(err => dispatch(receiveRecipesDidError(err)));
	}
}