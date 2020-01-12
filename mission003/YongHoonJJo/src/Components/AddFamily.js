import ButtonPlus from './ButtonPlus.js'
import InputComponent from './Input.js'
import FamilyRelation from './FamilyRelation.js'

function AddFamily() {
  this.idx = 0
  this.state = []
  this.$main = document.createElement('div')

  this.nameInput = new InputComponent(
    { label: '이름', type: 'text', name: 'name' }, 
    { display: 'inline-block', width: '40%' }
  )
  this.relationInput = new InputComponent(
    { label: '관계', type: 'text', name: 'relation'}, 
    { display: 'inline-block', width: '40%' }
  )

  const addFamilyRelationInfoHandler = () => {
    const name = this.nameInput.getInputValue()
    const relation = this.relationInput.getInputValue()

    if(!name && !relation) return ;
    this.nameInput.resetInputValue()
    this.relationInput.resetInputValue() 

    const state = {id: this.idx+=1, name, relation}
    this.state.push(state)
    const familyRelation = new FamilyRelation(state)
    this.$main.appendChild(familyRelation.$main) 
  }

  this.plusButton = new ButtonPlus({
    addCss: { display: 'inline-block', top: '20px', left: '20px' },
    onClick: addFamilyRelationInfoHandler
  })

  this.$main.appendChild(this.nameInput.$main) 
  this.$main.appendChild(this.relationInput.$main) 
  this.$main.appendChild(this.plusButton.$main)
}

AddFamily.prototype.getState = function() {
  return this.state
}

export default AddFamily