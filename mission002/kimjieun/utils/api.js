const username = 'kimjieun'

export const apiHandler = async ({ url, method, body }) => {
  const options = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body,
  }

  try {
    const res = await fetch(`${url}/${username}`, options)

    if (res.ok) {
      const data = await res.json()
      return data
    }
  } catch (error) {
    throw new Error(error)
  }
}
