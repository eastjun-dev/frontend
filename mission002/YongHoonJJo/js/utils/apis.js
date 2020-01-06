const baseUrl = 'http://todo-api.roto.codes'

export const getTodoList = async (username) => {
  return await fetch(`${baseUrl}/${username}`)
}

export const createTodoItem = async (username, content) => {
  await fetch(`${baseUrl}/${username}`, {
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
  await fetch(`${baseUrl}/${username}/${id}`, {
    method: 'DELETE',
  })
}

export const toggleTodoItem = async (username, id) => {
  await fetch(`${baseUrl}/${username}/${id}/toggle`, {
    method: 'PUT',
  })
}


