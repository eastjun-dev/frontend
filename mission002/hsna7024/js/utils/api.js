const API_URL = "http://todo-api.roto.codes";

const request = async (uri, method) => {
  try {
    const res = await fetch(uri, method);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};

export const api = {
  getTodos: async username => request(`${API_URL}/${username}`),
  postTodo: async (username, todoText) => {
    return request(`${API_URL}/${username}`, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({ content: todoText })
    });
  },
  removeTodo: async (username, id) => {
    return request(`${API_URL}/${username}/${id}`, {
      method: "DELETE"
    });
  },
  toggleTodo: async (username, id) => {
    return request(`${API_URL}/${username}/${id}/toggle`, {
      method: "PUT"
    });
  }
};
