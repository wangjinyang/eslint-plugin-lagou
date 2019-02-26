module.exports = {
    extends: [
        require.resolve('./base'),
        'plugin:vue/recommended'
    ],
    plugins: [
        'vue',
        'html'
    ],
    rules: {
        'vue/html-indent': [2, 4, {
            'attribute': 1,
            'baseIndent': 1,
            'closeBracket': 0,
            'alignAttributesVertically': true,
            'ignores': []
        }],
        'vue/html-quotes': ['error', 'single']
    }
};