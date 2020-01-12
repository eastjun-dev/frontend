import AddFamilyComponent from './Components/AddFamily.js'
import FormComponent from './Components/Form.js'

function App() {
  const $signUp = document.querySelector('#signup')

  const signForm = new FormComponent()
  const familyForm = new FormComponent() 
  const addFamily = new AddFamilyComponent()
  
  $signUp.appendChild(signForm.$main)

  signForm.appendTitle({ title: '회원가입' })
  signForm.appendInput({ label: '이름', type: 'text', name: 'name' })
  signForm.appendInput({ label: '전화번호', type: 'text', name: 'phone' })
  signForm.appendInput({ label: 'E-mail', type: 'email', name: 'email' })
  signForm.appendInput({ label: '비밀번호', type: 'password', name: 'passwd' }) 
  signForm.appendInput({ label: '자기소개', type: 'text', name: 'selfIntro' })
  signForm.appendButton({
    name: '다음',
    onClick() {
      $signUp.replaceChild(familyForm.$main, signForm.$main)
    }
  })

  familyForm.appendTitle({ title: '가족 구성원 입력' })
  familyForm.appendComponent(addFamily.$main)
  familyForm.appendButton({
    name: '제출',
    onClick() {
      
    }
  })
}

new App()