export default function TodoStatus({ todoItems, filter }) {
    this.$todoStatus = document.querySelector('#todo-status-tabs')

    const initEventListener = () => {
        this.$todoStatus.addEventListener('click', (event) => {
            const $target = event.target
            filter($target.className)
            toggleTab($target)
        })
    }

    initEventListener()

    const toggleTab = ($target) => {
        const $tabs = document.querySelectorAll('#todo-status-tabs li a')
        $tabs.forEach(status => {
            if (status.classList.contains('selected')) {
                status.classList.remove('selected')
            }
        })
        $target.classList.add('selected')
    }
}

