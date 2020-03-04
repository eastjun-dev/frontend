const Utils = {
    isStringEmpty(item) {
        return !item || item.length === 0;
    },
    isNotEnter(event) {
        return event.key !== "Enter";
    },
    makeDateAsString() {
        const date = new Date();
        return date.getFullYear().toString()
            + date.getMonth().toString()
            + date.getDay().toString()
            + date.getHours().toString()
            + date.getMinutes().toString()
            + date.getSeconds().toString()
            + date.getMilliseconds().toString()
    }
};

export default Utils;
