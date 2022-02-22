/* import {createStore} from 'redux';
import rootReducer from '../reducers/index';

const store = createStore(rootReducer);

export default store; */

import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers'; 
export const store = createStore(rootReducer,compose(applyMiddleware(thunk),
typeof window.__REDUX_DEVTOOLS_EXTENSION__ === "undefined"
? (a) => a
: window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()));
