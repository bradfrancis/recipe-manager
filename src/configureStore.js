import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

const configureStore = () => {
	const loggerMiddleware = createLogger();
	const store = createStore(
		rootReducer,
		applyMiddleware(thunkMiddleware, loggerMiddleware)
	);

	console.log(store);
	return store;
}

export default configureStore;
