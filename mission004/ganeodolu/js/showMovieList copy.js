import {fetchGetMovie} from './api.js'

export default async function movieListView({$targetMovieList}) {
    let countPage = 1
    let data = await fetchGetMovie(countPage)
    console.log(data)
    console.log(data.total_pages)
    let totalPages = data.total_pages

    let renderedListHTML = data.results.map((val, idx) => {
        return `
                <a href="./html/detail.html">
                    <li class="movie-list-item">
                        <img
                            class="poster"
                            src="https://image.tmdb.org/t/p/w300${val.poster_path}"
                            alt=""
                        />
                        <div class="movie-list-dim" data-movieid=${val.id}></div>
                        <ul class="movie-info">
                            <li class="movie-title">${val.title}</li>
                            <li>${val.release_date}</li>
                        </ul>
                    </li>
                </a>
                `
    }).join('')
    $targetMovieList.innerHTML = renderedListHTML
    let scrollTimer;
    window.onscroll = async function (e) {
        // console.log((window.pageYOffset + document.body.clientHeight))
        // console.log(document.body.scrollHeight)
        if ((window.pageYOffset + document.body.clientHeight) >= document.body.scrollHeight * 0.95) {
            if (!scrollTimer) {
                scrollTimer = setTimeout(async function () {
                    scrollTimer = null;
                    console.log(countPage)
                    console.log(data.results)
                    if (countPage <= totalPages) {
                        countPage++
                        data = await fetchGetMovie(countPage)
                        let renderedAddListHTML = data.results.map((val, idx) => {
                            return `
                                            <a href="./html/detail.html">
                                                <li class="movie-list-item">
                                                    <img
                                                        class="poster"
                                                        src="https://image.tmdb.org/t/p/w300${val.poster_path}"
                                                        alt=""
                                                    />
                                                    <div class="movie-list-dim" data-movieid=${val.id}></div>
                                                    <ul class="movie-info">
                                                        <li class="movie-title">${val.title}</li>
                                                        <li>${val.release_date}</li>
                                                    </ul>
                                                </li>
                                            </a>
                                            `
                        }).join('')

                        $targetMovieList.insertAdjacentHTML('beforeend', renderedAddListHTML)
                    }
                }, 200)
            }
        }
    }

    $targetMovieList.addEventListener('click', (e) => {
        // e.preventDefault()
        console.log(e.target)
        let getMovieId = e.target.dataset.movieid
        console.log(getMovieId)
        sessionStorage.setItem('getMovieId', getMovieId)
    })


}