export default function ManageMap({ $target, $targetDialog, $targetItem }) {
    this.$target = $target
    this.$targetDialog = $targetDialog
    this.$targetItem = $targetItem

    let mapOption = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 3
    };
    let map = new kakao.maps.Map(this.$target, mapOption);
    let geocoder = new kakao.maps.services.Geocoder();


    this.$targetItem.addEventListener('click', (e) => {
        // console.log('eee',map.relayout())
        // console.log($targetItem)
        console.log(e.target)
        console.log(e.target.closest('div.item').lastElementChild.firstElementChild.textContent)
        console.log(e.target.closest('div.item').lastElementChild.lastElementChild.textContent)
        let storeName = e.target.closest('div.item').lastElementChild.firstElementChild.textContent
        let storeAddress = e.target.closest('div.item').lastElementChild.lastElementChild.textContent
        this.$targetDialog.showModal();
            // 주소로 좌표를 검색합니다
        geocoder.addressSearch(storeAddress, function (result, status) {
        if (status === kakao.maps.services.Status.OK) {
            var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
            var marker = new kakao.maps.Marker({
                map: map,
                position: coords
            });
            var infowindow = new kakao.maps.InfoWindow({
                content: `<div style="width:150px;text-align:center;padding:6px 0;">${storeName}</div>`
            });
            infowindow.open(map, marker);
            map.setCenter(coords);
            map.relayout()
        }
    });
    })

    this.$targetDialog.querySelector('button:not([disabled])')
    .addEventListener('click', function () {
        $targetDialog.close();
    });


}