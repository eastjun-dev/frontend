import { TEXT_NAME } from '../util/constant.js'

export default function ManagePage({ $target, $targetHistory, onClickPage }) {
    this.$target = $target
    this.$targetHistory = $targetHistory

    this.$target.addEventListener('click', (e) => {
        let getKeyword = this.$targetHistory.firstElementChild.value
        let getPage = e.target.text
        let getTotal = document.querySelector('.total')
            getTotal = Number(getTotal.getAttribute('value'))
            getTotal = Math.floor(getTotal / 10) + 1
        if (getPage === TEXT_NAME.PREVIOUS) {
            getPage = Number(e.target.nextElementSibling.text) - 1
            if (getPage < 1) {
                getPage = 1
            }
            onClickPage(getPage, getKeyword, TEXT_NAME.PREVIOUS)
        } else if (getPage === TEXT_NAME.NEXT) {
            getPage = Number(e.target.previousElementSibling.text) + 1
            if(getPage > getTotal){
                getPage = getTotal
            }
            onClickPage(getPage, getKeyword, TEXT_NAME.NEXT)
        } else if(getPage) {
            onClickPage(getPage, getKeyword)
        }
    })
}