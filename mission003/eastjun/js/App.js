import Form from './components/Form.js'

function FormApp() {

  new Form()

  const dialog = new mdc.dialog.MDCDialog(document.querySelector('.mdc-dialog'))
  dialog.open()


  const materialDesignInit = () => mdc.autoInit()

  this.init = () => {
    materialDesignInit()
  }

  this.init()
}

new FormApp()
