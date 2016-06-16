var React = require('react');
var ReactDOM = require('react-dom');

var {Provider} = require('react-redux');
//destructuring syntax - same as - var Route = require('react-router').Route and so on
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var TodoApp = require('TodoApp');

var actions = require('actions');
var store = require('configureStore').configure();
var TodoAPI = require('TodoAPI');

store.subscribe( () => {
  var state = store.getState();
  console.log('New State', state);
  TodoAPI.setTodos(state.todos);
} );

var initialTodos = TodoAPI.getTodos();
store.dispatch(actions.addTodos(initialTodos));

//load foundation-sites - uses loaders also
$(document).foundation();

//app.css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  //means that all of the app can access the redux store
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('app')
);
