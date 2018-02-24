module.exports = {
  'env': {
    'es6': true,
    'node': true,
    'mocha': true,
  },
  'parserOptions': {
    'ecmaVersion': 2017,
  },
  'extends': 'eslint:recommended',
  'rules': {
    'no-console': [
      'warn',
      {
        allow: [
          'warn',
        ]
      }
    ],
    'indent': [
      'error',
      2,
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'never'
    ],
    'eol-last': [
      'warn',
      'always'
    ]
  }
}