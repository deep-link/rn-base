import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import actions from './actions';


const middleware = applyMiddleware(thunk);
let composeEnhancers = compose;
if (__DEV__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
}

const enHanceCreateStore = composeEnhancers(
    middleware,
)(createStore);

// ----------- this is our root reducers -------------
const rootReducer = combineReducers({
    actions,
});

// ------------- these are the actions -------------
export * from './actions';

const store = enHanceCreateStore(rootReducer);
export default store;
