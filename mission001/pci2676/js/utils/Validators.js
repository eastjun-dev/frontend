const EVENT_VALIDATOR = {
    isEsc: function (event) {
        return event.key === 'Escape';
    },
    isEnter: function (event) {
        return event.key === 'Enter';
    }
};

const STRING_VALIDATOR = {
    isNotEmpty: function (string) {
        return string && string.trim().length !== 0;
    }
};

export {
    EVENT_VALIDATOR,
    STRING_VALIDATOR
};