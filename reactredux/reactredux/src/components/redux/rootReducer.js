import { combineReducers } from "redux";
import pizzareducer from "./pizza/PizzaReducers";
import burgerReducer from "./burger/BurgerReducers";

const rootReducer = combineReducers({
    pizza:pizzareducer,
    burger:burgerReducer
})

export default rootReducer;