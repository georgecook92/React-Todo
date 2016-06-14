var $ = require('jquery');

module.exports = {

  setTodos: function(todos) {
    if($.isArray(todos)) {
      //convert to string
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
  },

  getTodos: function() {
    var stringTodos = localStorage.getItem('todos');
    var todos = [];

    try {
      todos = JSON.parse(stringTodos);
    } catch(e) {
    }
    return $.isArray(todos) ? todos : [];
  },

  filterTodos: function(todos,showCompleted,searchText ) {
    var filteredTodos = todos;

    //filter by showCompleted
    //callback gets called once per item in array
    filteredTodos = filteredTodos.filter( (todo) => {
      return !todo.completed || showCompleted;
    } );

    //filter by searchText

    filteredTodos  = filteredTodos.filter( (todo) => {
      var text = todo.text.toLowerCase();
      //return every item if no search
      return searchText.length === 0 || text.indexOf(searchText) > -1;

    } )

    //sort todos with non completed first
    //return -1 a should come before b || return 1 b should come before a || return 0 no change
    filteredTodos.sort( (a,b) => {
      if (!a.completed && b.completed) {
        return -1;
      }

      else if (a.completed && !b.completed) {
        return 1;
      } else {
        return 0;
      }
    } );

    return filteredTodos;
  }

}
