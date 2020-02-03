import { fetchSearchMovie } from './api.js'

export default function SearchMovie({ $targetSearch, $targetSearchIcon, onClickSearch, onScroll }) {

    let searchKeyword
    let pageNumber = 1;
    let scrollTimer;

    $targetSearch.addEventListener('keypress', async (e) => {
        if (e.key === 'Enter') {
            searchKeyword = e.target.value
            console.log(searchKeyword)
            if (searchKeyword) {
                onClickSearch(searchKeyword)
                pageNumber = 1
            }
        }
    })

    $targetSearchIcon.addEventListener('click', (e) => {
        console.log(e.target.previousElementSibling.value)
        searchKeyword = e.target.previousElementSibling.value
        if (searchKeyword) {
            onClickSearch(searchKeyword)
            pageNumber = 1
        }
    })

    window.onscroll = async function (e) {
        if ((window.pageYOffset + document.body.clientHeight) >= document.body.scrollHeight * 0.95) {
            console.log(searchKeyword, pageNumber)
            if (!scrollTimer) {
                scrollTimer = setTimeout(async function () {
                    scrollTimer = null;
                    pageNumber++
                    onScroll(searchKeyword, pageNumber)
                }, 200)
            }
        }
    }

    $targetSearch.addEventListener('focus', (e) => {
        e.target.value = ''
    })
}