import {createStore, applyMiddleware} from 'redux';
//import pizzareducer from './pizza/PizzaReducers';
import rootReducer from './rootReducer';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(logger)))

export default store;