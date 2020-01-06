export const myInfoTemplate = data => {
  return `
  <div class="modal-cont">
    <form>
      <label>
        이름
        <input type="text" maxlength="10" placeholder="이름" id="name" ${
          data.name && data.name !== "" ? `value=${data.name}` : ""
        } />
      </label>
      <label>
        전화번호
        <input type="tel" maxlength="10" placeholder="010-0000-0000" id="tel" ${
          data.tel && data.tel !== "" ? `value=${data.tel}` : ""
        }  />
      </label>
      <label>
        이메일
        <input type="text" maxlength="30" placeholder="email@email.com" id="email" ${
          data.email && data.email !== "" ? `value=${data.email}` : ""
        }  />
      </label>
      <label>
        비밀번호
        <input type="password" maxlength="20" placeholder="영문, 숫자 8자리 이상" id="password" ${
          data.password && data.password !== "" ? `value=${data.password}` : ""
        }  />
      </label>
      <label>
        자기소개
        <input type="text" maxlength="50" placeholder="50자 이하로 입력해주세요" id="introduce" ${
          data.introduce && data.introduce !== ""
            ? `value=${data.introduce}`
            : ""
        }  />
      </label>
      <label class="hide" id="checkboxLabel">
        개인정보보호방침에 동의합니다
        <input type="checkbox" class="checkbox" />
      </label>
    </form>
  </div>
  <button class="btn fixed" id="btnNext">NEXT ></button>
  `;
};

export const familyTemplate = data => {
  return `
    <div class="modal-cont">
      <form id="familyForm">
        ${data.family.map((data, index) => familyNodeTemplate(data, index))}
      </form>
    </div>
    <button class="btn-add" id="btnAdd">가족 구성원 추가하기 +</button>
    <button class="btn fixed" id="btnNext">NEXT ></button>
  `;
};

export const familyNodeTemplate = (data, num) => {
  return `<label class="label-family">
  가족 ${num + 1}
  <input type="text" maxlength="10" placeholder="이름" id="family-${num}" ${
    data !== "" ? ` value=${data}` : ""
  } />
</label>`;
};

export const finishTemplate = data => {
  return `
  <div class="modal-cont">
    <form id="finishForm">
      <label class="finish">
        이름 : 
        <input type="text" name="name" value=${data.name} readonly />
      </label>
      <label class="finish">
        전화번호 : 
        <input type="text" name="tel" value=${data.tel} readonly />
      </label>
      <label class="finish">
        이메일 : 
        <input type="text" name="email" value=${data.email} readonly />
      </label>
      <label class="finish">
        자기소개 : 
        <input type="text" name="introduce" value=${data.introduce} readonly />
      </label>
      ${
        data.family.length !== 0
          ? `<label class="finish family">
          가족 : ${data.family.map(
            (data, index) =>
              `<input type="text" name="family-${index}" value=${data} readonly />`
          )}
        </label>`
          : ""
      }
    </form>
  </div>
  <button class="btn fixed" id="btnSubmit">SUBMIT</button>
`;
};

export const exceptionTemplate = `올바르지 않은 접근입니다`;
