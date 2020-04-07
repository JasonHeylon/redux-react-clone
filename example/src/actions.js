import { ADD_TODO_ACTION_TYPE, REMOVE_TODO_ACTION_TYPE } from "./types";

let nextTodoId = 0;

export const addTodo = title => {
  return {
    type: ADD_TODO_ACTION_TYPE,
    payload: {
      id: ++nextTodoId,
      title
    }
  };
};

export const removeTodo = todoId => {
  return {
    type: REMOVE_TODO_ACTION_TYPE,
    payload: {
      id: todoId
    }
  };
};
