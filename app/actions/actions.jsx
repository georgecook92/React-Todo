export var setSearchText = (searchText) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText
  }
};

export var addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    text
  }
};

export var addTodos = (todos) => {
  return {
    type: 'ADD_TODOS',
    todos
  }
};

//toggle show completed() TOGGLE_SHOW_COMPLETED

export var toggleShowCompleted = () => {
  return {
    type: 'TOGGLE_SHOW_COMPLETED'
  };
};

//toggleTodo(id) type, id
export var toggleTodo = (id) => {
  //debugger;
  return {
    type: 'TOGGLE_TODO',
    id
  }
};
