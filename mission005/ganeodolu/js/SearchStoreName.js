import { KEY_NAME, EVENT_NAME } from '../util/constant.js'


export default function SearchStoreName({$targetInput, $targetButton, onSearch}){
    this.$targetInput = $targetInput
    this.$targetButton = $targetButton

    this.$targetInput.addEventListener('keypress', (e) => {
        if(e.key === KEY_NAME.ENTER){
            console.log(e.target.value)
            let keyword = e.target.value
            onSearch(keyword, 1)
        }
    })

    this.$targetInput.addEventListener(EVENT_NAME.CLICK, (e) => {
        onSearch(e.target.value, 1)
    })

    this.$targetButton.addEventListener('click', (e) => {
        $targetInput.dispatchEvent(new Event(EVENT_NAME.CLICK))
    })
}