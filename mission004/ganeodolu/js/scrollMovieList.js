export default function ScrollMovieList({ onScroll }) {

    let pageNumber = 1;
    let scrollTimer;

    window.onscroll = async function (e) {

        if ((window.pageYOffset + document.body.clientHeight) >= document.body.scrollHeight * 0.95) {
            if (!scrollTimer) {
                scrollTimer = setTimeout(async function () {
                    scrollTimer = null;
                    pageNumber++
                    let searchKeyword = sessionStorage.getItem('getKeyword')
                    onScroll(pageNumber, searchKeyword)
                }, 200)
            }
        }
    }
}