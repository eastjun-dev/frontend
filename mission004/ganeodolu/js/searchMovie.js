export default function SearchMovie({ $targetSearch, $targetSearchIcon, onClickSearch }) {

    $targetSearch.addEventListener('keypress', async (e) => {
        if (e.key === 'Enter') {
            let searchKeyword = e.target.value
            if (searchKeyword) {
                onClickSearch(searchKeyword)
                sessionStorage.setItem('getKeyword', searchKeyword)
            }
        }
    })

    $targetSearchIcon.addEventListener('click', (e) => {
        searchKeyword = e.target.previousElementSibling.value
        if (searchKeyword) {
            onClickSearch(searchKeyword)
            sessionStorage.setItem('getKeyword', searchKeyword)
        }
    })

    $targetSearch.addEventListener('focus', (e) => {
        e.target.value = ''
    })
}