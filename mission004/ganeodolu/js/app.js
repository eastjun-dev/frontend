const $targetMovieList = document.querySelector('.main')
const $targetLogo = document.querySelector('.logo')
const $targetSearch = document.querySelector('.input-search')

$targetLogo.addEventListener('click', (e) => {
    window.location.reload()
})

// const scrollRestoration = window.history.scrollRestoration
// console.log(scrollRestoration)

function fetchGetMovie(pageNumber) {
    return new Promise((resolve, reject) => {
        fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=9c75b9a50b9510e81c6bc16c1a41517c&language=en-US&page=${pageNumber}`)
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

(async function movieListView() {
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
        if ((window.pageYOffset + document.body.clientHeight) >= document.body.scrollHeight) {
            if (!scrollTimer) {
                scrollTimer = setTimeout(async function () {
                    scrollTimer = null;
                    console.log(countPage)
                    console.log(data.results)
                    if (countPage <= totalPages) {
                        countPage++ ,
                            data = await fetchGetMovie(countPage)
                        renderedAddListHTML = data.results.map((val, idx) => {
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
                        }).join(''),
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


})()






$targetSearch.addEventListener('keypress', async (e) => {
    if (e.key === 'Enter') {
        let countPage = 1
        let searchKeyword = e.target.value
        if (searchKeyword) {
            let data = await fetchSearchMovie(searchKeyword, countPage)
            console.log(data)
            // })()
            let totalPages = data.total_pages
            if (totalPages === 0) {
                $targetMovieList.innerHTML = '<검색 결과가 존재하지 않습니다>'
                return
            }
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
                if ((window.pageYOffset + document.body.clientHeight) >= document.body.scrollHeight) {
                    if (!scrollTimer) {
                        scrollTimer = setTimeout(async function () {
                            scrollTimer = null;
                            console.log(countPage)
                            console.log(data.results)
                            if (countPage <= totalPages) {
                                countPage++ ,
                                    data = await fetchSearchMovie(searchKeyword, countPage)
                                renderedAddListHTML = data.results.map((val) => {
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
                                }).join(''),
                                    $targetMovieList.insertAdjacentHTML('beforeend', renderedAddListHTML)
                            }
                        }, 200)
                    }
                }
            }
            e.target.value = ''
        }

    }
})
