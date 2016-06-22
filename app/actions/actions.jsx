import firebase, {firebaseRef} from 'app/firebase/';
import moment from 'moment';


export var setSearchText = (searchText) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText
  }
};

export var addTodo = (todo) => {
  return {
    type: 'ADD_TODO',
    todo
  }
};

export var startAddTodo = (text) => {
  return (dispatch, getState) => {
    var todo = {
      text,
      completed: false,
      createdAt: moment().unix(),
      completedAt: null
    }

    var todoRef = firebaseRef.child('todos').push(todo);

    return todoRef.then( () => {
      dispatch(addTodo({
        ...todo,
        id: todoRef.key
      }));
    });
  };
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
