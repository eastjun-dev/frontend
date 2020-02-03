export default function ShowMovieDetail({$targetDetail, data}) {
    this.$targetDetail = $targetDetail
    this.data = data

    this.setState = function(nextData){
        this.data = nextData;
        this.render()
    }

    this.render = function(){
        function detailSum(result, prop1, prop2){
            let answer = result[prop1].map((val) => {
                return val[prop2]
            }).join(' / ')
            return answer
        }
        let genresSum = detailSum(this.data, 'genres', 'name')
        let countrySum = detailSum(this.data, 'production_countries', 'name')
    
        let renderedListHTML = 
            `
                <div class="detail-bg"></div>
                <img src="https://image.tmdb.org/t/p/w300${this.data.poster_path}" alt="" class="detail-poster"></img>
                <div class="detail-info">
                    <h1>${this.data.title}</h1>
                    <ul class="info-list">
                        <li>
                            <p class="txt-14">${this.data.release_date}</p>
                        </li>
                        <li>
                            <p class="txt-14">${this.data.runtime} min</p>
                        </li>
                        <li>
                            <p class="txt-14">${genresSum}</p>
                        </li>
                        <li>
                            <p class="txt-14">${countrySum}</p>
                        </li>
                    </ul>
                    <p class="overview">${this.data.overview}</p>
                </div>
                    `
        this.$targetDetail.innerHTML = renderedListHTML
        document.querySelector('.detail-bg').style.backgroundImage = `url(https://image.tmdb.org/t/p/w300${this.data.backdrop_path})`
    }


    
}