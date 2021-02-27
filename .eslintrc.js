module.exports = {
    env: {
        browser: true,
        es6: true,
        jest: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
                moduleDirectory: ['node_modules', 'src/'],
            },
        },
    },
    plugins: ['react', '@typescript-eslint', 'prettier'],
    ignorePatterns: ['src/typings/**'],
    rules: {
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
            },
        ],
        'prettier/prettier': 'error',
        '@typescript-eslint/explicit-function-return-type': 'off',
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
        'import/no-extraneous-dependencies': ['error', { devDependencies: ['**/*.tsx', 'config/*'] }],
        'react/prop-types': 'off',
        'no-console': ['error', { allow: ['log', 'warn', 'error'] }],
        'no-else-return': ['error', { allowElseIf: true }],
        'consistent-return': ['error', { treatUndefinedAsUnspecified: true }],
        'react/jsx-props-no-spreading': 'off',
        'react/jsx-wrap-multilines': 'off',
        indent: 'off',
        'react/jsx-indent': 'off',
        'react/jsx-indent-props': 'off',
        'import/prefer-default-export': 'off',
        'no-underscore-dangle': 'off',
        'jsx-a11y/anchor-is-valid': 'off',
        'react/no-array-index-key': 'off',
        'no-restricted-syntax': 'off',
        'react/destructuring-assignment': 'off',
    },
    overrides: [
        {
            files: ['*.js', '*.jsx'],
            rules: {
                '@typescript-eslint/no-var-requires': 'off',
            },
        },
    ],
};
