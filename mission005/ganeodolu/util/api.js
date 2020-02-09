import { API_NAME, ERROR_NAME } from './constant.js'

const apiHandler = async ({apiPage, apiKeyword}) => {
    try {
        const res = await fetch(`${API_NAME.URI}searchKeyword=${apiKeyword}&perPage=10&page=${apiPage}`)
        if (res.ok) {
            const data = await res.json()
            return data
        }
    } catch (error) {
        throw new Error(ERROR_NAME.NO_ANSWER)
    }
}

export { apiHandler }