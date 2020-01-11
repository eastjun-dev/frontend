import ButtonComponent from './Button.js'
import InputComponent from './Input.js'
import TitleComponent from './Title.js'

import { setStyle } from '../Utils/Util.js'

function Form() {
  this.mainComponent = document.createElement('div')

  setStyle(this.mainComponent, {
    width: '350px',
    margin: '0 auto'
  })
}

Form.prototype.appendTitle = function({title}) {
  const $title = new TitleComponent({ title })
  this.mainComponent.appendChild($title.mainComponent)
  return $title
}

Form.prototype.appendInput = function({label, type, name, placeholder}) {
  const $input = new InputComponent({ label, type, name })
  this.mainComponent.appendChild($input.mainComponent) 
  return $input
}

Form.prototype.appendButton = function({name}) {
  const $button = new ButtonComponent({ name })
  this.mainComponent.appendChild($button.mainComponent)
  return $button
}

export default Form