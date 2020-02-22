import ShowCalendar from './ShowCalendar.js'

function App(){
    const $targetTbody = document.querySelector('.tbody')
    const date = new Date()
    console.log(date)

    const customYear = date.getFullYear()
    const customMonth = date.getMonth()
    const customDate = date.getDate()
    console.log(customYear)
    console.log(customMonth)
    console.log(customDate)

    

}

new App()