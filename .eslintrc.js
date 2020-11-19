module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-unused-vars': 'off',
    'prefer-const': 'off',
    'one-var': 'off',
    'indent': 'off',
    'semi': 'off',
    'comma-dangle': 'off',
    'eol-last': 'off',
    'spaced-comment': 'off',
    'space-before-function-paren': 'off',
    'object-curly-spacing': 'off',
    'dot-notation': 'off',
    'no-undef': 'off',
    'eqeqeq': 'off'
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
}
