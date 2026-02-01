import globals from 'globals';
import stylistic from '@stylistic/eslint-plugin';
import importPlugin from 'eslint-plugin-import';
import airbnb from 'airbnb-eslint9';
import chaiFriendly from 'eslint-plugin-chai-friendly';

export default [
  // Airbnb base config
  ...airbnb,

  // Ignore patterns
  { ignores: ['deps/**', 'eslint.config.js'] },

  // Global settings for all files
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      'no-param-reassign': ['error', { props: false }],
      'class-methods-use-this': 'off',
      'import/no-extraneous-dependencies': 'off',
      'import/no-unresolved': 'off',
      'import/prefer-default-export': 'off',
      'import/no-cycle': 'off',
      'linebreak-style': ['error', 'unix'],
      'no-await-in-loop': 'off',
      'no-underscore-dangle': ['error', { allowAfterThis: true }],
      'import/extensions': ['error', { js: 'always' }],
      'object-curly-newline': ['error', { ObjectExpression: { multiline: true, minProperties: 6 }, ObjectPattern: { multiline: true, minProperties: 6 }, ImportDeclaration: { multiline: true, minProperties: 6 }, ExportDeclaration: { multiline: true, minProperties: 6 } }],
      '@stylistic/object-curly-newline': ['error', { ObjectExpression: { multiline: true, minProperties: 6 }, ObjectPattern: { multiline: true, minProperties: 6 }, ImportDeclaration: { multiline: true, minProperties: 6 }, ExportDeclaration: { multiline: true, minProperties: 6 } }],
      'no-restricted-syntax': [
        'error',
        {
          selector: 'ForInStatement',
          message: 'for..in loops iterate over the entire prototype chain. Use Object.{keys,values,entries}, and iterate over the resulting array.',
        },
        {
          selector: 'LabeledStatement',
          message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
        },
        {
          selector: 'WithStatement',
          message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
        },
      ],
    },
  },

  // Test files configuration
  {
    files: ['test/**/*.js', '**/*.test.js'],
    plugins: {
      'chai-friendly': chaiFriendly,
    },
    languageOptions: {
      globals: {
        ...globals.mocha,
      },
    },
    rules: {
      'no-unused-expressions': 'off',
      'chai-friendly/no-unused-expressions': 'error',
    },
  },

  // Plugins required by airbnb-eslint9
  { plugins: { '@stylistic': stylistic, import: importPlugin } },
];
