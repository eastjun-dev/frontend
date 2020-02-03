export default function GetMovieList({onLoad, onScroll}){
    window.addEventListener('load', (e) => {
        // let keyword = sessionStorage.getItem('getKeyword')
        // console.log(keyword)
        onLoad()
    })

    let scrollTimer;
    let pageNumber = 1;
    window.onscroll = function (e) {
        // console.log((window.pageYOffset + document.body.clientHeight))
        // console.log(document.body.scrollHeight)
        if ((window.pageYOffset + document.body.clientHeight) >= document.body.scrollHeight * 0.95) {
            if (!scrollTimer) {
                scrollTimer = setTimeout(async function () {
                    scrollTimer = null;
                    console.log(e.target)
                    pageNumber++
                    console.log(pageNumber)
                    onScroll(pageNumber)
                    // console.log(countPage)
                    // console.log(data.results)
                    // if (countPage <= totalPages) {
                        // countPage++
                        // data = await fetchGetMovie(countPage)
                    // }
                }, 200)
            }
        }
    }
}