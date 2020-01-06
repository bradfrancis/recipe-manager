import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { library } from '@fortawesome/fontawesome-svg-core';
import { 
	faUtensils, 
	faWeight,
	faBalanceScale,
	faSearch,
	faBatteryThreeQuarters
} from '@fortawesome/free-solid-svg-icons'
import App from './components/App';
import './index.css';


const loggerMiddleware = createLogger();

// Font Awesome library
library.add(faBatteryThreeQuarters, faBalanceScale, faWeight, faUtensils, faSearch);

const store = createStore(
	rootReducer,
	applyMiddleware(thunkMiddleware, loggerMiddleware)
);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>
	,document.getElementById('root')
);