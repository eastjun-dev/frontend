function renderedFamilyTemplate(renderedHTML, $targetFamilyContainer) {
  let FamilyContainerLength = $targetFamilyContainer.length;
  return renderedHTML +=
    `
    <div data-index class="flex-container user-family-form-fields">
        <div class="mdc-text-field  mrg-right-10" data-mdc-auto-init="MDCTextField">
            <input type="text" class="mdc-text-field__input" type="text" name="family-name-${FamilyContainerLength / 2}" value=${$targetFamilyContainer[0].value}>
            <label class="mdc-floating-label">이름</label>
            <div class="mdc-line-ripple"></div>
        </div>
        <div class="mdc-text-field" data-mdc-auto-init="MDCTextField">
            <input type="text" class="mdc-text-field__input" type="text" name="family-relations-${FamilyContainerLength / 2}" value=${$targetFamilyContainer[1].value}>
            <label class="mdc-floating-label">관계</label>
            <div class="mdc-line-ripple"></div>
        </div>
    </div>
    `
}

function renderedMyInfoTemplate(data) {
  let familyRelations = data.Family.name.map((val, idx) => `<div>${val} (${data.Family.relation[idx]})</div>`).join('')

  return `
    <div class="my-info-view-container">
          <div class="mdc-card my-info-card">
            <button id="my-info-edit-button" class="mdc-icon-button material-icons text-gray">edit</button>
            <div>
              <h2 class="demo-card__title mdc-typography mdc-typography--headline5 text-center text-bold">나의 정보</h2>
              <div class="mdc-typography mdc-typography--body2">
                <div class="margin-16">
                  <div class="mdc-typography mdc-typography--subtitle1 text-bold">이름</div>
                  <div>${data.name}</div>
                </div>
                <div class="margin-16">
                  <div class="mdc-typography mdc-typography--subtitle1 text-bold">이메일</div>
                  <div>${data.email}</div>
                </div>
                <div class="margin-16">
                  <div class="mdc-typography mdc-typography--subtitle1 text-bold">전화번호</div>
                  <div>${data.phone}</div>
                </div>
                <div class="margin-16">
                  <div class="mdc-typography mdc-typography--subtitle1 text-bold">소개</div>
                  <div>${data.introduce}</div>
                </div>
                <div class="margin-16">
                  <div class="mdc-typography mdc-typography--subtitle1 text-bold">가족</div>
                  ${familyRelations}
                  </div>
              </div>
            </div>
          </div>
        </div>
    `
}

export { renderedFamilyTemplate, renderedMyInfoTemplate } 
