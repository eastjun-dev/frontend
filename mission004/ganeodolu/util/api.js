import { MOVIE_API } from './constant.js' 

function fetchGetMovie(pageNumber) {
    return new Promise((resolve, reject) => {
        fetch(`${MOVIE_API.URI}movie/now_playing?${MOVIE_API.KEY}&language=en-US&page=${pageNumber}&region=KR&include_adult=false`)
            .then(res => res.json())
            .then(data => resolve(data))
    })
}

function fetchGetMovieDetail(movieId) {
    return new Promise((resolve, reject) => {
        fetch(`${MOVIE_API.URI}movie/${movieId}?${MOVIE_API.KEY}&language=en-US`)
            .then(res => res.json())
            .then(data => resolve(data))
    })
}

function fetchSearchMovie(pageNumber, keyword) {
    return new Promise((resolve, reject) => {
        fetch(`${MOVIE_API.URI}search/movie?${MOVIE_API.KEY}&language=en-US&query=${keyword}&page=${pageNumber}&include_adult=false`)
            .then(res => res.json())
            .then(data => resolve(data))
    })
}

export { fetchGetMovie, fetchGetMovieDetail, fetchSearchMovie }