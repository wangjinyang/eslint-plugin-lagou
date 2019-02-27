# eslint-plugin-lagou

install 

`npm i eslint eslint-plugin-lagou --save-dev`

>base 

core

``` javascriot 
'globals': {
    'jQuery': true,
    '$': true,
    '__url': true,
    '__uri': true,
    '__inline': true,
    'React': true,
    'Vue': true,
    'angular': true,
    'define': true,
    'lg': true,
},
parserOptions: {
    sourceType: 'module',
    parser: 'babel-eslint',
    ecmaVersion: 2018,
    'allowImportExportEverywhere': true  //ignore eslint error: 'import' and 'export' may only appear at the top level
},
env: {
    browser: true,
    node: true,
    es6: true,
},
```

rules for es6 and normal .js file [details rules](https://github.com/wangjinyang/eslint-plugin-lagou/blob/master/configs/base.js)

>vue

core 
```
extends: [
    'base',
    'plugin:vue/recommended'
],
plugins: [
    'vue',
    'html'
],
```
.eslintrc.js
``` javescript
module.exports = {
  root: true,
  extends: ['plugin:lagou/vue'],
  // add your custom rules here
  'rules': {
  }
}
```

>react

core 
```
'extends': [require.resolve('./base'), 'react-app'],,
```
.eslintrc.js
``` javescript
module.exports = {
  root: true,
  extends: ['plugin:lagou/react'],
  // add your custom rules here
  'rules': {
  }
}
```


