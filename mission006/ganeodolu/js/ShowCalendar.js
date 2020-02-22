export default function ShowCalendar({$target}){
    this.$target = $target

    this.setState = function(){
        
        this.render()
    }

    this.render = function(){
        const renderedHTML
        $target.innerHTML = renderedHTML
    }
}