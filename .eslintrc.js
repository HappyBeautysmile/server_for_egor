'use strict';

const off = 0;
const warn = 1;
const error = 2;

module.exports = {
  root: true,

  parserOptions: {
    ecmaVersion: 6
  },

  env: {
    es6: true,
    node: true
  },

  plugins: [
    'standard',
    'promise'
  ],

  globals: {
    document: false,
    navigator: false,
    window: false
  },

  rules: {
    // promises
    'promise/param-names': warn,
    'promise/always-return': error,
    'promise/catch-or-return': warn,

    // "possible errors"
    'comma-dangle': [error, 'never'],
    'no-cond-assign': [error, 'always'],
    'no-console': off,
    'no-constant-condition': error,
    'no-debugger': error,
    'no-dupe-args': error,
    'no-dupe-keys': error,
    'no-duplicate-case': error,
    'no-empty-function': warn,
    'no-empty-character-class': error,
    'no-ex-assign': error,
    'no-extra-boolean-cast': error,
    'no-extra-parens': [error, 'functions'],
    'no-extra-semi': warn,
    'no-func-assign': error,
    'no-inner-declarations': [error, 'functions'],
    'no-invalid-regexp': error,
    'no-irregular-whitespace': [error, {skipComments: true}],
    'no-negated-in-lhs': error,
    'no-obj-calls': error,
    'no-regex-spaces': error,
    'no-sparse-arrays': error,
    'no-unexpected-multiline': warn,
    'no-unreachable': warn,
    'use-isnan': error,
    'valid-jsdoc': [warn, {
      requireReturn: false,
      requireParamDescription: false,
      requireReturnDescription: false,
      prefer: {
        return: 'returns'
      },
      preferType: {
        'String': 'string',
        'Object': 'object'
      }
    }],
    'valid-typeof': error,

    // "best practices"
    'accessor-pairs': error,
    'array-callback-return': warn,
    'block-scoped-var': warn,
    'complexity': [warn, 5],
    'consistent-return': warn,
    'curly': [error, 'all'],
    'default-case': warn,
    'dot-location': [error, 'property'],
    'dot-notation': warn,
    'eqeqeq': error,
    'guard-for-in': off,
    'no-alert': warn,
    'no-caller': error,
    'no-case-declarations': error,
    'no-div-regex': off,
    'no-else-return': error,
    'no-empty-pattern': error,
    'no-eq-null': error,
    'no-eval': error,
    'no-extend-native': error,
    'no-extra-bind': warn,
    'no-extra-label': warn,
    'no-fallthrough': error,
    'no-floating-decimal': warn,
    'no-implicit-coercion': warn,
    'no-implicit-globals': off,
    'no-implied-eval': error,
    'no-invalid-this': warn,
    'no-iterator': error,
    'no-labels': error,
    'no-lone-blocks': warn,
    'no-loop-func': error,
    // It's too restrictive. I'd rather have a threshold detected.
    'no-magic-numbers': off, // [warn, {ignoreArrayIndexes: true, detectObjects: true}],
    'no-multi-spaces': warn,
    'no-multi-str': error,
    'no-native-reassign': error,
    'no-new': warn,
    'no-new-func': warn, // If I ever actually use it, I don't want it to be an error.
    'no-new-wrappers': error,
    'no-octal': warn,
    'no-octal-escape': error,
    'no-param-reassign': error,
    'no-proto': error,
    'no-redeclare': error,
    'no-return-assign': error,
    'no-script-url': error,
    'no-self-assign': warn,
    'no-self-compare': error,
    'no-sequences': error,
    'no-throw-literal': error,
    'no-unmodified-loop-condition': warn,
    'no-unused-expressions': [error, {allowShortCircuit: true, allowTernary: true}],
    'no-unused-labels': error,
    'no-useless-call': error,
    'no-useless-concat': error,
    'no-useless-escape': error,
    'no-void': error,
    'no-warning-comments': warn,
    'no-with': error,
    'radix': [error, 'always'],
    'vars-on-top': off,
    'wrap-iife': [error, 'outside'],
    'yoda': error,

    // "variables"
    'init-declarations': off,
    'no-catch-shadow': off,
    'no-delete-var': error,
    'no-label-var': error,
    'no-restricted-globals': off,
    'no-shadow': [error, {builtinGlobals: true}],
    'no-shadow-restricted-names': error,
    'no-undef': warn,
    'no-undef-init': warn,
    'no-undefined': off,
    'no-unused-vars': warn,
    'no-use-before-define': error,

    // node
    'callback-return': error,
    'global-require': off,
    'handle-callback-err': warn,
    'no-mixed-requires': error,
    'no-new-require': error,
    'no-path-concat': error,
    'no-process-env': error,
    'no-process-exit': off,
    'no-restricted-modules': off,
    'no-sync': off,

    // "stylistic issues"
    'standard/array-bracket-even-spacing': [warn, 'either'],
    'block-spacing': [warn, 'always'],
    'brace-style': off, // it's complicated
    'camelcase': error,
    'comma-spacing': [error, {before: false, after: true}],
    'comma-style': [error, 'last'],
    'standard/computed-property-even-spacing': [error, 'even'],
    'consistent-this': [error, 'self'],
    'eol-last': error,
    'func-names': warn,
    'func-style': off,
    'id-blacklist': off,
    'id-length': off,
    'id-match': off,
    'indent': [error, 2, {
      SwitchCase: 1
    }],
    'jsx-quotes': off,
    'key-spacing': [warn, {beforeColon: false, afterColon: true, mode: 'minimum'}],
    'keyword-spacing': [warn, {before: true, after: true}],
    'linebreak-style': [error, 'unix'],
    'lines-around-comment': off,
    'max-depth': warn,
    'max-len': [warn, {
      code: 120,
      comments: 120,
      tabWidth: 2,
      ignoreTrailingComments: true,
      ignoreUrls: true
    }],
    'max-nested-callbacks': warn,
    'max-params': [warn, 4],
    'max-statements': warn,
    'max-statements-per-line': warn,
    'new-cap': warn,
    'new-parens': error,
    'newline-after-var': off,
    'newline-before-return': off,
    'newline-per-chained-call': off,
    'no-array-constructor': error,
    'no-bitwise': off,
    'no-continue': off,
    'no-inline-comments': off,
    'no-lonely-if': error,
    'no-mixed-spaces-and-tabs': [error, 'smart-tabs'],
    'no-multiple-empty-lines': [error, {max: 2, maxBOF: 0, maxEOF: 1}],
    'no-negated-condition': off,
    'no-nested-ternary': warn,
    'no-new-object': error,
    'no-plusplus': error,
    'no-restricted-syntax': [error, 'ClassBody', 'ClassDeclaration', 'ClassExpression'],
    'no-spaced-func': error,
    'no-ternary': off,
    'no-trailing-spaces': warn,
    'no-underscore-dangle': off,
    'no-unneeded-ternary': error,
    'no-whitespace-before-property': error,
    'standard/object-curly-even-spacing': [warn, 'either'],
    'one-var': [error, 'never'],
    'one-var-declaration-per-line': off,
    'operator-assignment': off,
    'operator-linebreak': [error, 'after'],
    'padded-blocks': off,
    'quote-props': [warn, 'consistent-as-needed', {keywords: true}],
    'quotes': [error, 'single', 'avoid-escape'],
    'require-jsdoc': off,
    'semi': [error, 'always'],
    'semi-spacing': [error, {before: false, after: true}],
    'sort-imports': off,
    'sort-vars': off,
    'space-before-blocks': [warn, 'always'],
    'space-before-function-paren': [warn, {anonymous: 'always', named: 'never'}],
    'space-in-parens': [warn, 'never'],
    'space-infix-ops': warn,
    'space-unary-ops': [warn, {words: true, nonwords: false}],
    'spaced-comment': [warn, 'always'],
    'wrap-regex': off,

    // es6
    'arrow-body-style': [error, 'as-needed'],
    'arrow-parens': [error, 'always'],
    'arrow-spacing': [error, {before: true, after: true}],
    'generator-star-spacing': [error, {before: false, after: true}],
    'no-confusing-arrow': [error, {allowParens: true}],
    'no-const-assign': error,
    'no-duplicate-imports': [error, {includeExports: false}],
    'no-new-symbol': error,
    'no-var': error,
    'object-shorthand': [warn, 'methods'],
    'prefer-error-callback': off,
    'prefer-const': error,
    'prefer-rest-params': off,
    'prefer-spread': off,
    'prefer-template': off, // not sure how it will handle multi-line strings
    'require-yield': error,
    'template-curly-spacing': [warn, 'never'],
    'yield-star-spacing': [error, {before: true, after: false}]
  }
};
