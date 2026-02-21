import React from 'react'
import { orderBurger } from './redux';
import {connect} from 'react-redux';

const BurgerBox = (props) => {
  

  return (
    <div className='container'>
        <h2 className='text'>Number of burger available - {props.burgerBase}</h2>
        <button className='btn' onClick={props.orderBurger}>Order burger</button>
    </div>
  )
}

const mapStateToProps =(state)=>{
  return{
    burgerBase:state.burger.burgerBase
  }
}
const mapDispatchToProps =(dispatch)=>{
  return{
    orderBurger :()=> dispatch(orderBurger())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(BurgerBox);