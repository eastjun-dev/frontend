import { USERNAME, APIURL } from './constant.js'

const apiHandler = async ({ method, body, customUrl }) => {
    const options = {
        method,
        headers: {
            'Content-Type': 'application/json',
        },
        body
    }
    try {
        const res = await fetch(`${APIURL}/${USERNAME}${customUrl ? `/${customUrl}` : ''}`, options)
        if (res.ok){
            const data = await res.json()
            return data
        }
    } catch(error) {
        throw new Error(error)
    }
}


// const methods = {
//     get() {
//         return fetch(APIURL)
//     },
//     put(id) {
//         fetch(`${APIURL}/${id}/toggle`, {
//             method: 'PUT',
//         })
//     },
//     post(todoText) {
//         fetch(APIURL, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({
//                 content: todoText,
//             }),
//         })
//     },
//     delete(id) {
//         fetch(`${APIURL}/${id}`, {
//             method: 'DELETE',
//         })
//     }
// }

// const fetchData = async () => await methods.get().then(res => res.json())
// export { fetchData, methods }

export { apiHandler }