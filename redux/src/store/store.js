import {createStore,combineReducers,applyMiddleware} from 'redux';
import nameReducer from '../reducers/nameReducer';
import logger from 'redux-logger'

const store=createStore(combineReducers({nameReducer}),applyMiddleware(logger));
export default store;