module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['prettier', 'airbnb'],
    overrides: [
        {
            env: {
                node: true,
            },
            files: ['.eslintrc.{js,cjs, jsx}'],
            parserOptions: {
                sourceType: 'script',
            },
        },
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    rules: {
        'react/react-in-jsx-scope': 'off',
        'react/jsx-no-target-blank': 'off',
        'react/button-has-type': 'off',
        'react/jsx-one-expression-per-line': 'off',
        'react/function-component-definition': 'off',
        'react/prop-types': 'off',
        'no-shadow': 'off',
        'import/prefer-default-export': 'off',
        'comma-dangle': 'off',
        'no-nested-ternary': 'off',
        camelcase: 'warn',
        'max-len': 'off',
        'no-unsafe-optional-chaining': 'off',
        'arrow-parens': 'off',
    },
};
