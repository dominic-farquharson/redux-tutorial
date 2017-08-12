'use strict'
document.addEventListener('DOMContentLoaded', function() {
  // reducer - specifies how next state is calculated
  const counter = (state = 0, action) => {
      switch(action.type) {
          case 'INCREMENT':
            return state + 1;
          case 'DECREMENT':
            return state - 1;
          default:
            return state; 
      }
  }

  /*
    Store: 
      1. holds applications state object
      2. dispatch actions
  */
  const { createStore } = Redux; // obj destructuring
  

  // adding onincrement, ondecrement props as callbacks
  const Counter = ({ value, onIncrement, onDecrement }) => (
    <div>
      <h1>{value}</h1>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
    </div>
  );


  // specifying reducer to tell how state is updated based on actoin
  const store = createStore(counter); // counter passed to store object will manage state updates

  // called whenever state changes
  const render = () => {
    ReactDOM.render(
      <Counter 
        value={store.getState()}
        onIncrement={() => 
          store.dispatch({ 
            type: 'INCREMENT'
          })      
        }
        onDecrement={() =>
          store.dispatch({
            type: 'DECREMENT'
          })
        }
      />,
      document.querySelector('#root')
    )
  }


  // render runs whenever state changes
  store.subscribe(render);
  render(); //rendering initial state

})
