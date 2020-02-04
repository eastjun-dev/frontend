import { renderedStoreListHTML } from '../util/template.js'

export default function ShowStoreList({ $target, data, page }) {
    this.$target = $target
    this.data = data
    this.page = page


    this.setState = function (nextData, nextPage) {
        this.data = nextData
        this.page = nextPage
        this.render()
    }

    this.render = function () {
        console.log(this.data)
        if (this.data.list) {
            this.$target.innerHTML = renderedStoreListHTML(this.data, this.page)
        }
    }

    this.render()
}