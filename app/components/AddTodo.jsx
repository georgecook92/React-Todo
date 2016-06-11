var React = require('react');

var AddTodo = React.createClass({

  onFormSubmit: function(e) {
    e.preventDefault();
    var text = this.refs.todoText.value;

    if (text.length > 0) {
      this.refs.todoText.value = '';
      this.props.onAddTodo(text);
    } else {
      this.refs.todoText.focus();
    }

  },

  render: function() {

    return (
      <form onSubmit={this.onFormSubmit}>
        <input type='text' ref='todoText' placeholder='Add todo...' />
        <button className='button expanded'> Add Todo </button>
      </form>
    )

  }

});

module.exports = AddTodo;
