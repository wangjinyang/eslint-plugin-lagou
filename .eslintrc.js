// https://eslint.org/docs/user-guide/configuring
const baseConfig = require('./configs/base')
module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 6,
  },
  env: {
    node: true
  },
  extends: [],
  // required to lint *.vue files
  plugins: [],
  rules: baseConfig.rules
}
