export default function TodoCount(params) {
  const { $target } = params;
  const data = params.data || [];

  this.setState = nextData => {
    data = nextData;
    this.render();
  };

  this.render = () => {
    $target.innerHTML = `총 <strong>${data.length}</strong> 개`;
  };
}
