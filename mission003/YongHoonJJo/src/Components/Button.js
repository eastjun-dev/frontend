import { setStyle } from '../Utils/Util.js'

function Button({name}) {
  this.mainComponent = document.createElement('button')
  this.mainComponent.innerText = name

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
  
  setStyle(this.mainComponent, buttonStyle)
  this.mainComponent.addEventListener('mouseover', () => {
    setStyle(this.mainComponent, {
      ...buttonStyle,
      'background-color': '#259ffa',
      color: 'white'
    })
  })
  this.mainComponent.addEventListener('mouseout', () => {
    setStyle(this.mainComponent, buttonStyle) 
  })
}

export default Button