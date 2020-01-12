import { setStyle } from '../Utils/Util.js'

function ButtonPlus({addCss={}, onClick}) {
  this.$main = document.createElement('div')
  
  this.$rowLine = document.createElement('div')
  const rowLineStyle = {
    'background-color': 'grey',
		position: 'absolute',
		top: '50%',
		left: '50%',
    transform: 'translate(-50%, -50%)',
    height: '0.2em',
    width: '1em',
    transition: 'all .2s ease-in',
  }
  setStyle(this.$rowLine, rowLineStyle)
  this.$main.appendChild(this.$rowLine)

  this.$colLine = document.createElement('div')
  const colLineStyle = {
    'background-color': 'grey',
		position: 'absolute',
		top: '50%',
		left: '50%',
    transform: 'translate(-50%, -50%)',
    height: '1em',
    width: '0.2em',
    transition: 'all .2s ease-in',
  }
  setStyle(this.$colLine, colLineStyle)
  this.$main.appendChild(this.$colLine) 

  const buttonStyle = {
    border: '2px solid lightgrey',
	  'background-color': '#fff',
	  'font-size': '16px',
	  height: '2em',
	  width: '2em',
	  'border-radius': '999px',
    position: 'relative',
    cursor: 'pointer',
    transition: 'all .2s ease-in',
    ...addCss
  }
  setStyle(this.$main, buttonStyle)

  this.$main.addEventListener('mouseover', () => {
    setStyle(this.$main, {
      ...buttonStyle,
      border: '2px solid #259ffa'
    })
    setStyle(this.$colLine, {
      ...colLineStyle,
      'background-color': '#259ffa'
    })
    setStyle(this.$rowLine, {
      ...rowLineStyle,
      'background-color': '#259ffa'
    })
  })
  this.$main.addEventListener('mouseout', () => {
    setStyle(this.$main, buttonStyle) 
    setStyle(this.$colLine, colLineStyle)
    setStyle(this.$rowLine, rowLineStyle)
  })

  this.$main.addEventListener('click', onClick)
}

export default ButtonPlus