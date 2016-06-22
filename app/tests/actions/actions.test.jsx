var expect = require('expect');
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import firebase, {firebaseRef} from 'app/firebase/';
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

  it('should generate updateTodo action', () => {

    var action = {
      type: 'UPDATE_TODO',
      id: 1,
      updates: {completed: false}
    }

    var response = actions.updateTodo(action.id, action.updates);
    expect(response).toEqual(action);

  });

  describe('Tests with firebase todos', () => {

    var testTodoRef;

    beforeEach( (done) => {
      testTodoRef = firebaseRef.child('todos').push();
      testTodoRef.set({
        text: 'something to do',
        completed: false,
        createdAt: 8585783
      }).then( () => done() );
    });

    afterEach( (done) => {
      testTodoRef.remove().then( () => done() );
    } );

    it('should toggle todo and dispatch UPDATE_TODO action', (done) => {
      const store = createMockStore({});
      const action = actions.startToggleTodo(testTodoRef.key, true);

      store.dispatch(action).then( () => {
        const mockActions = store.getActions();

        expect(mockActions[0]).toInclude({
          type: 'UPDATE_TODO',
          id: testTodoRef.key
        });
        expect(mockActions[0].updates).toInclude({
          completed: true
        });
        expect(mockActions[0].updates.completedAt).toExist();
        done();

      }, done );



    });

  });



});
