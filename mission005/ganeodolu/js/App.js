import { apiHandler } from '../util/api.js'
import SearchStoreName from './SearchStoreName.js'
import ShowStoreList from './ShowStoreList.js'
import ShowHistoryList from './ShowHistoryList.js'

function App() {

    const $targetSearchInput = document.querySelector('#txt-search')
    const $targetSearchButton = document.querySelector('.btn-search')
    const $targetDeleteButton = document.querySelector('.btn-delete')
    $targetSearchInput.focus()

    const searchStoreName = new SearchStoreName({
        $targetInput: $targetSearchInput,
        $targetButton: $targetSearchButton,
        $targetDelete: $targetDeleteButton,
        onAccessSearch: async (keyword, page) => {
            const data = await apiHandler({
                apiKeyword: keyword,
                apiPage: page
            })
            showHistoryList.setState(keyword)
            showStoreList.setState(data, keyword, page)
        },
        onClickDelete: () => {
            showHistoryList.render()
        }
    })

    const $targetHistory = document.querySelector('#searched')
    const showHistoryList = new ShowHistoryList({
        $target: $targetHistory,
        data: []
    })

    const $targetShowResult = document.querySelector('.body')
    const showStoreList = new ShowStoreList({
        $target: $targetShowResult,
        data: [],
        keyword: [],
        page: []
    })
}

new App()