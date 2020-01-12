import { setStyle } from '../Utils/Util.js'

function Button({name}) {
  this.$main = document.createElement('button')
  this.$main.innerText = name

  const buttonStyle = {
    height: '50px',
    width: '100%',
    color: 'black',
    'font-size': '14px',
    border: '1px solid #eee',
    'border-radius': '8px',
    'background-color': '#eee',
    outline: '0',
    cursor: 'pointer',
    transition: 'all .2s ease-in'
  }
  
  setStyle(this.$main, buttonStyle)
  this.$main.addEventListener('mouseover', () => {
    setStyle(this.$main, {
      ...buttonStyle,
      'background-color': '#259ffa',
      color: 'white'
    })
  })
  this.$main.addEventListener('mouseout', () => {
    setStyle(this.$main, buttonStyle) 
  })
}

export default Button