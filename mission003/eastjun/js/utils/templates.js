const familyFormTemplate = (index) => `
    <div data-index="${index}" class="flex-container user-family-form-fields">
      <div class="mdc-text-field mrg-right-10" data-mdc-auto-init="MDCTextField">
        <input type="text" class="mdc-text-field__input" type="text" name="family-name" id="family-name-${index}" required>
        <label for="family-name-${index}" class="mdc-floating-label">이름</label>
        <div class="mdc-line-ripple"></div>
      </div>
      <div class="mdc-text-field" data-mdc-auto-init="MDCTextField">
        <input type="text" class="mdc-text-field__input" type="text" name="family-relations" id="family-relations-${index}" required>
        <label for="family-relations-${index}" class="mdc-floating-label">관계</label>
        <div class="mdc-line-ripple"></div>
      </div>
    </div>`

const familyViewTemplate = (family) => `
  <div>
    <span>${family.name}</span> <span>(${family.relations})</span>
  </div>`

const myInfoViewTemplate = (formFields) => `
 <div class="my-info-view-container">
    <div class="mdc-card my-info-card">
      <button id="my-info-edit-button" class="mdc-icon-button material-icons text-gray">edit</button>
      <div>
        <h2 class="demo-card__title mdc-typography mdc-typography--headline5 text-center text-bold">나의 정보</h2>
        <div class="mdc-typography mdc-typography--body2">
          <div class="margin-16">
            <div class="mdc-typography mdc-typography--subtitle1 text-bold">이름</div>
            <div>${formFields.name}</div>
          </div>
          <div class="margin-16">
            <div class="mdc-typography mdc-typography--subtitle1 text-bold">이메일</div>
            <div>${formFields.email}</div>
          </div>
          <div class="margin-16">
            <div class="mdc-typography mdc-typography--subtitle1 text-bold">전화번호</div>
            <div>${formFields.phone}</div>
          </div>
          <div class="margin-16">
            <div class="mdc-typography mdc-typography--subtitle1 text-bold">소개</div>
            <div>${formFields.introduce}</div>
          </div>
           <div class="margin-16">
            <div class="mdc-typography mdc-typography--subtitle1 text-bold">가족</div>
            <div class="my-family-list-container"></div>
           </div>
        </div>
      </div>
    </div>
  </div>`

export {
  familyFormTemplate,
  myInfoViewTemplate,
  familyViewTemplate
}
