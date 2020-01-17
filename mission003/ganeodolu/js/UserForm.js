export default function UserForm({$target, data}){
    this.$target = $target
    this.data = data;

    $target.addEventListener('onchange', (e) => {
        console.log(e.target)
    })

}