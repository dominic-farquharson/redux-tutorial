document.addEventListener('DOMContentLoaded', function() {
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
  // const { createStore } = Redux;
  

  // custom Redux store
const createStore = reducer => {
  // current state
  let state;
  let listeners = [];

  // returning state
  const getState = () => state;

  const dispatch = (action) => {
    state = reducer(state, action);
    // notifying every reducer
    listeners.forEach(listener => listener())
  }

  const subscribe = (listener) => {
    listeners.push(listener);
    // unsubcribe to listener
    return () => {
      listeners = listeners.filter(l => l !== listener)
    }

    // invoking dispatch, give intiial value
    dispatch({});
  }

  return {getState, dispatch, subscribe}
}







  // specifying reducer to tell how state is updated based on actoin
  const store = createStore(counter); // counter passed to store object will manage state updates

  const render = () => {
    document.body.innerText = store.getState();
  }

  render(); //rendering initial state

  // Store has three important methods

  /*
    getState: returns state of application
  */
  console.log(store.getState())

  /*
    dispatch: dispatch actions to change state of application. 
  */
  store.dispatch({ type: 'INCREMENT' }); // updating state
  console.log(store.getState())

  /*
    Subscribe: let syou register callback that redux store will call
    whenever an action has been dispatched
      - can use to update UI of application whenever state has changed
  */
  store.subscribe(render);

  document.addEventListener('click', () => {
    store.dispatch({ type: 'INCREMENT' })
  })

})
