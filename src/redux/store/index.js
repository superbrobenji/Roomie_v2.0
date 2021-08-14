import {
	createStore,
	applyMiddleware,
	compose,
} from 'redux';
import reduxThunk from 'redux-thunk';

import initialState from './initialState';
import reducers from '../reducers';

// eslint-disable-next-line operator-linebreak
const composeEnhancers =
	// eslint-disable-next-line operator-linebreak
	window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||
	compose;
const store = createStore(
	reducers,
	initialState,
	composeEnhancers(applyMiddleware(reduxThunk)),
);

export default store;
