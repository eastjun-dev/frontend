import { setStyle } from '../Utils/Util.js'

function TitleComponent({title=''}) {
  this.mainComponent = document.createElement('h1')
  this.mainComponent.innerText = title

  setStyle(this.mainComponent, {
    display: 'inline-block',
    'text-align': 'center',
    width: '100%'
  })
}

export default TitleComponent