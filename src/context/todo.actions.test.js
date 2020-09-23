import { setTodos, addTodo, deleteTodo, updateTodo, SET_TODOS, ADD_TODO, DELETE_TODO, UPDATE_TODO } from "./todo.actions";

describe("todo.actions", () => {
  describe("setTodos", () => {
    it("should dispatch action with type SET_TODOS", () => {
      expect(setTodos({ 0: { description: "todo!" } })).toEqual({
        type: SET_TODOS,
        data: {
          0: {
            description: "todo!",
          },
        },
      });
    });
  });

  describe("addTodo", () => {
    it("should dispatch action with type ADD_TODO", () => {
      expect(addTodo(0, "new todo!")).toEqual({
        type: ADD_TODO,
        data: {
          id: 0,
          description: "new todo!",
        },
      });
    });
  });
});

describe("deleteTodo", () => {
  it("should dispatch action with type DELETE_TODO", () => {
    expect(deleteTodo(0)).toEqual({
      type: DELETE_TODO,
      data: {
        id: 0,
      },
    });
  });
});

describe("updateTodo", () => {
  it("should dispatch action with type UPDATE_TODO", () => {
    expect(updateTodo(0, "new description!")).toEqual({
      type: UPDATE_TODO ,
      data: {
        id: 0,
        description: "new description!",
      },
    });
  });
});
