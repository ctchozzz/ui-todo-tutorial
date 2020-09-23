import { SET_TODOS, ADD_TODO, DELETE_TODO, UPDATE_TODO } from "./todo.actions";

export const todoReducer = (state, action) => {
  const { type, data } = action;
  switch (type) {
    case SET_TODOS:
      return { ...state, todos: data };
    case ADD_TODO:
      const todos = {
        ...state.todos,
        [data.id]: { description: data.description },
      };
      return { ...state, todos };
    case DELETE_TODO:
      if (data.id in state.todos) {
        delete state.todos[data.id]
      }
      return { ...state }
    case UPDATE_TODO:
      state.todos[data.id] = { description: data.description }
      return {...state}
    default:
      return state;
  }
};
