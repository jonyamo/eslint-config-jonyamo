module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:promise/recommended',
        'plugin:unicorn/recommended',
        'plugin:prettier/recommended',
        'prettier/unicorn',
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
