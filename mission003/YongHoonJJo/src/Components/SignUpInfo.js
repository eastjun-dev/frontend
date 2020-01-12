import TitleComponent from './Title.js'
import { setStyle } from '../Utils/Util.js'

function List({label, value}) {
  this.$main = document.createElement('li')  

  const text = `${label}: ${value}`
  this.$main.innerText = text
  setStyle(this.$main, {
    'list-style-type': 'none',
    'margin-bottom': '5px',
    padding: '5px 0',
    'font-size': '14px'
  })
}

function SignUpInfo() {
  this.$main = document.createElement('div')

  this.$ul = document.createElement('ul')   
  this.$main.appendChild(this.$ul)
  
  this.$family = document.createElement('div') 
  this.$main.appendChild(this.$family)
}

SignUpInfo.prototype.setState = function({name, phone, email, selfIntro, familyInfo}) {
  const $ul = document.createElement('ul') 
  setStyle($ul, {
    margin: '0',
    padding: '0'
  })
  $ul.appendChild(new List({label: '이름', value: name}).$main) 
  $ul.appendChild(new List({label: '전화번호', value: phone}).$main) 
  $ul.appendChild(new List({label: 'E-mail', value: email}).$main) 
  $ul.appendChild(new List({label: '자기소개', value: selfIntro}).$main) 
  this.$main.replaceChild($ul, this.$ul)
  this.$ul = $ul

  const $family = document.createElement('div')
  $family.appendChild(new TitleComponent({title: '가족 구성원', tag: 'h4'}).$main)

  const $familyUl = document.createElement('ul') 
  $family.appendChild($familyUl)
  setStyle($familyUl, {
    margin: '0',
    padding: '0'
  })
  familyInfo.forEach(({name, relation}, idx) => {
    $familyUl.appendChild(new List({label: `구성원(${idx+1})`, value: `${name}(${relation})`}).$main)  
  })
  this.$main.replaceChild($family, this.$family)
  this.$family = $family
}

export default SignUpInfo