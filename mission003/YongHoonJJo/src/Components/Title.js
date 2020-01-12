import { setStyle } from '../Utils/Util.js'

function TitleComponent({title=''}) {
  this.$main = document.createElement('h1')
  this.$main.innerText = title

  setStyle(this.$main, {
    display: 'inline-block',
    'text-align': 'center',
    width: '100%'
  })
}

export default TitleComponent