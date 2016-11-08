import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from '../redux/store';
import { Provider } from 'react-redux'; // wraps around the enire app and passes as a prop
// configure and create the store
// createStore(reducers, initialState) []
import { syncHistoryWithStore } from 'react-router-redux';
// import { syncHistory } from 'react-router-redux';
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import createRoutes from './routes';
import { getTodos } from '../api/todos'
// import $ from 'jquery';

let initialState = window.__INITIAL_STATE__;
const store = configureStore(initialState, browserHistory);
const history = syncHistoryWithStore(browserHistory, store);

const routes = createRoutes(store);
// Provider connect store with components
ReactDOM.render(
	<Provider store={store}>
		<Router history= {history}>
			{routes}
		</Router>
	</Provider>, document.getElementById('app')
)
