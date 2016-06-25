var uuid = require('node-uuid');
var moment = require('moment');

export var searchTextReducer = (state_search_text = '',action) => {
  switch (action.type) {
    case 'SET_SEARCH_TEXT':
      return action.searchText;

    default:
      return state_search_text;

  }
};

export var showCompletedReducer = (state_show_completed = false, action) => {
  switch (action.type) {
    case 'TOGGLE_SHOW_COMPLETED':
    //returns opposite
      return !state_show_completed;

    default:
      return state_show_completed;
  }

};

export var todosReducer = (state_todos = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state_todos,
        action.todo
      ];

      //toggle_todo - match id in array - completed = !completed - update completed at

      case 'UPDATE_TODO':
        return state_todos.map( (todo) => {
          if (todo.id === action.id) {
            return {
              ...todo,
              ...action.updates
            }
          } else {
            return todo;
          }
        } );

      case 'ADD_TODOS':
        return [
          ...state_todos,
          ...action.todos
        ];

    default:
      return state_todos;
  }
};

export var authReducer = (auth_state={}, action) => {

  switch (action.type) {
    case 'LOGIN':
      return {
        uid: action.uid
      };

    case 'LOGOUT':
      return {};

    default:
      return auth_state;

  }

}
