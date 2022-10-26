const LINT_ALL_WARNINGS = process.env.LINT_ALL_WARNINGS ? 1 : 0

module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jest/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:json/recommended',
    'plugin:@adl/recommended'
  ],
  plugins: [
    'react',
    'react-hooks',
    'html',
    'json',
    'jest',
    'prettier',
    'import',
    'eslint-plugin-local-rules',
    'jsx-a11y',
    '@typescript-eslint',
    'cypress',
    '@adl',
    '@nrwl/eslint-plugin-nx'
  ],
  settings: {
    'html/indent': '0',
    es6: true,
    react: {
      version: 'detect'
    },
    propWrapperFunctions: ['forbidExtraProps'],
    'import/internal-regex': '^@adl|@glass|@order-api',
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
      }
    }
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
    'cypress/globals': true
  },
  globals: {
    google: true,
    shallow: true,
    mount: true,
    context: true,
    expect: true,
    jsdom: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      modules: true
    },
    lib: ['dom', 'es2020']
  },
  rules: {
    eqeqeq: ['error', 'smart'],
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
    'no-console': 'error',
    'no-unused-vars': [
      'error',
      {
        varsIgnorePattern: '^_',
        argsIgnorePattern: '^_'
      }
    ],
    'prefer-const': [
      'error',
      {
        destructuring: 'any'
      }
    ],
    'no-restricted-modules': ['error', 'chai'],
    'no-debugger': 'error',

    'one-var': ['error', { initialized: 'never' }],
    'no-mixed-operators': 0,
    'no-var': 'error',
    'require-await': 'error',
    'local-rules/disallow-simple-logical-tautologies': 'error',
    'no-restricted-globals': [
      'error',
      'addEventListener',
      'blur',
      'close',
      'closed',
      'confirm',
      'defaultStatus',
      'defaultstatus',
      'event',
      'external',
      'find',
      'focus',
      'frameElement',
      'frames',
      'history',
      'innerHeight',
      'innerWidth',
      'length',
      'localStorage',
      'location',
      'locationbar',
      'menubar',
      'moveBy',
      'moveTo',
      'name',
      'onblur',
      'onerror',
      'onfocus',
      'onload',
      'onresize',
      'onunload',
      'open',
      'opener',
      'opera',
      'outerHeight',
      'outerWidth',
      'pageXOffset',
      'pageYOffset',
      'parent',
      'print',
      'removeEventListener',
      'resizeBy',
      'resizeTo',
      'screen',
      'screenLeft',
      'screenTop',
      'screenX',
      'screenY',
      'scroll',
      'scrollbars',
      'scrollBy',
      'scrollTo',
      'scrollX',
      'scrollY',
      'self',
      'status',
      'statusbar',
      'stop',
      'toolbar',
      'top'
    ],
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'react-redux',
            importNames: ['connect'],
            message: 'Please use connect from @glass/core/store instead.'
          }
        ],
        patterns: [
          'frontend/*' // caused by Visual Studio Code automatic import
        ]
      }
    ],
    'no-useless-catch': 0,
    'require-atomic-updates': 0,

    'no-import-assign': 'warn',
    'no-return-assign': 'warn',
    'no-undef-init': 'warn',

    // @adl
    '@adl/no-gl-recaptcha': process.env.NODE_ENV === 'production' ? 0 : 1,

    // Import rules
    'import/named': 'error',
    'import/no-deprecated': process.env.NODE_ENV === 'production' ? 0 : 1,
    'import/no-duplicates': 'error',
    'import/no-unresolved': 'off',
    'import/order': [
      'error',
      {
        alphabetize: { caseInsensitive: true, order: 'asc' },
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index'
        ],
        'newlines-between': 'always'
      }
    ],

    // React
    'react/prop-types': 'warn',
    'react/jsx-no-literals': 1,
    'react/no-deprecated': 'error',
    'react/jsx-no-target-blank': LINT_ALL_WARNINGS,
    'react/jsx-curly-brace-presence': [
      'error',
      { children: 'ignore', props: 'never' }
    ],
    'react/display-name': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    // Jest rules
    'jest/valid-expect': 'off',
    'jest/no-disabled-tests': 'off',
    'jest/valid-describe': 'off',
    'jest/no-conditional-expect': 'warn',
    'jest/no-done-callback': 'warn',
    'jest/no-standalone-expect': 'warn',
    'jest/no-try-expect': 'warn',
    'jest/no-export': 'warn',

    // Accessibility rules
    'jsx-a11y/click-events-have-key-events': LINT_ALL_WARNINGS,
    'jsx-a11y/alt-text': LINT_ALL_WARNINGS,
    'jsx-a11y/no-static-element-interactions': LINT_ALL_WARNINGS,
    'jsx-a11y/anchor-is-valid': LINT_ALL_WARNINGS,
    'jsx-a11y/no-onchange': LINT_ALL_WARNINGS,
    'jsx-a11y/no-noninteractive-element-interactions': LINT_ALL_WARNINGS,
    'jsx-a11y/no-autofocus': LINT_ALL_WARNINGS,
    'jsx-a11y/label-has-for': LINT_ALL_WARNINGS,
    'jsx-a11y/label-has-associated-control': LINT_ALL_WARNINGS,
    'jsx-a11y/media-has-caption': LINT_ALL_WARNINGS,
    'jsx-a11y/iframe-has-title': LINT_ALL_WARNINGS,
    'jsx-a11y/heading-has-content': LINT_ALL_WARNINGS,
    'jsx-a11y/anchor-has-content': LINT_ALL_WARNINGS,
    'jsx-a11y/no-noninteractive-tabindex': LINT_ALL_WARNINGS,
    'jsx-a11y/tabindex-no-positive': LINT_ALL_WARNINGS,
    'jsx-a11y/mouse-events-have-key-events': LINT_ALL_WARNINGS,

    // Local rules, as defined in eslint-local-rules.js
    'local-rules/disallow-internal-imports': 'error',
    'local-rules/disallow-bind-methods': 'error',
    'local-rules/disallow-global-ssr-check': 0,

    'local-rules/disallow-undeclared-imports': 'warn'
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: ['plugin:@typescript-eslint/recommended'],
      parser: '@typescript-eslint/parser',
      rules: {
        // done by the TS compiler
        'no-redeclare': 'off',
        'no-use-before-define': 'off',
        'no-undef': 'off',
        'no-unused-vars': 'off',
        'import/no-unresolved': 'off',
        'import/named': 'off',
        'prefer-rest-params': 'warn', // TODO: Turn into error
        'prefer-spread': 'warn', // TODO: Turn into error
        'react/prop-types': 'off',
        // Manually override some of the @typescript-eslint/recommended
        // settings to be in line with `eslint-config-adidas-typescript`
        // config found in https://github.com/adidas/js-linter-configs
        '@typescript-eslint/adjacent-overload-signatures': 'error',
        '@typescript-eslint/ban-ts-comment': [
          'warn', // TODO: Turn into error
          {
            'ts-expect-error': 'allow-with-description',
            'ts-ignore': 'allow-with-description',
            'ts-nocheck': 'allow-with-description',
            'ts-check': false,
            minimumDescriptionLength: 3
          }
        ],
        '@typescript-eslint/ban-types': 'warn', // TODO: Turn into error
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'no-array-constructor': 'off',
        '@typescript-eslint/no-array-constructor': 'error',
        'no-empty-function': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-empty-interface': 'warn', // TODO: Turn into error
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-extra-non-null-assertion': 'warn', // TODO: Turn into error
        'no-extra-semi': 'off',
        '@typescript-eslint/no-extra-semi': 'off',
        '@typescript-eslint/no-inferrable-types': 'off', // TODO: Enable rule
        '@typescript-eslint/no-misused-new': 'error',
        '@typescript-eslint/no-namespace': 'warn',
        '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off', // TODO: Enable rule
        '@typescript-eslint/no-this-alias': 'error',
        '@typescript-eslint/no-unused-vars': [
          'warn', // TODO: Turn into error
          {
            varsIgnorePattern: '^_',
            argsIgnorePattern: '^_',
            ignoreRestSiblings: true
          }
        ],
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/prefer-as-const': 'error',
        '@typescript-eslint/prefer-namespace-keyword': 'error',
        '@typescript-eslint/triple-slash-reference': 'error'
      }
    },
    {
      files: ['cypress/**/*'],
      rules: {
        'jest/expect-expect': 'off',
        'jest/no-standalone-expect': 'off',
        'jest/valid-expect-in-promise': 'off'
      }
    },
    {
      files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
      rules: {
        '@nrwl/nx/enforce-module-boundaries': [
          'error',
          {
            allow: [],
            depConstraints: [
              {
                sourceTag: 'scope:shared',
                onlyDependOnLibsWithTags: ['scope:shared']
              },
              {
                sourceTag: 'scope:plp-rule-engine', // exception, should be converted to shared
                onlyDependOnLibsWithTags: [
                  'scope:shared',
                  'scope:lib',
                  'scope:tools'
                ]
              },
              {
                sourceTag: 'scope:lib',
                onlyDependOnLibsWithTags: ['scope:lib', 'scope:shared']
              },
              {
                sourceTag: 'scope:payment', // exception, should be converted to lib
                onlyDependOnLibsWithTags: [
                  'scope:lib',
                  'scope:shared',
                  'scope:api',
                  'scope:frontend-types'
                ]
              },
              {
                sourceTag: 'scope:frontend',
                onlyDependOnLibsWithTags: [
                  'scope:frontend',
                  'scope:shared',
                  'scope:frontend-types',
                  'scope:plp-rule-engine' // exception, should be removed
                ]
              },
              {
                sourceTag: 'scope:frontend-types',
                onlyDependOnLibsWithTags: [
                  'scope:shared',
                  'scope:plp-rule-engine' // exception, should be removed
                ]
              },
              {
                sourceTag: 'scope:bff',
                onlyDependOnLibsWithTags: [
                  'scope:lib',
                  'scope:shared',
                  'scope:frontend-types'
                ]
              },
              {
                sourceTag: 'scope:shell',
                onlyDependOnLibsWithTags: [
                  'scope:frontend',
                  'scope:shared',
                  'scope:frontend-types',
                  'scope:shell'
                ]
              },
              {
                sourceTag: 'scope:api',
                onlyDependOnLibsWithTags: [
                  'scope:api',
                  'scope:shared',
                  'scope:lib',
                  'scope:tools', // should not reference this
                  'scope:frontend-types', // should not reference this
                  'scope:plp-rule-engine'
                ]
              },
              {
                sourceTag: 'scope:productapi',
                onlyDependOnLibsWithTags: [
                  'scope:productapi',
                  'scope:shared',
                  'scope:lib'
                ]
              },
              {
                sourceTag: 'scope:tools',
                onlyDependOnLibsWithTags: [
                  'scope:tools',
                  'scope:lib',
                  'scope:shared'
                ]
              },
              {
                sourceTag: 'scope:cypress',
                onlyDependOnLibsWithTags: [
                  'scope:lib',
                  'scope:shared',
                  'scope:frontend-types'
                ]
              },
              {
                sourceTag: 'scope:micro-app',
                onlyDependOnLibsWithTags: [
                  'scope:frontend',
                  'scope:frontend-types',
                  'scope:shared',
                  'scope:shell'
                ]
              },
              {
                sourceTag: 'scope:micro-app-bff',
                onlyDependOnLibsWithTags: [
                  'scope:lib',
                  'scope:shared',
                  'scope:frontend-types'
                ]
              },
              {
                sourceTag: 'scope:checkout-bff',
                onlyDependOnLibsWithTags: [
                  'scope:lib',
                  'scope:shared',
                  'scope:frontend-types',
                  'scope:payment'
                ]
              },
              {
                sourceTag: 'scope:checkout-shell',
                onlyDependOnLibsWithTags: [
                  'scope:lib',
                  'scope:shared',
                  'scope:frontend',
                  'scope:frontend-types',
                  'scope:shell'
                ]
              }
            ]
          }
        ]
      }
    }
  ]
}
