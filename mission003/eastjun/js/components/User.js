import validator from '../utils/validator.js'

export default function User() {
  this.name = ''
  this.email = ''
  this.phone = ''
  this.password = ''
  this.introduce = ''
  this.family = []

  this.update = {
    name: (name) => this.name = name,
    email: (email) => this.email = email,
    phone: (phone) => this.phone = phone,
    password: (password) => this.password = password,
    introduce: (introduce) => this.introduce = introduce,
    family: {
      name: (index, name) => this.family[index].name = name,
      relations: (index, relations) => this.family[index].relations = relations
    }
  }

  this.addFamily = (member) => this.family.push(member)

  this.isBasicInfoNotEmpty = () => {
    if (validator.isNotEmptyString(this.name) &&
        validator.isNotEmptyString(this.email) &&
        validator.isNotEmptyString(this.phone) &&
        validator.isNotEmptyString(this.password) &&
        validator.isNotEmptyString(this.introduce)) {
      return true
    }
  }
}
