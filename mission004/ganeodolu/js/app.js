import { fetchGetMovie, fetchSearchMovie } from '../util/api.js'
import GetMovieList from './getMovieList.js'
import SearchMovie from './searchMovie.js'
import ShowMovieList from './showMovieList.js'
import ScrollMovieList from './scrollMovieList.js'

export default function App() {

    const $targetMovieList = document.querySelector('.main')
    const $targetLogo = document.querySelector('.logo')
    const $targetSearch = document.querySelector('.input-search')
    const $targetSearchIcon = document.querySelector('.material-icons')

    $targetLogo.addEventListener('click', (e) => {
        sessionStorage.removeItem('getKeyword')
        window.location.reload()
    })

    const getMovieList = new GetMovieList({
        onLoad: async () => {
            let keyword = sessionStorage.getItem('getKeyword')
            if (!keyword) {
                const data = await fetchGetMovie()
                showMovieList.setState(data)
            } else {
                const data = await fetchSearchMovie(1, keyword)
                showMovieList.setState(data)
            }
        }
    })

    const showMovieList = new ShowMovieList({
        $targetMovieList: $targetMovieList,
        data: [],
    })

    const searchMovie = new SearchMovie({
        $targetSearch: $targetSearch,
        $targetSearchIcon: $targetSearchIcon,
        onClickSearch: async (keyword) => {
            const data = await fetchSearchMovie(1, keyword)
            showMovieList.setState(data)
        }
    })

    const scrollMovieList = new ScrollMovieList({
        onScroll: async (pageNumber, keyword) => {
            if (!keyword) {
                const data = await fetchGetMovie(pageNumber)
                showMovieList.addSetState(data)
            } else {
                const data = await fetchSearchMovie(pageNumber, keyword)
                showMovieList.addSetState(data)
            }
        }
    })
}

new App()

