'use strict';

document.addEventListener('DOMContentLoaded', function () {
  // reducer - specifies how next state is calculated
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


  // adding onincrement, ondecrement props as callbacks

  var Counter = function Counter(_ref) {
    var value = _ref.value,
        onIncrement = _ref.onIncrement,
        onDecrement = _ref.onDecrement;
    return React.createElement(
      'div',
      null,
      React.createElement(
        'h1',
        null,
        value
      ),
      React.createElement(
        'button',
        { onClick: onIncrement },
        '+'
      ),
      React.createElement(
        'button',
        { onClick: onDecrement },
        '-'
      )
    );
  };

  // specifying reducer to tell how state is updated based on actoin
  var store = createStore(counter); // counter passed to store object will manage state updates

  // called whenever state changes
  var render = function render() {
    ReactDOM.render(React.createElement(Counter, {
      value: store.getState(),
      onIncrement: function onIncrement() {
        return store.dispatch({
          type: 'INCREMENT'
        });
      },
      onDecrement: function onDecrement() {
        return store.dispatch({
          type: 'DECREMENT'
        });
      }
    }), document.querySelector('#root'));
  };

  // render runs whenever state changes
  store.subscribe(render);
  render(); //rendering initial state
});