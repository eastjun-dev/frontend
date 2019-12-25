export const getTodoList = async (username) => {
  return await fetch(`http://todo-api.roto.codes/${username}`)
}

export const createTodoItem = async (username, content) => {
  await fetch(`http://todo-api.roto.codes/${username}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      content,
    }),
  })
}

export const deleteTodoItem = async (username, id) => {
  await fetch(`http://todo-api.roto.codes/${username}/${id}`, {
    method: 'DELETE',
  })
}

export const toggleTodoItem = async (username, id) => {
  await fetch(`http://todo-api.roto.codes/${username}/${id}/toggle`, {
    method: 'PUT',
  })
}


