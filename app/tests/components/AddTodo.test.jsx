var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var AddTodo = require('AddTodo');

describe( 'AddTodo', () => {

  it('should exist', () => {
    expect(AddTodo).toExist();
  });

  it('should call onAddTodo prop if valid todo entered', () => {
    //create spy
    var spy = expect.createSpy();
    //render form into dom
    var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
    //select the form via jQuery
    var $el = $(ReactDOM.findDOMNode(addTodo));
    //set text value through the ref
    addTodo.refs.todoText.value = 'Check mail';
    //first dom node
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith('Check mail');
  });

  it('should not call onAddTodo prop if invalid todo entered', () => {
    //create spy
    var spy = expect.createSpy();
    //render form into dom
    var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
    //select the form via jQuery
    var $el = $(ReactDOM.findDOMNode(addTodo));
    //set text value through the ref
    addTodo.refs.todoText.value = '';
    //first dom node
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });





} );
