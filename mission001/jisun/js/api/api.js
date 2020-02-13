  
const URL = 'http://todo-api.roto.codes';

export let isLoading = true;

export const getData = async (username) => {
  return await fetch(`${URL}/${username}`);
};

export const putData = async (username, id) => {
  await fetch(`${URL}/${username}/${id}/toggle`, {
    method: 'PUT',
  }).then(() => {
    
  })
};

export const deleteData = async (username, id) => {
  await fetch(`${URL}/${username}/${id}`, {
    method: 'DELETE',
  })
};

export const postData = async (username, data) => {
  await fetch(`${URL}/${username}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      content: data,
    }),
  })
};