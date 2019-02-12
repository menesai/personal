import {createStore, applyMiddleware, combineReducers} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';

import crudRed from '../ducks/crudRed';
import UsersRed from '../ducks/UsersRed';

const reducers = combineReducers({crudRed, UsersRed});


export default createStore(reducers, applyMiddleware(promiseMiddleware));