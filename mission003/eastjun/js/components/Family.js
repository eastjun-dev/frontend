import { familyFormTemplate } from '../utils/templates.js'

export default function Family() {
  this.name = ''
  this.relations = ''

  this.render = (index) => familyFormTemplate(index)
}
