import { eventKeyboards, dataActions  } from '../utils/Contants.js'

export function renderBySelectedFilterHandler(e) {
  if(e.target === this.$filters) return 

  const aTags = document.querySelectorAll('ul.filters li a')
  for(const tag of aTags) tag.classList.contains('selected') && tag.classList.remove('selected')
    
  this.filter = e.target.className
  e.target.classList.add('selected')

  this.renderByFilter()  
}

export async function doByActionHandler(e) {
  const { CHECK, REMOVE } = dataActions
  const datasetAction = e.target.dataset.action
  if(!datasetAction) return 

  const [action, id] = datasetAction.split('-')
  try {
    switch(action) {
      case CHECK: await this.toggleState(id); break
      case REMOVE: await this.removeItem(id); break
    }
  } catch(e) {
    console.error({e})
  }
}

export function showEditViewHandler(e) {
  const { id } = e.target.dataset
  if(!id) return 

  this.toggleEditView(id)
}

export async function doByEscOrEnterHandler(id, e) {
  const { ENTER, ESC } = eventKeyboards
  try {
    switch(e.key) {
      case ESC: await this.renderByFilter(); break
      case ENTER: await this.editContent(id, e.target.value); break
    }
  } catch(e) {
    console.error({e})
  }
}