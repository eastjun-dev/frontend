let movieId = Number(sessionStorage.getItem('getMovieId'))
console.log(movieId)

const $targetDetail = document.querySelector('.main')
console.log($targetDetail)
const $targetLogo = document.querySelector('.logo')
const $targetSearch = document.querySelector('.input-search')

$targetLogo.addEventListener('click', (e) => {
    window.location.href='../index.html';
})

function fetchGetMovieDetail(movieId) {
    return new Promise((resolve, reject) => {
        fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=9c75b9a50b9510e81c6bc16c1a41517c&language=en-US`)
            .then(res => res.json())
            .then(data => resolve(data))
    })
}

(async function movieListView() {
    let data = await fetchGetMovieDetail(movieId)
    console.log(data)
    let genresSum = data.genres.map((val) => {
        return val.name 
    }).join(' / ')
    console.log(genresSum)
    let renderedListHTML = 
        `
            <div class="detail-bg"></div>
            <img src="https://image.tmdb.org/t/p/w300${data.poster_path}" alt="" class="detail-poster"></img>
            <div class="detail-info">
                <h1>${data.title}</h1>
                <ul class="info-list">
                    <li>
                        <p class="txt-14">${data.release_date}</p>
                    </li>
                    <li>
                        <p class="txt-14">${data.runtime} min</p>
                    </li>
                    <li>
                        <p class="txt-14">${genresSum}</p>
                    </li>
                </ul>
                <p class="overview">${data.overview}</p>
            </div>
                `
    $targetDetail.innerHTML = renderedListHTML
    document.querySelector('.detail-bg').style.backgroundImage = `url(https://image.tmdb.org/t/p/w300${data.backdrop_path})`
})()