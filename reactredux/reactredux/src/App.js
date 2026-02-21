import PizzaBox from "./components/PizzaBox";
import './App.css';
import {Provider} from 'react-redux';
import store from "./components/redux/store";
//import HooksContainer from "./components/HooksContainer";
import BurgerBox from "./components/BurgerBox";
import CustomerChoice from "./components/CustomerChoice";

function App() {
  return (
    <Provider store={store}>
      <PizzaBox/>
      <BurgerBox/> 
      {/* <HooksContainer/> */}
      <CustomerChoice />
    </Provider>
  );
}

export default App;
