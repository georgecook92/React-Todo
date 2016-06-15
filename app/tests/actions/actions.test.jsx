var expect = require('expect');
var actions = require('actions');

describe('actions', () => {

  it('should generate search text action', () => {
    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'text'
    };

    var response = actions.setSearchtext('text');

    expect(response).toEqual(action);

  });

  it('should generate addtodo action' , () => {

    var action = {
      type: 'ADD_TODO',
      text: 'text'
    }

    var response = actions.addTodo('text');
    expect(response).toEqual(action);

  });

  it('should generate toggleShowCompleted action' , () => {

    var action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    }

    var response = actions.toggleShowCompleted();
    expect(response).toEqual(action);

  });

  it('should generate toggleTodo action', () => {

    var action = {
      type: 'TOGGLE_TODO',
      id: 1
    }

    var response = actions.toggleTodo(1);
    expect(response).toEqual(action);

  });

});
