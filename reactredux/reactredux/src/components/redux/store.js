import {createStore} from 'redux';
import pizzareducer from './pizza/PizzaReducers';

const store = createStore(pizzareducer)

export default store;