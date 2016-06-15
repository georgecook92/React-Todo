var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var {AddTodo} = require('AddTodo');

describe( 'AddTodo', () => {

  it('should exist', () => {
    expect(AddTodo).toExist();
  });

  it('should dispatch ADD_TODO when valied todo text', () => {
    var todoText = 'check mail';

    var action = {
      type: 'ADD_TODO',
      text: todoText
    }
    //create spy
    var spy = expect.createSpy();
    //render form into dom
    var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
    //select the form via jQuery
    var $el = $(ReactDOM.findDOMNode(addTodo));


    //set text value through the ref
    addTodo.refs.todoText.value = todoText;
    //first dom node
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(action);
  });

  it('should not dispatch ADD_TODO when invalid todoText', () => {
    //create spy
    var spy = expect.createSpy();
    //render form into dom
    var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
    //select the form via jQuery
    var $el = $(ReactDOM.findDOMNode(addTodo));
    //set text value through the ref
    addTodo.refs.todoText.value = '';
    //first dom node
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });





} );
