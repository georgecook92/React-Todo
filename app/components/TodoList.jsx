var React = require('react');
var {connect} = require('react-redux');
//connected version - default - if it was {Todo} it would be the plain react version
import Todo from 'Todo';

var TodoAPI = require('TodoAPI');

export var TodoList = React.createClass({

  render: function() {
    var {todos, showCompleted, searchText} = this.props;

    var renderTodos = () => {

      if (todos.length === 0) {
        return (
          <p className='container__message'>Nothing to do.</p>
        );
      }

      //function gets called for each item in
      //only render specified ones
      return TodoAPI.filterTodos(todos, showCompleted, searchText).map( (todo) => {
        return (
          <Todo key={todo.id} {...todo} />
        );
      } );
    };

    return (
      <div>
        {renderTodos()}
      </div>
    )

  }

});

export default connect(
  (state) => {
    return state;
  }
)(TodoList);
