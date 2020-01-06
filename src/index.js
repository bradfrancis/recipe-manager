import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './configureStore';
import configureFonts from './configureFonts';
import Root from './components/Root';
import './index.css';

// Configure Font Awesome library
configureFonts();

const store = configureStore();

ReactDOM.render(
	<Root store={store} />
	,document.getElementById('root')
);