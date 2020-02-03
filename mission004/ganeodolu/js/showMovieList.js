import { renderedMovieListHTML } from '../util/template.js'
import { ERROR_TYPE } from '../util/constant.js'

export default function ShowMovieList({ $targetMovieList, data }) {
    this.$targetMovieList = $targetMovieList
    this.data = data

    this.setState = function (nextData) {
        this.data = nextData;
        this.render()
    }
    this.render = function () {
        if (typeof (this.data) !== 'object') {
            throw new Error(ERROR_TYPE.NOT_OBJECT)
        }
        if (this.data.results.length === 0) {
            this.$targetMovieList.innerHTML = ERROR_TYPE.NO_RESULT
        }
        else {
            this.$targetMovieList.innerHTML = renderedMovieListHTML(this.data)
        }
    }

    this.addSetState = function (nextData) {
        this.data = nextData;
        this.addRender()
    }
    this.addRender = function () {
        if (typeof (this.data) === 'object' && this.data.results.length > 0) {
            this.$targetMovieList.insertAdjacentHTML('beforeend', renderedMovieListHTML(this.data))
        }
    }
    $targetMovieList.addEventListener('click', (e) => {
        let getMovieId = e.target.dataset.movieid
        sessionStorage.setItem('getMovieId', getMovieId)
    })
}