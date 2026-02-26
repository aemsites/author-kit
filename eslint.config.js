import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import { recommended, source, test } from '@adobe/eslint-config-helix';

export default defineConfig([
  globalIgnores([
    '**/deps',
  ]),
  {
    languageOptions: {
      ...recommended.languageOptions,
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
        ...globals.mocha,
        ...globals.es6,
        __rootdir: true,
      },
    },
    settings: {
      'import/core-modules': ['eslint/config'],
    },
    rules: {
      // it's 2026
      'no-await-in-loop': 0,

      // it's 2026, six is sensible (if they're short names)
      'object-curly-newline': ['error', {
        multiline: true,
        minProperties: 6,
        consistent: true,
      }],

      // existing rule is placebo in AEM projects
      'import/no-cycle': 'off',

      // common to have loops that run a single function
      'max-statements-per-line': ['error', { max: 2 }],

      // customer projects should not have license headers
      // unless they open source and want them.
      'header/header': 0,

      // quality of life for classes & web components
      'class-methods-use-this': 0,

      // allow external evergreen imports
      'import/no-unresolved': ['error', {
        ignore: ['^https?://']
      }],

      // allow template literals to span lines without looking weird
      'indent': ['error', 2, {
        ignoredNodes: ['TemplateLiteral *'],
        SwitchCase: 1,
      }],

      // allow objct property mutations
      'no-param-reassign': [2, { props: false }],
    },
    plugins: {
      import: recommended.plugins.import,
    },
    extends: [recommended],
  },
  source,
  test,
  {
    // Allow console in test files
    files: ['test/**/*.js'],
    rules: {
      'max-classes-per-file': 0,
      'no-console': 'off',
      'no-underscore-dangle': 0,
      'no-unused-expressions': 0,
    },
  }
]);
