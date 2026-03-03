import {createSlice} from '@reduxjs/toolkit';
import { pizza_order as pizzaOrdered } from '../pizza/pizzaSlice';

//const createSlice = require('@reduxjs/toolkit').createSlice;
const initialState = {
    burgerBase: 666
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
        builder.addCase(pizzaOrdered,(state)=>{
            state.burgerBase--;
        })
    }
})

export default burgerSlice.reducer;
export const {burger_order} = burgerSlice.actions;