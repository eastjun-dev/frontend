export default function TodoFilter(params) {
  const { $target, changeFilter } = params;

  $target.addEventListener("click", e => {
    changeFilter(e.target.className);
  });

  this.render = () => {
    $target.innerHTML = `
    <li>
      <a class="all selected" href="#/">전체보기</a>
    </li>
    <li>
      <a class="active" href="#/active">해야할 일</a>
    </li>
    <li>
      <a class="completed" href="#/completed">완료한 일</a>
    </li>`;
  };
}
