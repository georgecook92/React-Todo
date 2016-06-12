var React = require('react');
var Todo = require('Todo');

var TodoList = React.createClass({

  render: function() {
    var {todos} = this.props;

    var renderTodos = () => {
      //function gets called for each item in
      return todos.map( (todo) => {
        //have to have a key property so react can keep a track
        //... spread operator - combined with destructuring - creates props for all properties of todo
        return (
          <Todo key={todo.id} {...todo} onToggle={this.props.onToggle} />
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

module.exports = TodoList;
