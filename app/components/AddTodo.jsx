var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var AddTodo = React.createClass({

  onFormSubmit: function(e) {
    e.preventDefault();
    //added by connect
    var {dispatch} = this.props;
    var text = this.refs.todoText.value;

    if (text.length > 0) {
      this.refs.todoText.value = '';
      dispatch(actions.startAddTodo(text));
    } else {
      this.refs.todoText.focus();
    }

  },

  render: function() {

    return (
      <div className='container__footer'>
        <form onSubmit={this.onFormSubmit}>
          <input type='text' ref='todoText' placeholder='Add todo...' />
          <button className='button expanded'> Add Todo </button>
        </form>
    </div>
  );
  }
});

//does need properties off state - so no state is required in first function
export default connect()(AddTodo);
