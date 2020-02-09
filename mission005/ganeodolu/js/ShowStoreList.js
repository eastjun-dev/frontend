import { renderedStoreListHTML } from '../util/template.js'

export default function ShowStoreList({ $target, data, keyword, page }) {
    this.$target = $target
    this.data = data
    this.keyword = keyword
    this.page = page


    this.setState = function (nextData, nextKeyword, nextPage) {
        this.data = nextData
        this.keyword = nextKeyword
        this.page = nextPage
        this.render()
    }

    this.render = function () {
        if (this.data.list) {
            this.$target.innerHTML = renderedStoreListHTML(this.data, this.keyword, this.page)
        }
    }

    this.render()
}