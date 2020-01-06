export default function TodoCount({$targetCount, $targetFilter, data, onFilterClick}) {
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

    this.render = function () {
        const { totalCount } = this.data
        $targetCount.innerHTML = `총 <strong>${totalCount}</strong>개`
    }
    this.render();

}