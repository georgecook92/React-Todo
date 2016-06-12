var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoApp = require('TodoApp');

describe( 'TodoApp', () => {

  it('should exist', () => {
    expect(TodoApp).toExist();
  });

  it('should add todo to the todos state on handleAddTodo' , () => {
    var todoText = "Test text";
    var todoApp = TestUtils.renderIntoDocument( <TodoApp /> );

    //empty initial state
    todoApp.setState({todos: []});

    todoApp.handleAddTodo(todoText);

    expect(todoApp.state.todos[0].text).toBe(todoText);

  });

  it('should toggle completed value when handle toggle called' , () => {
    var todoData = {
      id: 11,
      text: 'Test features',
      completed: false
    };

    var todoApp = TestUtils.renderIntoDocument( <TodoApp /> );
    todoApp.setState({todos: [todoData]});

    //check first item of array has completed value of false
    expect(todoApp.state.todos[0].completed).toBe(false);
    //call handle toggle with id
    todoApp.handleToggle(todoData.id);
    //check value changes
    expect(todoApp.state.todos[0].completed).toBe(true);
  });

} );
