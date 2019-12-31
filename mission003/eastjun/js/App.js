import Form from './components/Form.js'

function FormApp() {

  new Form()

  const materialDesignInit = () => window.mdc.autoInit()

  this.init = () => {
    materialDesignInit()
  }

  this.init()
}

new FormApp()
