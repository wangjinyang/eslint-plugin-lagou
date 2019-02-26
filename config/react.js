module.exports = {
    'extends': [require.resolve('./base'), 'react-app'],
    'rules': {

        // react配置区域
        // https://github.com/yannickcr/eslint-plugin-react


        // 关闭displayName校验
        'react/display-name': [0, { ignoreTranspilerName: false }],
        // 关闭静态类型检查
        'react/prop-types': 0,
        // componentDidUpdate禁止使用setState
        'react/no-did-update-set-state': 1,
        // 一个文件一个component
        // 有一个 bug https://github.com/yannickcr/eslint-plugin-react/issues/1181
        'react/no-multi-comp': 0,
        // ReactDOM.render不允许返回值
        'react/no-render-return-value': 2,
        // refs字符串告警
        'react/no-string-refs': 1,
        // 禁用未知属性
        'react/no-unknown-property': [2, { ignore: [] }],
        // 需要强制转义
        'react/no-unescaped-entities': 2,
        // 禁止使用findDOMNode
        'react/no-find-dom-node': 1,
        // 没有使用的state警告
        // @off 没有官方文档，并且存在很多 bug： https://github.com/yannickcr/eslint-plugin-react/search?q=no-unused-state&type=Issues&utf8=%E2%9C%93
        'react/no-unused-state': 1,
        // componentWillUpdate不允许setstate
        'react/no-will-update-set-state': 1,
        // 强制使用React Components
        'react/prefer-es6-class': [1, 'always'],
        // 关闭stateless精简
        'react/prefer-stateless-function': [0],
        // 全局应该含有React
        'react/react-in-jsx-scope': 2,
        // 关闭必须含有defaultProps检查
        'react/require-default-props': 0,
        // render一定要有return
        'react/require-render-return': 2,
        // 无children的标签需要闭合
        'react/self-closing-comp': 1,
        // Components 顺序校验
        'react/sort-comp': [2],
        // style必须是一个对象
        'react/style-prop-object': 2,
        // propTypes 的熟悉必须按照字母排序
        // @off 没必要限制
        'react/sort-prop-types': 0,
        // 属性为true不必<Hello personal={true} />默认就是true
        'react/jsx-boolean-value': [2, 'never'],
        // 标签开始和结束位置对其
        'react/jsx-closing-bracket-location': 2,
        // 结束标签必须与开始标签的那一行对齐
        // @off 已经在 jsx-indent 中限制了
        'react/jsx-closing-tag-location': 0,
        // {}之间的空格处理
        'react/jsx-curly-spacing': [2, { 'when': 'never', 'children': true }],
        // 属性=号旁边需要有空格
        'react/jsx-equals-spacing': [2, 'never'],
        // 文件拓展名
        'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
        // 属性多行换行
        'react/jsx-first-prop-new-line': [2, 'multiline'],
        // 事件函数名称校验"handle""on"<MyComponent onChange={this.handleChange} onCLick={this.props.onFoo} />
        'react/jsx-handler-names': [0, {
            'eventHandlerPrefix': 'handle',
            'eventHandlerPropPrefix': 'on'
        }],
        // react代码缩进4个空格
        // 已经在js中限定了
        'react/jsx-indent': [0, 4],
        // 属性缩进4个空格
        // 已经在js中限定了
        'react/jsx-indent-props': [0, 4],
        // 没有key提示
        'react/jsx-key': 2,
        // 单行最大属性props数量，最多3个属性
        'react/jsx-max-props-per-line': [2, { 'maximum': 1, 'when': 'always' }],
        // bind函数的使用
        // 'react/jsx-no-bind': 0,
        // 注释校验
        'react/jsx-no-comment-textnodes': 2,
        // 相同属性报错
        'react/jsx-no-duplicate-props': 2,
        // 禁止在 jsx 中出现字符串
        // @off 没必要限制
        'react/jsx-no-literals': 0,
        // 禁止使用 target="_blank"
        // @off 没必要限制
        'react/jsx-no-target-blank': 0,
        // components名称报错
        'react/jsx-no-undef': [2, { 'allowGlobals': true }],
        // 换行格式
        'react/jsx-one-expression-per-line': 0,
        // 不需要{}报错并自动修复
        'react/jsx-curly-brace-presence': [2, { props: 'never', children: 'never' }],
        // components大写驼峰命名
        'react/jsx-pascal-case': [2, { allowAllCaps: true, ignore: [] }],
        // /@fixable props 必须排好序
        // @off 没必要限制
        'react/jsx-sort-props': 0,
        // tag结束前强制加一个换行
        'react/jsx-space-before-closing': [2, 'always'],
        // tag开始和闭合空格限制
        'react/jsx-tag-spacing': [2, {
            'closingSlash': 'allow',
            'beforeSelfClosing': 'always',
            'afterOpening': 'never'
        }],
        // jsx 文件必须 import React
        'react/jsx-uses-react': 0,
        // 没有使用变量报错
        'react/jsx-uses-vars': 2,
        // tag是否应该用()包起来
        'react/jsx-wrap-multilines': [2, {
            'declaration': 'parens-new-line',
            'assignment': 'parens-new-line',
            'return': 'parens-new-line',
            'arrow': 'parens-new-line',
            'condition': 'parens-new-line',
            'logical': 'parens-new-line',
            'prop': 'parens-new-line'
        }],



        // https://github.com/evcohen/eslint-plugin-jsx-a11y
        // react-a11y配置，需要自己添加吧



        // common配置区域

        //
        //
        // 可能的错误
        // 这些规则与 JavaScript 代码中可能的语法错误或逻辑错误有关
        //
        // 禁止 for 循环出现方向错误的循环，比如 for (i = 0; i < 10; i--)
        'for-direction': 2,
        // getter 必须有返回值，并且禁止返回空，比如 return;
        'getter-return': [
            2,
            {
                allowImplicit: false
            }
        ],
        // 禁止将 await 写在循环里，因为这样就无法同时发送多个异步请求了
        // @off 要求太严格了，有时需要在循环中写 await
        'no-await-in-loop': 0,
        // 禁止与负零进行比较
        'no-compare-neg-zero': 2,
        // 禁止在 if, for, while 里使用赋值语句，除非这个赋值语句被括号包起来了
        'no-cond-assign': [
            2,
            'except-parens'
        ],
        // 禁止使用 console
        // @off console 的使用很常见
        'no-console': 0,
        // 禁止将常量作为 if 或三元表达式的测试条件，比如 if (true), let foo = 0 ? 'foo' : 'bar'
        'no-constant-condition': [
            2,
            {
                checkLoops: false
            }
        ],
        // 禁止在正则表达式中出现 Ctrl 键的 ASCII 表示，即禁止使用 /\x1f/
        // 开启此规则，因为字符串中一般不会出现 Ctrl 键，所以一旦出现了，可能是一个代码错误
        'no-control-regex': 2,
        // @fixable 禁止使用 debugger
        'no-debugger': 2,
        // 禁止在函数参数中出现重复名称的参数
        'no-dupe-args': 2,
        // 禁止在对象字面量中出现重复名称的键名
        'no-dupe-keys': 2,
        // 禁止在 switch 语句中出现重复测试表达式的 case
        'no-duplicate-case': 2,
        // 禁止出现空代码块
        'no-empty': [
            2,
            {
                allowEmptyCatch: true
            }
        ],
        // 禁止在正则表达式中使用空的字符集 []
        'no-empty-character-class': 2,
        // 禁止将 catch 的第一个参数 error 重新赋值
        'no-ex-assign': 2,
        // @fixable 禁止在测试表达式中使用 Boolean
        'no-extra-boolean-cast': 2,
        // @fixable 禁止函数表达式中出现多余的括号，比如 let foo = (function () { return 1 })
        'no-extra-parens': [
            2,
            'functions'
        ],
        // @fixable 禁止出现多于的分号
        'no-extra-semi': 2,
        // 禁止将一个函数申明重新赋值，如：
        // function foo() {}
        // foo = bar
        'no-func-assign': 2,
        // 禁止在 if 内出现函数申明或使用 var 定义变量
        'no-inner-declarations': [
            0,
            'both'
        ],
        // 禁止出现非法的正则表达式
        'no-invalid-regexp': 2,
        // 禁止使用特殊空白符（比如全角空格），除非是出现在字符串、正则表达式或模版字符串中
        'no-irregular-whitespace': [
            2,
            {
                skipStrings: true,
                skipComments: false,
                skipRegExps: true,
                skipTemplates: true
            }
        ],
        // 禁止将 Math, JSON 或 Reflect 直接作为函数调用，必须作为类使用
        'no-obj-calls': 2,
        // 禁止使用 hasOwnProperty, isPrototypeOf 或 propertyIsEnumerable
        // @off 很多地方会用到 hasOwnProperty
        'no-prototype-builtins': 0,
        // @fixable 禁止在正则表达式中出现连续的空格，必须使用 /foo {3}bar/ 代替
        'no-regex-spaces': 2,
        // 禁止在数组中出现连续的逗号，如 let foo = [,,]
        'no-sparse-arrays': 2,
        // 禁止在普通字符串中出现模版字符串的变量形式，如 'Hello ${name}!'
        'no-template-curly-in-string': 2,
        // 禁止出现难以理解的多行表达式，如：
        // let x = function () {}
        // `hello`
        'no-unexpected-multiline': 2,
        // 禁止在 return, throw, break 或 continue 之后还有代码
        'no-unreachable': 2,
        // 禁止在 finally 中出现 return, throw, break 或 continue
        'no-unsafe-finally': 2,
        // @fixable 禁止在 in 或 instanceof 操作符的左侧使用感叹号，如 if (!key in object)
        'no-unsafe-negation': 2,
        // 必须使用 isNaN(foo) 而不是 foo === NaN
        'use-isnan': 2,
        // 注释必须符合 jsdoc 的规范
        // @off jsdoc 要求太严格
        'valid-jsdoc': 0,
        // typeof 表达式比较的对象必须是 'undefined', 'object', 'boolean', 'number', 'string', 'function' 或 'symbol'
        'valid-typeof': 2
    }
};