import {createStore, applyMiddleware, combineReducers} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';

import crudRed from '../ducks/crudRed';
import UsersRed from '../ducks/UsersRed';
import ApplyRed from '../ducks/ApplyRed';

const reducers = combineReducers({crudRed, UsersRed, ApplyRed});


export default createStore(reducers, applyMiddleware(promiseMiddleware));