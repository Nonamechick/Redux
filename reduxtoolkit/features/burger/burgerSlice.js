const { pizzaActions } = require('../pizza/pizzaSlice');

const createSlice = require('@reduxjs/toolkit').createSlice;
const initialState = {
    burgerBase: 100
}
const burgerSlice = createSlice({
    name:'burger',
    initialState,
    reducers:{
        burger_order: (state,action)=>{
            state.burgerBase--;
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(pizzaActions.pizza_order,(state)=>{
            state.burgerBase--;
        })
    }
})
console.log(burgerSlice);
module.exports = burgerSlice.reducer; // Default export 
module.exports.burgerActions = burgerSlice.actions; // Named export