import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'react-router-redux';
// import { RouterContext, match, createMemoryHistory } from 'react-router'
import createLogger from 'redux-logger';
import rootReducer from './reducers'
import logger from 'redux-logger';
import thunk from 'redux-thunk'; // thunk sees if it's an object or a function

// const history = createMemoryHistory();
export default function configureStore(initialState = {}, history) {

	let finalCreateStore = compose(
		applyMiddleware(thunk, logger(), routerMiddleware(history))
	)(createStore)

	const store = finalCreateStore(rootReducer, initialState);
	if (module.hot) {
		module.hot.accept('./reducers', () => {
			const nextReducer = require('./reducers');
			store.replaceReducer(nextReducer);
		});
	}
	return store;
}
