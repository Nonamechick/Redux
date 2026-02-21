import React, { useState } from 'react'
import { orderBurger } from './redux';
import {connect} from 'react-redux';

function CustomerChoice(props)  {
  const [number,setNumber] = useState(1);

  return (
    <div className='container'>
        <h2 className='text'>Number of burger available - {props.burgerBase}</h2>
        <input type='text' className='input-field' 
        placeholder='Enter your number' value={number}
        onChange={e=>setNumber(e.target.value)}/>
        <button className='btn' onClick={()=>props.orderBurger(number)}>Order burger</button>
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
    orderBurger :(number)=> dispatch(orderBurger(number))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CustomerChoice);