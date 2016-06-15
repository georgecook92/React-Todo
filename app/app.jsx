var React = require('react');
var ReactDOM = require('react-dom');
//destructuring syntax - same as - var Route = require('react-router').Route and so on
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var TodoApp = require('TodoApp');

var actions = require('actions');
var store = require('configureStore').configure();

store.subscribe( () => {
  console.log('New State', store.getState());
} );

store.dispatch( actions.addTodo('clean the yard') );
store.dispatch( actions.setSearchText('yard') );
store.dispatch( actions.toggleShowCompleted() );

//load foundation-sites - uses loaders also
$(document).foundation();

//app.css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  //router component
  <TodoApp />,
  document.getElementById('app')
);
