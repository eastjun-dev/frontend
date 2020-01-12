import ButtonComponent from './Button.js'
import InputComponent from './Input.js'
import TitleComponent from './Title.js'

import { setStyle } from '../Utils/Util.js'

function Form() {
  this.$main = document.createElement('div')

  setStyle(this.$main, {
    width: '350px',
    margin: '0 auto'
  })
}

Form.prototype.appendTitle = function({title}) {
  const $title = new TitleComponent({ title })
  this.$main.appendChild($title.$main)
  return $title
}

Form.prototype.appendInput = function({label, type, name, placeholder}) {
  const $input = new InputComponent({ label, type, name })
  this.$main.appendChild($input.$main) 
  return $input
}

Form.prototype.appendButton = function({name, onClick}) {
  const button = new ButtonComponent({ name })
  this.$main.appendChild(button.$main)
  button.$main.addEventListener('click', onClick)
  return button
}

Form.prototype.appendComponent = function(Component) {
  this.$main.appendChild(Component)
}

export default Form