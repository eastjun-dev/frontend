import { setStyle } from '../Utils/Util.js'

function TitleComponent({title='', tag='h1'}) {
  this.$main = document.createElement(`${tag}`)
  this.$main.innerText = title

  setStyle(this.$main, {
    display: 'inline-block',
    'text-align': 'center',
    width: '100%'
  })
}

export default TitleComponent