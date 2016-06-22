var expect = require('expect');
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

var actions = require('actions');

var createMockStore = configureMockStore([thunk]);

describe('actions', () => {

  it('should generate search text action', () => {
    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'text'
    };

    var response = actions.setSearchText('text');

    expect(response).toEqual(action);

  });

  it('should generate addtodo action' , () => {

    var action = {
      type: 'ADD_TODO',
      todo: {
        id: '123dd',
        text: 'dsfsf',
        completed: false,
        createdAt: '0087643'
      }
    }

    var response = actions.addTodo(action.todo);
    expect(response).toEqual(action);

  });

//async - so done is needed
  it('should create todo and dispatch ADD_TODO', (done) => {
    const store = createMockStore({});
    const todoText = 'Todo item';

    store.dispatch( actions.startAddTodo(todoText) ).then( () => {
      const actions = store.getActions();
      expect( actions[0] ).toInclude({
        type: 'ADD_TODO'
      });

      expect(actions[0].todo).toInclude({
        text: todoText
      });
      done();
    } ).catch(done);
  });

  it('should generate addTodos action object', () => {
    var todos = [
      {
        id: 111,
        text: 'anything',
        completed: false,
        completedAt: undefined,
        createdAt: 33000
      }
    ];

    var action = {
      type: 'ADD_TODOS',
      todos
    };

    var response = actions.addTodos(todos);

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
