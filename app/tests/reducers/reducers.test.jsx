var expect = require('expect');
var reducers = require('reducers');
var df = require('deep-freeze-strict');




describe('REDUCERS', () => {
  describe('Search text reducer', () => {
    it('should setSearchText', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'text'
      }

      var response = reducers.searchTextReducer(df(''), df(action));
      expect(response).toEqual(action.searchText);

    });
  });
  describe('ShowCompletedReducer', () => {
    it('should toggle show completed', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      }

      var response = reducers.showCompletedReducer(df(false), df(action));
      expect(response).toEqual(true);

    });
  });
  describe('todosReducer', () => {
    it('should add new todo', () => {
      var action = {
        type: 'ADD_TODO',
        todo: {
          id: 'abc123',
          text: 'something todo',
          completed: false,
          createdAt: 342645745,

        }
      }
      var response = reducers.todosReducer(df([]), df(action));
      expect(response.length).toEqual(1);
      expect(response[0]).toEqual(action.todo);
    });

    it('should update todo item', () => {
      var todos = [{
        id: '1',
        text: 'text',
        completed: true,
        createdAt: 123,
        completedAt: 125
      }];

      var updates = {
        completed: false,
        completedAt: null
      }

      var action = {
        type: 'UPDATE_TODO',
        id: todos[0].id,
        updates
      };
      var response = reducers.todosReducer( df(todos) , df(action) );

      expect(response[0].completed).toEqual(updates.completed);
      expect(response[0].completedAt).toEqual(updates.completedAt);
      //checks you don't lose any values by using the spread operator in the updateTodo case in reducer
      expect(response[0].text).toEqual(todos[0].text);
    });

    it('should add existing todos' , () => {

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

      var result = reducers.todosReducer(df([]), df(action) );

      expect(result.length).toEqual(1);
      expect(result[0]).toEqual(todos[0]);

    });

  });

  describe('authReducer', () => {
    it('should store uid on login', () => {
      const action = {
        type: 'LOGIN',
        uid: 'abc123'
      };

      const result = reducers.authReducer( undefined, df(action) );

      expect(result).toEqual({
        uid: action.uid
      });

    });

    it('should wipe auth on logout', () => {

      const authData = {
        uid: '123abc'
      }

      const action = {
        type: 'LOGOUT'
      }

      const result = reducers.authReducer( df(authData), df(action) );

      expect(result).toEqual({});

    });

  });


});
