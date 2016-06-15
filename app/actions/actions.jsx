export var setSearchtext = (searchText) => {
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

//toggle show completed() TOGGLE_SHOW_COMPLETED

export var toggleShowCompleted = () => {
  return {
    type: 'TOGGLE_SHOW_COMPLETED'
  };
};

//toggleTodo(id) type, id
export var toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
};
