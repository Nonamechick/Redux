import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { burger_order } from './burgerSlice';

function BurgerView() {
  const burgurBase = useSelector((state)=>state.burger.burgerBase);
  const dispatch = useDispatch();
  console.log(dispatch);
  
  return (
    <div>
      <h2>Number of Burger Buns-{burgurBase}</h2>
      <button onClick={()=>dispatch(burger_order())}>Order Burger</button>
    </div>
  )
}

export default BurgerView