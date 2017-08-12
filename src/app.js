// reducer
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
const { createStore } = Redux;
// specifying reducer to tell how state is updated based on actoin
const store = createStore(counter); // counter will manage state updates

// Store has three important methods

/*
  getState: returns state of application
*/
console.log(store.getState())

/*
  dispatch: dispatch actions to change state of applicatoin
*/
store.dispatch({ type: 'INCREMENT' }); // updating state
console.log(store.getState())

/*
  Subscribe: let syou register callback that redux store will call
  whenever an action has been dispatched
    - can use to update UI of application whenever state has changed
*/
store.subscribe(() => {
  document.body.innerText = store.getState();
})

document.addEventListener('click', () => {
  store.dispatch({ type: 'INCREMENT' })
})
