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
        text: 'text'
      }
      var response = reducers.todosReducer(df([]), df(action));
      expect(response.length).toEqual(1);
      expect(response[0].text).toEqual(action.text);
    });

    it('should toggle todo item', () => {
      var todos = [{
        id: '1',
        text: 'text',
        completed: true,
        createdAt: 123,
        completedAt: 125
      }];
      var action = {
        type: 'TOGGLE_TODO',
        id: '1'
      };
      var response = reducers.todosReducer( df(todos) , df(action) );
      expect(response[0].completed).toEqual(false);
      expect(response[0].completedAt).toEqual(undefined);
    });

  });


});
