const $targetMovieList = document.querySelector('.movie-list')
const $targetLogo = document.querySelector('.logo')

$targetLogo.addEventListener('click', (e) => {
    window.location.reload()
})

function fetchData(pageNumber) {
    return new Promise((resolve, reject) => {
        fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=9c75b9a50b9510e81c6bc16c1a41517c&language=en-US&page=${pageNumber}`)
            .then(res => res.json())
            .then(data => resolve(data))
    })
}

(async function movieListView() {
    let countPage = 1
    let data = await fetchData(countPage)
    console.log(data)
    console.log(data.total_pages)
    let totalPages = data.total_pages

    let renderedListHTML = data.results.map((val) => {
        return `
                <a href="./html/detail.html">
                    <li class="movie-list-item">
                        <img
                            class="poster"
                            src="https://image.tmdb.org/t/p/w300${val.poster_path}"
                            alt=""
                        />
                        <div class="movie-list-dim"></div>
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
            if(!scrollTimer){
                scrollTimer = setTimeout(async function(){
                    scrollTimer = null;
                    console.log(countPage)
                    console.log(data.results)
                    if(countPage <= totalPages){
                        countPage++,
                        data = await fetchData(countPage)
                        renderedAddListHTML = data.results.map((val) => {
                                return `
                                            <a href="./html/detail.html">
                                                <li class="movie-list-item">
                                                    <img
                                                        class="poster"
                                                        src="https://image.tmdb.org/t/p/w300${val.poster_path}"
                                                        alt=""
                                                    />
                                                    <div class="movie-list-dim"></div>
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


})()
// movieListView()


