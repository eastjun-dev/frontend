import ShowMovieDetail from './showMovieDetail.js'
import GetMovieDetail from './getMovieDetail.js'
import { fetchGetMovieDetail } from './api.js'

export default function App_detail(){
    let movieId = Number(sessionStorage.getItem('getMovieId'))
    
    const $targetDetail = document.querySelector('.main')
    const $targetLogo = document.querySelector('.logo')
    const $targetSearch = document.querySelector('.input-search')
    const $targetSearchIcon = document.querySelector('.material-icons')

    
    $targetLogo.addEventListener('click', (e) => {
        window.location.href='../index.html';
    })

    const getMovieDetail = new GetMovieDetail({
        onLoad: async () => {
            const data = await fetchGetMovieDetail(movieId)
            showMovieDetail.setState(data)
        }
    })

    const showMovieDetail = new ShowMovieDetail({
        $targetDetail: $targetDetail,
        data: []
    })

    $targetSearch.addEventListener('keypress', (e) => {
        if(e.key === "Enter"){
            let getKeyword = e.target.value
            sessionStorage.setItem('getKeyword', getKeyword)
            window.location.href='../index.html';
        }
    })
    $targetSearchIcon.addEventListener('click', (e) => {
        let getKeyword = e.target.previousElementSibling.value
        sessionStorage.setItem('getKeyword', getKeyword)
        window.location.href='../index.html';
    })

}

