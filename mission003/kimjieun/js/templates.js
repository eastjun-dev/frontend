const basicInfoTemplate = `
  <div class="text-field">
    <label>이름</label> : <input id="name" type="text" />
  </div>
  <div class="text-field">
    <label>전화번호</label> : <input id="phoneNumber" type="number" />
  </div>
  <div class="text-field">
    <label>이메일</label> : <input id="email" type="email" />
  </div>
  <div class="text-field">
    <label>비밀번호</label> : <input id="password" type="password" autocomplete="on"/>
  </div>
  <div class="text-field">
    <label>자기소개</label> : <textarea id="myIntroduce"></textarea>
  </div>
`

const policyTemplate = `
  <input id="agree" type="checkbox">
  <label class="agree" for="agree">
    개인정보보호방침에 동의합니다
  </label>
`

const footerTemplate = `
  <button type="submit">다음</button>
`

export {
  basicInfoTemplate,
  policyTemplate,
  footerTemplate,
}
