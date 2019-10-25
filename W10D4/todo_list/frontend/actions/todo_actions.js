
export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";

export const receiveTodos = (todoArr) => {
  return {
    type: RECEIVE_TODOS,
    todos: todoArr
  };
};

export const receiveTodo = (todo) => {
  return {
    type: RECEIVE_TODO,
    todo: todo
  };
};