import { APIURL } from './constant.js'

const methods = {
    get() {
        return fetch(APIURL)
    },
    put(id) {
        fetch(`${APIURL}/${id}/toggle`, {
            method: 'PUT',
        })
    },
    post(todoText) {
        fetch(APIURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                content: todoText,
            }),
        })
    },
    delete(id) {
        fetch(`${APIURL}/${id}`, {
            method: 'DELETE',
        })
    }
}

const fetchData =  async () => await methods.get().then(res => res.json())
export { fetchData, methods }