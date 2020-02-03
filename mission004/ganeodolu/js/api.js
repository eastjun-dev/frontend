function fetchGetMovie(pageNumber) {
    return new Promise((resolve, reject) => {
        fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=9c75b9a50b9510e81c6bc16c1a41517c&language=en-US&page=${pageNumber}&region=KR&include_adult=false`)
            // fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=9c75b9a50b9510e81c6bc16c1a41517c&language=en-US&page=${pageNumber}&region=KR`)
            .then(res => res.json())
            .then(data => resolve(data))
    })
}

function fetchGetMovieDetail(movieId) {
    return new Promise((resolve, reject) => {
        fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=9c75b9a50b9510e81c6bc16c1a41517c&language=en-US`)
            .then(res => res.json())
            .then(data => resolve(data))
    })
}

function fetchSearchMovie(keyword, pageNumber) {
    return new Promise((resolve, reject) => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=9c75b9a50b9510e81c6bc16c1a41517c&language=en-US&query=${keyword}&page=${pageNumber}&include_adult=false`)
            .then(res => res.json())
            .then(data => resolve(data))
    })
}

export { fetchGetMovie, fetchGetMovieDetail, fetchSearchMovie }