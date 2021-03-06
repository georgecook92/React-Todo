var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {

  beforeEach( () => {
    localStorage.removeItem('todos');
  } );

  it('should exist', () => {
    expect(TodoAPI).toExist();
  });


  describe('filterTodos', () => {

    var todos = [{
      id: 1,
      text: 'some text here',
      completed: true
    },
    {
      id: 2,
      text: 'other text here',
      completed: false
    },
    {
      id: 3,
      text: 'some text here',
      completed: true
    }];

    it('should return all items if show completed is true', () => {

      var filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos.length).toBe(3);

    });

    it('should return 1 item if show completed is false', () => {

      var filteredTodos = TodoAPI.filterTodos(todos, false, '');
      expect(filteredTodos.length).toBe(1);

    });

    it('should sort by completed status', () => {

      var filteredTodos = TodoAPI.filterTodos(todos, true, '');

      expect(filteredTodos[0].completed).toBe(false);

    });

    it('should filter todos by search text', () => {

      var filteredTodos = TodoAPI.filterTodos(todos, true, 'some');
      expect(filteredTodos.length).toBe(2);

    });

    it('should return all todos if search is empty', () => {

      var filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos.length).toBe(3);

    });



  });

});
