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
  }
}
