import { APIURL } from './constant.js' 

export async function fetchData() {
    const res = await fetch(APIURL)
    return await res.json()
}