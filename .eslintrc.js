module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      'jsx': true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/prop-types': 'off',
    'no-plusplus': 'off',
    'react/no-array-index-key': 'off',
    'react/button-has-type': 'off',
    'react/jsx-boolean-value': 'off',
    'react/jsx-filename-extension': 'off',
    'no-console': 'off',
    'import/prefer-default-export': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'import/named': 'off',
    'import/no-named-as-default': 'off',
    'guard-for-in': 'off',
    'no-restricted-syntax': 'off',
    'consistent-return': 'off',
    'array-callback-return': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-undef': 'off',
    "arrow-body-style": ["error", "as-needed"]
    //
    /* Indentation */
    'no-mixed-spaces-and-tabs': 2,
    indent: [2, 2],
    /* Variable names */
    camelcase: 2,
    /* Language constructs */
    curly: 2,
    eqeqeq: [2, 'smart'],
    'func-style': [2, 'expression'],
    /* Semicolons */
    semi: 2,
    'no-extra-semi': 2,
    /* Padding & additional whitespace (perferred but optional) */
    'brace-style': [2, '1tbs', { allowSingleLine: true }],
    'semi-spacing': 1,
    'key-spacing': 1,
    'block-spacing': 1,
    'comma-spacing': 1,
    'no-multi-spaces': 1,
    'space-before-blocks': 1,
    'keyword-spacing': [1, { before: true, after: true }],
    'space-infix-ops': 1,
    /* Variable declaration */
    'one-var': [1, { uninitialized: 'always', initialized: 'never' }],
    /* Minuta */
    'comma-style': [2, 'last'],
    quotes: [1, 'single'],
    radix: 'off',
  },
};
