function TodoCount($targetCount, $targetCountFilter, data) {
    this.data = data;
    this.$targetCount = $targetCount;
    this.$targetCountFilter = $targetCountFilter;

    // 새로운 데이터를 불러서 다시 렌더링하는 setState함수
    this.setState = function (nextData) {
        this.data = nextData;
        this.render();
    }
    // // 상태별 아이템 골라서 보여주기 미구현
    // this.$targetCountFilter.addEventListener('click', (e) => {
    //     const { className, dataset } = e.target;
    //     const { index } = dataset
    //     console.log(e.target)
    //     if (className === 'all selected') {
    //         onAllClick()
    //     } else if (className === 'active') {
    //         onActiveClick()
    //     } else if (className === 'completed') {
    //         onCompletedClick()
    //     }
    // })

    this.render = function () {
        const { totalCount, completedCount } = this.data
        $targetCount.innerHTML = `총 <strong>${totalCount}</strong>개`
    }
    this.render();

}