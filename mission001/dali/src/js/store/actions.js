import { v4 as uuidv4 } from "uuid";

export default (type, payload, state) => {
  switch (type) {
    case "ADD_TODO": {
      return {
        ...state,
        todoList: state.todoList.concat({
          id: uuidv4(),
          todoText: payload,
          completed: false,
          editing: false,
        }),
      };
    }
    case "TOGGLE_TODO": {
      return {
        ...state,
        todoList: state.todoList.map(todo => ({
          ...todo,
          completed: todo.id === payload ? !todo.completed : todo.completed,
        })),
      };
    }
    case "DELETE_TODO": {
      return {
        ...state,
        todoList: state.todoList.filter(({ id }) => id !== payload),
      };
    }
    case "EDIT_TODO": {
      return {
        ...state,
        todoList: state.todoList.map(todo => ({
          ...todo,
          editing: todo.id === payload,
        })),
      };
    }
    case "UPDATE_TODO": {
      return {
        ...state,
        todoList: state.todoList.map(todo => {
          const updated = todo.id === payload.id;
          return updated
            ? {
                ...todo,
                todoText: payload.value,
                editing: false,
              }
            : todo;
        }),
      };
    }
    case "OUT_EDITMODE": {
      return {
        ...state,
        todoList: state.todoList.map(todo => ({
          ...todo,
          editing: false,
        })),
      };
    }
  }
};
