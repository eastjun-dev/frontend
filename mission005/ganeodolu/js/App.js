import { apiHandler } from '../util/api.js'
import SearchStoreName from './SearchStoreName.js'
import ShowStoreList from './ShowStoreList.js'
import ShowHistoryList from './ShowHistoryList.js'
import ManagePage from './ManagePage.js'
import ShowPage from './ShowPage.js'

function App() {
    const $targetSearchInput = document.querySelector('#txt-search')
    const $targetSearchButton = document.querySelector('.btn-search')
    const $targetDeleteButton = document.querySelector('.btn-delete')
    $targetSearchInput.focus()

    const searchStoreName = new SearchStoreName({
        $targetInput: $targetSearchInput,
        $targetButton: $targetSearchButton,
        $targetDelete: $targetDeleteButton,
        onAccessSearch: async (page, keyword) => {
            const data = await apiHandler({
                apiPage: page,
                apiKeyword: keyword
            })
            const totalPage = data.total
            showHistoryList.setState(keyword)
            showStoreList.setState(data, keyword, page)
            showPage.setState(page, totalPage)
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

    const $targetShowPage = document.querySelector('.paging')
    const $targetTotal = document.querySelector('.total')
    const managePage = new ManagePage({
        $target: $targetShowPage,
        $targetHistory: $targetHistory,
        onClickPage: async (page, keyword) => {
            const data = await apiHandler({
                apiPage: page,
                apiKeyword: keyword
            })
            const totalPage = data.total
            showStoreList.setState(data, keyword, page)
            showPage.setState(page, totalPage)
        }
    })
    const showPage = new ShowPage({
        $target: $targetShowPage,
        $page: [],
        $totalPage: [],
        $pageOffset: [],
    })
}

new App()