//import { connect } from 'react-redux'

const redux = require('redux');
const createStore=redux.createStore;
const ORDER_PIZZA = 'ORDER_PIZZA'
// Action
// const action = {
//     type: ORDER_PIZZA,
//     shop_name: "Pizaa shop"
// }

// Action creator
function orderPizza() {
    //     const action = {
    //     type: ORDER_PIZZA,
    //     shop_name: "Pizaa shop"
    // }
    return {
        type: ORDER_PIZZA,
        //payload: 90
    }
}

//Reducer
const initialState = {
    pizzaBase: 100,
    //toppings:['cheese']
}

const reducer=(state=initialState, action) => {
    switch(action.type) {
        case ORDER_PIZZA:
            return{
                ...state,
                pizzaBase:state.pizzaBase-1
            }
        default:
            return state;
    }
}

//Store
// 1 Store need to hold application

const store = createStore(reducer);

// 2 It exposes a method called getState which gives your application access to the current state in the store.
console.log('Initial state',store.getState());

// 3 Registers listeners via subscribe(listener)

const unsubscribe = store.subscribe(()=>console.log("Updated state", store.getState()));

// 4 Allows state to be updated via dispatch(action)

store.dispatch(orderPizza());
store.dispatch(orderPizza());
store.dispatch(orderPizza());
store.dispatch(orderPizza());
store.dispatch(orderPizza());
store.dispatch(orderPizza());
unsubscribe();