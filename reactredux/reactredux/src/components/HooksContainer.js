import { useSelector,useDispatch } from "react-redux";
import { orderPizza } from './redux'

function HooksContainer  ()  {
  const pizzaBase = useSelector(state=>state.pizzaBase);
  const dispatch = useDispatch();
  //console.log(pizzaBase);

  return (
    <div className='container'>
        <h2 className='text'>Number of pizza available - {pizzaBase}</h2>
        <button className='btn' onClick={()=>dispatch(orderPizza())}>Order pizza</button>
    </div>
  )
}


export default HooksContainer;