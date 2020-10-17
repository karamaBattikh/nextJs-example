const path = require('path');

module.exports = {
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  extends: ['airbnb', 'eslint-config-prettier'],
  parserOptions: {
    ecmaVersion: 9,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['prettier', 'react'],
  settings: {
    'import/resolver': {
      node: {
        paths: [path.resolve(__dirname, './src')],
      },
    },
  },
  rules: {
    'no-console': 1,
    'react/no-unused-prop-types': 0,
    'react/react-in-jsx-scope': 'off',
    'max-len': ['error', { code: 100, ignoreUrls: true }],
    'no-var': 'error',
    'linebreak-style': 0,
    'prettier/prettier': 'error',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'react/jsx-filename-extension': 0,
    'react/jsx-props-no-spreading': 0,
    'no-param-reassign': 1,
    'import/newline-after-import': 0,
    'react/jsx-first-prop-new-line': [2, 'multiline'],
    'object-shorthand': 1,
    'arrow-parens': ['error', 'always'],
    'react/require-default-props': 0,
    'react/jsx-one-expression-per-line': 1,
    'react/prop-types': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'react/forbid-prop-types': 0,
  },
};
