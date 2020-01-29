export default function MyInfoForm({$targetTitle, $targetMyInfo, $targetCompleteButton3, $targetStep1, $targetStep3, dialog, data}){
    this.data = data;
    this.dialog = dialog;

    $targetCompleteButton3.addEventListener('click', (e) => {
        e.preventDefault()
        if (e.target.classList.contains('mdc-button__ripple')) {
            $targetStep3.classList.add('hidden')
            let familyRelations = this.data.Family.name.map((val, idx) => {
                return `<div>${val} (${this.data.Family.relation[idx]})</div>`
            }).join('')
            
            $targetMyInfo.innerHTML =
            `
            <div class="my-info-view-container">
                  <div class="mdc-card my-info-card">
                    <button id="my-info-edit-button" class="mdc-icon-button material-icons text-gray">edit</button>
                    <div>
                      <h2 class="demo-card__title mdc-typography mdc-typography--headline5 text-center text-bold">나의 정보</h2>
                      <div class="mdc-typography mdc-typography--body2">
                        <div class="margin-16">
                          <div class="mdc-typography mdc-typography--subtitle1 text-bold">이름</div>
                          <div>${this.data.name}</div>
                        </div>
                        <div class="margin-16">
                          <div class="mdc-typography mdc-typography--subtitle1 text-bold">이메일</div>
                          <div>${this.data.email}</div>
                        </div>
                        <div class="margin-16">
                          <div class="mdc-typography mdc-typography--subtitle1 text-bold">전화번호</div>
                          <div>${this.data.phone}</div>
                        </div>
                        <div class="margin-16">
                          <div class="mdc-typography mdc-typography--subtitle1 text-bold">소개</div>
                          <div>${this.data.introduce}</div>
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
            const $targetMyInfoEdit = document.querySelector('#my-info-edit-button')
            $targetMyInfoEdit.addEventListener('click', (e) => {
                this.dialog.open()
                mdc.autoInit()
                $targetStep1.classList.remove('hidden')
                $targetTitle.textContent = '회원가입 1/3'
            })
        }
    })
}