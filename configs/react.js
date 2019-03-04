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

    }
};