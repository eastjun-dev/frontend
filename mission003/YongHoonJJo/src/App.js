import AddFamilyComponent from './Components/AddFamily.js'
import FormComponent from './Components/Form.js'
import SignUpInfo from './Components/SignUpInfo.js'

function App() {
  this.state = {}
  const $signUp = document.querySelector('#signup')

  const signForm = new FormComponent()
  const familyForm = new FormComponent() 
  const checkForm = new FormComponent()
  const signUpInfo = new SignUpInfo()
  
  $signUp.appendChild(signForm.$main)

  signForm.appendTitle({ title: '회원가입' })
  const getName = signForm.appendInput({ label: '이름', type: 'text', name: 'name' })
  const getPhone = signForm.appendInput({ label: '전화번호', type: 'text', name: 'phone' })
  const getEmail = signForm.appendInput({ label: 'E-mail', type: 'email', name: 'email' })
  const getPasswd = signForm.appendInput({ label: '비밀번호', type: 'password', name: 'passwd' }) 
  const getSelfIntro = signForm.appendInput({ label: '자기소개', type: 'text', name: 'selfIntro' })
  signForm.appendButton({
    name: '다음',
    onClick: () => {
      $signUp.replaceChild(familyForm.$main, signForm.$main)
      this.state = {
        ...this.state,
        name: getName(),
        phone: getPhone(),
        email: getEmail(),
        selfIntro: getSelfIntro()
      }
    }
  })

  familyForm.appendTitle({ title: '가족 구성원 입력' })
  const getFamilyInfo = familyForm.appendComponent(new AddFamilyComponent())
  familyForm.appendButton({
    name: '제출',
    onClick: () => {
      this.state = {
        ...this.state,
        familyInfo: getFamilyInfo()
      }
      $signUp.replaceChild(checkForm.$main, familyForm.$main) 
      signUpInfo.setState(this.state)
    }
  })

  checkForm.appendTitle({ title: '입력정보 확인' })
  checkForm.appendComponent(signUpInfo)
  checkForm.appendButton({
    name: '회원가입 완료',
    onClick: () => {
      console.log('Success')
    }
  })
}

new App()