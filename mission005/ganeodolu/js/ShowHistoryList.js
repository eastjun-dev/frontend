import { renderedHistoryHTML } from '../util/template.js'
import { MESSAGE_NAME } from '../util/constant.js'

export default function ShowHistoryList({ $target, data }) {
    this.$target = $target
    this.data = data

    this.render = function () {
        this.data = this.getHistory()
        this.$target.innerHTML = renderedHistoryHTML(this.data)
    }
    this.setState = function (nextData) {
        this.data = this.setHistory(nextData)
        this.render()
    }

    this.getHistory = function () {
        const getKeyword = localStorage.getItem('storedKeywords')
        let keywordList = getKeyword ? getKeyword.split(',') : [`${MESSAGE_NAME.NO_RESULT}`]
        return keywordList
    }

    this.setHistory = function (inputValue) {
        const getKeyword = localStorage.getItem('storedKeywords')
        let keywordList = getKeyword ? getKeyword.split(',') : []
        let indexKeyword = keywordList.indexOf(inputValue)
        if (indexKeyword !== -1) {
            keywordList.splice(indexKeyword, 1)
        }
        keywordList.unshift(inputValue)
        let result = keywordList.splice(0, 5)
        localStorage.setItem('storedKeywords', result.toString())
        return result
    }

    this.render()
}