module.exports = {
  root: true,
  parserOptions: {
    "parser": "babel-eslint",
    "sourceType": "module"
  },
  env: {
    browser: true,
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/recommended"
  ],
  // add your custom rules here
  rules: {
    "vue/max-attributes-per-line": "off"
  },
  globals: {}
}
