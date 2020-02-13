import { USERNAME } from './constants.js'

export const apiHandler = async ({ url, method, body, customUrl }) => {
  const options = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body,
  }

  try {
    const res = await fetch(`${url}/${USERNAME}${customUrl ? `/${customUrl}` : ''}`, options)

    if (res.ok) {
      const data = await res.json()
      return data
    }
  } catch (error) {
    throw new Error(error)
  }
}
