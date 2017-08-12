'use strict';

document.addEventListener('DOMContentLoaded', function () {
  // reducer
  var counter = function counter() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var action = arguments[1];

    switch (action.type) {
      case 'INCREMENT':
        return state + 1;
      case 'DECREMENT':
        return state - 1;
      default:
        return state;
    }
  };

  /*
    Store: 
      1. holds applications state object
      2. dispatch actions
  */
  var _Redux = Redux,
      createStore = _Redux.createStore; // obj destructuring


  // specifying reducer to tell how state is updated based on actoin

  var store = createStore(counter); // counter passed to store object will manage state updates

  var render = function render() {
    document.body.innerText = store.getState();
  };

  render(); //rendering initial state

  // Store has three important methods

  /*
    getState: returns state of application
  */
  console.log(store.getState());

  /*
    dispatch: dispatch actions to change state of application. 
  */
  store.dispatch({ type: 'INCREMENT' }); // updating state
  console.log(store.getState());

  /*
    Subscribe: let syou register callback that redux store will call
    whenever an action has been dispatched
      - can use to update UI of application whenever state has changed
  */
  store.subscribe(render);

  document.addEventListener('click', function () {
    store.dispatch({ type: 'INCREMENT' });
  });
});