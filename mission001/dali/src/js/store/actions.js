export default (type, payload, state) => {
  switch(type){
    case 'ADD_TODO': {
      return {
        ...state,
        todoList: state.todoList.concat({
          id: 1,
          todoText: payload,
          completed: false,
        })
      }
    }
    case 'TOGGLE_TODO': {
      return {
        ...state,
        todoList: state.todoList.map(todo => ({
          ...todo,
          completed: todo.id === payload 
          ? !todo.completed 
          : todo.completed,
        }))
      }
    }
    case 'DELETE_TODO': {
      return {
        ...state,
        todoList: state.todoList.filter(({id})=> id !== payload)
      }
    }
  }
}
