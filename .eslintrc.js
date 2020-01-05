module.exports = {
    "env": {
        "node": true,
        "es6": true,
        "browser": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        "semi": [2, "never"],
        "no-use-before-define": "off",
        "no-underscore-dangle": "off",
        "no-shadow": "off"
    }
}
