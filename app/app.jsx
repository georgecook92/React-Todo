var React = require('react');
var ReactDOM = require('react-dom');

var {Provider} = require('react-redux');
//destructuring syntax - same as - var Route = require('react-router').Route and so on
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
//connected version
import TodoApp from 'TodoApp';

var actions = require('actions');
var store = require('configureStore').configure();
var TodoAPI = require('TodoAPI');

import Login from 'Login';

store.dispatch( actions.startAddTodos() );

//load foundation-sites - uses loaders also
$(document).foundation();

//app.css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  //means that all of the app can access the redux store
  <Provider store={store}>

    <Router history={hashHistory}>
      <Route path="/" >
        <Route path="todos" component={TodoApp} />
        <IndexRoute component={Login} />
      </Route>
    </Router>

  </Provider>,
  document.getElementById('app')
);
