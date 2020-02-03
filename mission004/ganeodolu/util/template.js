function renderedMovieListHTML(inputValue) {
    let result = inputValue.results.map((val, idx) => {
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
    return result
}

function renderedMovieDetailHTML(inputValue) {
    let genresSum = detailSum(inputValue, 'genres', 'name')
    let countrySum = detailSum(inputValue, 'production_countries', 'name')
    return `
    <div class="detail-bg"></div>
    <img src="https://image.tmdb.org/t/p/w300${inputValue.poster_path}" alt="" class="detail-poster"></img>
    <div class="detail-info">
        <h1>${inputValue.title}</h1>
        <ul class="info-list">
            <li>
                <p class="txt-14">${inputValue.release_date}</p>
            </li>
            <li>
                <p class="txt-14">${inputValue.runtime} min</p>
            </li>
            <li>
                <p class="txt-14">${genresSum}</p>
            </li>
            <li>
                <p class="txt-14">${countrySum}</p>
            </li>
        </ul>
        <p class="overview">${inputValue.overview}</p>
    </div>
        `
}

function detailSum(result, prop1, prop2) {
    let answer = result[prop1].map((val) => {
        return val[prop2]
    }).join(' / ')
    return answer
}

export { renderedMovieListHTML, renderedMovieDetailHTML }