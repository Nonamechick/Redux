const store = require('./app/store');
const { burgerActions } = require('./features/burger/burgerSlice');
const { fetchProducts } = require('./features/products/productSlice');
const pizzaActions = require('./features/pizza/pizzaSlice').pizzaActions;

console.log('Initial State', store.getState());

//  const unsubscribe = store.subscribe(()=>{
//     console.log('Update State',store.getState());
// })

store.subscribe(() => {
  console.log(
    'Updated State',
    JSON.stringify(store.getState(), null, 2)
  );
});

store.dispatch(fetchProducts());

// store.dispatch(pizzaActions.pizza_order());
// store.dispatch(pizzaActions.pizza_order());
// store.dispatch(burgerActions.burger_order());
// store.dispatch(burgerActions.burger_order());

//unsubscribe();