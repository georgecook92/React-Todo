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
});
