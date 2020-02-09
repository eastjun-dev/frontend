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
        if (e.target.closest('div.item')) {
            let storeName = e.target.closest('div.item').lastElementChild.firstElementChild.textContent
            let storeAddress = e.target.closest('div.item').lastElementChild.lastElementChild.textContent
            geocoder.addressSearch(storeAddress, function (result, status) {
                if (status === kakao.maps.services.Status.OK) {
                    const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
                    const marker = new kakao.maps.Marker({
                        map: map,
                        position: coords
                    });
                    const customOverlay = new kakao.maps.CustomOverlay({
                        position: coords,
                        content: `<div class ="label"><span class="left"></span><span class="center">${storeName}</span><span class="right"></span></div>`
                    })
                    $targetDialog.showModal();
                    setTimeout(function () {
                        map.relayout()
                        customOverlay.setMap(map)
                        map.setCenter(coords);
                    }, 10)
                }
            });
        }
    })

    this.$targetDialog.querySelector('button')
        .addEventListener('click', function () {
            $targetDialog.close();
        });
    window.onclick = function (e) {
        if (e.target === $targetDialog) {
            $targetDialog.close();
        }
    }



}