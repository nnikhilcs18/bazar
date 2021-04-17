//store in store folder 

import {combineReducers,createStore,applyMiddleware} from 'redux';
import userReducer from "./reducer/user";
import createSagaMiddleWare from "redux-saga"
import { watecherSage } from './middleware/rootSaga';
import productReducer from './reducer/product';

const reducer=combineReducers({
user:userReducer,
productReducer:productReducer
});

const sagaMiddleware=createSagaMiddleWare();
const middleware=[sagaMiddleware];
const store=createStore(reducer,{},applyMiddleware(...middleware));

sagaMiddleware.run(watecherSage)


export default store;