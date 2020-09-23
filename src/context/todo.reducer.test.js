import { SET_TODOS, ADD_TODO, DELETE_TODO, UPDATE_TODO } from "./todo.actions";
import { todoReducer } from "./todo.reducer";

describe("todo.reducer", () => {
  it("should add data to state.todos for type SET_TODOS", () => {
    const mockState = { todos: {} };
    const mockAction = {
      type: SET_TODOS,
      data: { 0: { description: "new todo!" } },
    };
    expect(todoReducer(mockState, mockAction)).toEqual({
      todos: {
        0: {
          description: "new todo!",
        },
      },
    });
  });

  it("should add data to state.todos for type ADD_TODO", () => {
    const mockState = { todos: {} };
    const mockAction = {
      type: ADD_TODO,
      data: { id: 0, description: "new todo!" },
    };
    expect(todoReducer(mockState, mockAction)).toEqual({
      todos: {
        0: {
          description: "new todo!",
        },
      },
    });
  });

  it("should remove data from state.todos for type DELETE_TODO", () => {
    const mockState = { todos: { 0: { description: "new todo!" }} };
    const mockAction = {
      type: DELETE_TODO,
      data: { id: 0 },
    };
    expect(todoReducer(mockState, mockAction)).toEqual({
      todos: {},
    });
  });

  it("should update data from state.todos for type UPDATE_TODO", () => {
    const mockState = { todos: { 0: { description: "new todo!" } } };
    const mockAction = {
      type: UPDATE_TODO,
      data: { id: 0, description: "updated value!" },
    };
    expect(todoReducer(mockState, mockAction)).toEqual({
      todos: {
         0: {
          description: "updated value!" 
         }
      },
    });
  });

  it("should do nothing for unrecognised type", () => {
    const mockState = { todos: {} };
    const mockAction = {
      type: "WRONG_TYPE",
      data: { id: 0, description: "new todo!" },
    };
    expect(todoReducer(mockState, mockAction)).toEqual(mockState);
  });
});
