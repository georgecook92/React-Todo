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

    //expect created at to be a number
    expect(todoApp.state.todos[0].createdAt).toBeA('number');

  });

  it('should toggle completed value when handle toggle called' , () => {
    var todoData = {
      id: 11,
      text: 'Test features',
      completed: false,
      createdAt: 0,
      completedAt: undefined
    };

    var todoApp = TestUtils.renderIntoDocument( <TodoApp /> );
    todoApp.setState({todos: [todoData]});

    //check first item of array has completed value of false
    expect(todoApp.state.todos[0].completed).toBe(false);
    //call handle toggle with id
    todoApp.handleToggle(todoData.id);
    //check value changes
    expect(todoApp.state.todos[0].completed).toBe(true);

    //expect completedAt toBe a number
    expect(todoApp.state.todos[0].completedAt).toBeA('number');

  });

  it('should toggle completed to undefined when todo item completed at is removed' , () => {
    var todoData = {
      id: 11,
      text: 'Test features',
      completed: true,
      createdAt: 0,
      completedAt: 1
    };

    var todoApp = TestUtils.renderIntoDocument( <TodoApp /> );
    todoApp.setState({todos: [todoData]});

    //check first item of array has completed value of false
    expect(todoApp.state.todos[0].completed).toBe(true);
    //call handle toggle with id
    todoApp.handleToggle(todoData.id);
    //check value changes
    expect(todoApp.state.todos[0].completed).toBe(false);

    //expect completedAt toBe a number
    expect(todoApp.state.todos[0].completedAt).toNotExist();




  });

} );
