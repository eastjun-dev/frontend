import { setStyle } from '../Utils/Util.js'

function FamilyRelation({id, name, relation, onClick}) {
  this.$main = document.createElement('div')
  this.$main.innerText = `${name} ${relation}`
  
  setStyle(this.$main, {
    width: '100%',
    margin: '10px 0',
  })

  this.$main.addEventListener('click', () => {
    onClick(id, this.$main)
  })
}

export default FamilyRelation