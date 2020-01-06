export default function SubmitButton(data) {
  this.setState = nextData => {
    const button = document.getElementById("btnSubmit");
    data = nextData;
    button.addEventListener("click", () => {
      onSubmit();
    });
  };
}

const onSubmit = () => {
  const res = confirm("정말로 제출하시겠습니까?");
  if (res) {
    const form = document.getElementById("finishForm");
    form.submit();
    alert("성공적으로 제출되었습니다");
  }
};
