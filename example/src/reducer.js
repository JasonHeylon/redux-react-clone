import { ADD_TODO_ACTION_TYPE, REMOVE_TODO_ACTION_TYPE } from "./types";

export default (state, action) => {
  switch (action.type) {
    case ADD_TODO_ACTION_TYPE:
      return { ...state, todos: [...state.todos, action.payload] };
    case REMOVE_TODO_ACTION_TYPE:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload.id)
      };
    default:
      return state;
  }
};
