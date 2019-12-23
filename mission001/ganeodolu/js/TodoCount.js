function TodoCount($targetCount, $targetCountFilter, data) {
    this.data = data;
    this.$targetCount = $targetCount;
    this.$targetCountFilter = $targetCountFilter;

    this.setState = function (nextData) {
        this.data = nextData;
        this.render();
    }

    if (this === window) {
        throw new Error(error.NO_USED_NEW_KEYWORD)
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