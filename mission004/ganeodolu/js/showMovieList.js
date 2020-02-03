// import {fetchGetMovie} from './api.js'

export default function ShowMovieList({$targetMovieList, data}) {
    this.$targetMovieList = $targetMovieList
    this.data = data

    this.setState = function(nextData){
        this.data = nextData;
        this.render()
    }
    this.render = function() {
        if(typeof(this.data) !== 'object'){
            throw new Error('데이터가 객체가 아닙니다.')
        }
        if(this.data.results.length === 0){
            this.$targetMovieList.innerHTML = '<검색 결과가 존재하지 않습니다>'
        }
        else {
            let renderedListHTML = this.data.results.map((val, idx) => {
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
            this.$targetMovieList.innerHTML = renderedListHTML
        }
    }
    this.addSetState = function(nextData){
        this.data = nextData;
        this.addRender()
    }
    this.addRender = function() {
        if(typeof(this.data) === 'object' && this.data.results.length > 0){
            console.log(this.data)
            let renderedAddListHTML = this.data.results.map((val, idx) => {
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

            this.$targetMovieList.insertAdjacentHTML('beforeend', renderedAddListHTML)
        }
    }

    $targetMovieList.addEventListener('click', (e) => {
        console.log(e.target)
        let getMovieId = e.target.dataset.movieid
        console.log(getMovieId)
        sessionStorage.setItem('getMovieId', getMovieId)
    })


}