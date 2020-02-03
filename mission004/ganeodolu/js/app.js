import { fetchGetMovie, fetchSearchMovie } from './api.js'
import SearchMovie from './searchMovie.js'
import GetMovieList from './getMovieList.js'
import ShowMovieList from './showMovieList.js'

export default function App() {
    const $targetMovieList = document.querySelector('.main')
    const $targetLogo = document.querySelector('.logo')
    const $targetSearch = document.querySelector('.input-search')
    const $targetSearchIcon = document.querySelector('.material-icons')

    $targetLogo.addEventListener('click', (e) => {
        window.location.reload()
    })
    let keyword = sessionStorage.getItem('getKeyword')
    console.log(keyword)

    const getMovieList = new GetMovieList({
        onLoad: async () => {
            if (!keyword) {
                const data = await fetchGetMovie()
                showMovieList.setState(data)
            } else {
                const data = await fetchSearchMovie(keyword)
                showMovieList.setState(data)
            }
        },
        onScroll: async (pageNumber) => {
            const data = await fetchGetMovie(pageNumber)
            showMovieList.addSetState(data)
        },
    })

    const showMovieList = new ShowMovieList({
        $targetMovieList: $targetMovieList,
        data: [],
    })

    const searchMovie = new SearchMovie({
        $targetSearch: $targetSearch,
        $targetSearchIcon: $targetSearchIcon,
        onClickSearch: async (keyword) => {
            const data = await fetchSearchMovie(keyword)
            console.log(data)
            showMovieList.setState(data)
        },
        onScroll: async (keyword, pageNumber) => {
            const data = await fetchSearchMovie(keyword, pageNumber)
            console.log(data)
            showMovieList.addSetState(data)
        }
    })
    sessionStorage.removeItem('getKeyword')
}

