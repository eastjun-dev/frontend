function TodoCount({$targetCount, $targetFilter, data, onFilterClick}) {
    this.data = data;
    this.$targetCount = $targetCount;
    this.$targetFilter = $targetFilter;

    this.setState = function (nextData) {
        this.data = nextData;
        this.render();
    }

    if (this === window) {
        throw new Error(error.NO_USED_NEW_KEYWORD)
    }

    // this.$targetFilter.addEventListener('click', (e) => {
    //     const { className } = e.target;
    //     // const { index } = dataset
    //     // console.log(e.target)
    //     if (className === 'all selected') {
    //         onFilterClick()
    //     } else if (className === 'active') {
    //         onFilterClick(true)
    //     } else if (className === 'completed') {
    //         onFilterClick(false)
    //     }
    // })

    this.render = function () {
        const { totalCount, completedCount } = this.data
        $targetCount.innerHTML = `총 <strong>${totalCount}</strong>개`
    }
    this.render();

}