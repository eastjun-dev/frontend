import { apiHandler } from '../util/api.js'
import SearchStoreName from './SearchStoreName.js'
import ShowStoreList from './ShowStoreList.js'
import HistoryStoreList from './HistoryStoreName.js'

function App(){

    const $targetSearchInput = document.querySelector('#txt-search')
    const $targetSearchButton = document.querySelector('.btn-search')
    $targetSearchInput.focus()
    const searchStoreName = new SearchStoreName({
        $targetInput: $targetSearchInput,
        $targetButton: $targetSearchButton,
        onSearch: async (keyword, page) => {
            const data = await apiHandler({
                apiKeyword: keyword, 
                apiPage: page})
            console.log(data)
            showStoreList.setState(data, page)
        } 
    })

    const $targetShowResult = document.querySelector('.list')
    const showStoreList = new ShowStoreList({
        $target: $targetShowResult,
        data: [],
        page: []
    })

    const historyStoreList = new HistoryStoreList({})
}

new App()