import { KEY_NAME, EVENT_NAME } from '../util/constant.js'


export default function SearchStoreName({ $targetInput, $targetButton, $targetDelete, onAccessSearch, onClickDelete }) {
    this.$targetInput = $targetInput
    this.$targetButton = $targetButton
    this.$targetDelete = $targetDelete

    this.$targetInput.addEventListener('keypress', (e) => {
        if (e.key === KEY_NAME.ENTER) {
            let keyword = e.target.value
            onAccessSearch(1, keyword)
        }
    })

    this.$targetInput.addEventListener(EVENT_NAME.CLICK, (e) => {
        let keyword = e.target.value
        onAccessSearch(1, keyword)
    })

    this.$targetButton.addEventListener('click', (e) => {
        $targetInput.dispatchEvent(new Event(EVENT_NAME.CLICK))
    })

    this.$targetInput.addEventListener('focus', (e) => {
        e.target.value = ''
    })

    this.$targetDelete.addEventListener('click', (e) => {
        localStorage.removeItem('storedKeywords')
        onClickDelete()
    })
}