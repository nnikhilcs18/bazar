//store in store folder 

import {combineReducers,createStore,applyMiddleware} from 'redux';
import userReducer from "./reducer/user";
import createSagaMiddleWare from "redux-saga"
import { watecherSage } from './middleware/rootSaga';
import productReducer from './reducer/product';
import getProduct from "./reducer/getProduct";
import categoryReducer from './reducer/category';
import registerReducer from './reducer/register'

const reducer=combineReducers({
    user:userReducer,
    productReducer: productReducer,
    categoryReducer: categoryReducer,
    reguser:registerReducer,
    fetchProduct:getProduct,
});

const sagaMiddleware=createSagaMiddleWare();

const middleware=[sagaMiddleware];

const store=createStore(reducer,{},applyMiddleware(...middleware));

sagaMiddleware.run(watecherSage)


export default store;