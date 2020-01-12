import { setAttrs, setStyle } from '../Utils/Util.js'

function InputComponent({label, type='text', name, placeholder}, addCss={}) {
  
  this.mainComponent = document.createElement('div')
  
  this.$label = document.createElement('label')
  setAttrs(this.$label, {
    'for': name
  })
  this.$label.innerText = label
  
  this.$input = document.createElement('input')
  setAttrs(this.$input, {
    type, name, placeholder
  })

  this.mainComponent.append(this.$label)
  this.mainComponent.append(this.$input)

  setStyle(this.mainComponent, {
    margin: '20px 0',
    ...addCss
  })
  setStyle(this.$label, {
    display: 'block',
    'font-weight': 'bold'
  })

  const inputStyle = {
    width: '100%',
    height: '40px',
    border: 'none',
    'border-bottom': '1px solid #eee',
    outline: 'none',
    transition: 'border .2s ease-in'
  }
  setStyle(this.$input, inputStyle)
  this.$input.addEventListener('focus', () => {
    setStyle(this.$input, {
      ...inputStyle,
      'border-bottom-color': '#259ffa'
    })
  })
  this.$input.addEventListener('blur', () => {
    setStyle(this.$input, inputStyle)
  })
}

InputComponent.prototype.getInputValue = function() {
  return this.$input.value
}

InputComponent.prototype.resetInputValue = function() {
  this.$input.value = '' 
}

export default InputComponent