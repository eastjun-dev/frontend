const utils = {
    isStringEmpty(item) {
        return !item || item.length === 0;
    },
    isNotEnter(event) {
        return event.key !== "Enter";
    }
};

export default utils;
