module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:promise/recommended',
        'plugin:unicorn/recommended',
        'plugin:prettier/recommended',
    ],
    env: {
        node: true,
    },
    rules: {
        'prettier/prettier': [
            'error',
            {
                singleQuote: true,
                tabWidth: 4,
            },
        ],
    },
};
