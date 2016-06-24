var React = require('react');
var ReactDOM = require('react-dom');

var {Provider} = require('react-redux');
//destructuring syntax - same as - var Route = require('react-router').Route and so on
var {hashHistory} = require('react-router');


var actions = require('actions');
var store = require('configureStore').configure();
import firebase from 'app/firebase/';

import router from 'app/router/';

firebase.auth().onAuthStateChanged( (user) => {
  if (user) {
    hashHistory.push('/todos');
  } else {
    hashHistory.push('/');
  }
} );

store.dispatch( actions.startAddTodos() );

//load foundation-sites - uses loaders also
$(document).foundation();

//app.css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  //means that all of the app can access the redux store
  <Provider store={store}>
    {router}
  </Provider>,
  document.getElementById('app')
);
