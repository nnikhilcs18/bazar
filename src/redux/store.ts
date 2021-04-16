//store in store folder 

import {combineReducers,createStore,applyMiddleware} from 'redux';
import userReducer from "./reducer/user";
import createSagaMiddleWare from "redux-saga"
import { watecherSage } from './middleware/rootSaga';

const reducer=combineReducers({
user:userReducer
});

const sagaMiddleware=createSagaMiddleWare();
const middleware=[sagaMiddleware];
const store=createStore(reducer,{},applyMiddleware(...middleware));

sagaMiddleware.run(watecherSage)


export default store;