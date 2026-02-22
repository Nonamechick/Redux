import { combineReducers } from "redux";
import pizzareducer from "./pizza/PizzaReducers";
import burgerReducer from "./burger/BurgerReducers";
import productReducer from "./products/ProductsReducers";

const rootReducer = combineReducers({
    pizza:pizzareducer,
    burger:burgerReducer,
    product:productReducer
})

export default rootReducer;