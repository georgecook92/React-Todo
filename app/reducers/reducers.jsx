export var searchTextReducer = (state_search_text = '',action) => {
  switch (action.type) {
    case 'SET_SEARCH_TEXT':
      return action.searchText;

    default:
      return state_search_text;

  }
};

//reducer showCompletedReducer state = false, action
//switch toggleShowCompleted caps

export var showCompletedReducer = (state_show_completed = false, action) => {
  switch (action.type) {
    case 'TOGGLE_SHOW_COMPLETED':
    //returns opposite
      return !state_show_completed;

    default:
      return state_show_completed;
  }

};
