import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { customer_choice, pizza_order } from './pizzaSlice';
import { useState } from 'react';

export const PizzaView = () => {
  const pizzaBase = useSelector((state)=>state.pizza.pizzaBase);
  const dispatch = useDispatch();
  //console.log(dispatch);
  const [number,setNumber] = useState(1);

  return (
    <div>
        <h2>Number of pizza base-{pizzaBase}</h2>
        <input type="text" value={number}  onChange={(e)=>setNumber(Number(e.target.value))}/>
        <button onClick={()=>dispatch(customer_choice(number))}>Customer Choice</button>
      <button onClick={()=>dispatch(pizza_order())}>Order pizza</button>
    </div>
  )
}

export default PizzaView;