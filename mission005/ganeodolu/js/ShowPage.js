import { renderedPageHTML } from '../util/template.js'
import { ERROR_NAME, TEXT_NAME } from '../util/constant.js'

export default function ShowPage({ $target, $page, $totalPage, $pageOffset }) {
    this.$target = $target
    this.$page = $page
    this.$totalPage = $totalPage
    this.$pageOffset = $pageOffset
    const numPages = 5

    this.setState = function (nextPage, nextTotalPage, nextPageOffset) {
        this.$page = nextPage
        this.$totalPage = nextTotalPage
        this.$pageOffset = nextPageOffset
        this.render()
    }
    this.render = function () {
        const maxPage = Math.floor(this.$totalPage / 10) + 1
        const pageStart = Math.floor((this.$page - 1) / numPages) * numPages + 1
        let pageEnd = pageStart + numPages - 1
        if (maxPage < pageEnd) {
            pageEnd = maxPage
        }
        let pageArray = []
        for (let i = pageStart; i <= pageEnd; i++) {
            pageArray.push(i)
        }
        this.$target.innerHTML = renderedPageHTML(pageArray, this.$page)
    }
}