import { renderedMovieDetailHTML } from '../util/template.js'

export default function ShowMovieDetail({ $targetDetail, data }) {
    this.$targetDetail = $targetDetail
    this.data = data

    this.setState = function (nextData) {
        this.data = nextData;
        this.render()
    }

    this.render = function () {
        this.$targetDetail.innerHTML = renderedMovieDetailHTML(this.data)
        document.querySelector('.detail-bg').style.backgroundImage = `url(https://image.tmdb.org/t/p/w300${this.data.backdrop_path})`
    }
}