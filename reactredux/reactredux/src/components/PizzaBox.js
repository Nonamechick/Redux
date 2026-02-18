import React from 'react'
import { orderPizza } from './redux';

const PizzaBox = () => {
  console.log(props);
  

  return (
    <div className='container'>
        <h2 className='text'>Number of pizza available - 100</h2>
        <button className='btn'>Order pizza</button>
    </div>
  )
}

const mapStateToProps =(state)=>{
  return{
    pizzaBase:state.pizzaBase
  }
}
const mapDispatchToProps =(dispatch)=>{
  return{
    orderPizza :()=> dispatch(orderPizza())
  }
}

export default PizzaBox