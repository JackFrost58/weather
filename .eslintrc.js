module.exports = {
  "env": {
    "browser": true,
    "es6": true
  },
    "extends": [
      "airbnb-base",
      "prettier"
    ],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "rules": {
    "no-param-reassign": 0,
    "no-plusplus": 0,
    "import/no-cycle": [0, { maxDepth: 1 }],
    "import/prefer-default-export": 0
  }
};
