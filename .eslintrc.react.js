module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:react/recommended"
  ],
  overrides: [
    {
      files: ["*.js", "*.ts", "*.tsx"],
      rules: {
        "@typescript-eslint/no-unused-vars": [
          1,
          {
            args: "none"
          }
        ]
      }
    }
  ],
  ignorePatterns: [
    ".eslintrc.js"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    sourceType: "module"
  },
  plugins: [
    "react-hooks",
    "@typescript-eslint"
  ],
  rules: {

    // Manually Set
    "@typescript-eslint/no-inferrable-types": 0,
    "@typescript-eslint/ban-ts-ignore": 0,
    "@typescript-eslint/camelcase": 0,
    "@typescript-eslint/no-floating-promises": 0,
    "@typescript-eslint/no-unnecessary-type-assertion": 0,
    "@typescript-eslint/no-unsafe-assignment": 0,
    "@typescript-eslint/no-unsafe-call": 0,
    "@typescript-eslint/no-unsafe-return": 0,
    "@typescript-eslint/require-await": 0,
    "@typescript-eslint/unbound-method": 0,
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/no-unescaped-entities": "warn",
    "react/prop-types": 0,
    "sort-imports": ["error", {
      "ignoreCase": true,
      "ignoreDeclarationSort": true,
      "ignoreMemberSort": true,
      "memberSyntaxSortOrder": ["none", "all", "multiple", "single"]
    }],
    "prefer-arrow-callback": [
      "error",
      {
        "allowUnboundThis": false
      }
    ],

    // Generated
    "array-callback-return": "warn",
    "default-case": [
      "warn",
      {
        "commentPattern": "^no default$"
      }
    ],
    "dot-location": [
      "warn",
      "property"
    ],
    "eqeqeq": [
      "warn",
      "always"
    ],
    "new-parens": "off",
    "no-array-constructor": [
      "warn"
    ],
    "no-caller": "error",
    "no-cond-assign": "error",
    "no-const-assign": [
      "warn"
    ],
    "no-control-regex": [
      "warn"
    ],
    "no-delete-var": [
      "warn"
    ],
    "no-dupe-args": [
      "warn"
    ],
    "no-dupe-class-members": [
      "warn"
    ],
    "no-dupe-keys": [
      "warn"
    ],
    "no-duplicate-case": "error",
    "no-empty-character-class": [
      "warn"
    ],
    "no-empty-pattern": [
      "warn"
    ],
    "no-eval": "error",
    "no-ex-assign": [
      "warn"
    ],
    "no-extend-native": [
      "warn"
    ],
    "no-extra-bind": [
      "warn"
    ],
    "no-extra-label": [
      "warn"
    ],
    "no-fallthrough": "off",
    "no-func-assign": [
      "warn"
    ],
    "no-implied-eval": [
      "warn"
    ],
    "no-invalid-regexp": [
      "warn"
    ],
    "no-iterator": [
      "warn"
    ],
    "no-label-var": [
      "warn"
    ],
    "no-labels": [
      "warn",
      {
        "allowLoop": true,
        "allowSwitch": false
      }
    ],
    "no-lone-blocks": [
      "warn"
    ],
    "no-loop-func": [
      "warn"
    ],
    "no-mixed-operators": [
      "warn",
      {
        "groups": [
          [
            "&",
            "|",
            "^",
            "~",
            "<<",
            ">>",
            ">>>"
          ],
          [
            "==",
            "!=",
            "===",
            "!==",
            ">",
            ">=",
            "<",
            "<="
          ],
          [
            "&&",
            "||"
          ],
          [
            "in",
            "instanceof"
          ]
        ],
        "allowSamePrecedence": false
      }
    ],
    "no-multi-str": [
      "warn"
    ],
    "no-native-reassign": [
      "warn"
    ],
    "no-negated-in-lhs": [
      "warn"
    ],
    "no-new-func": [
      "warn"
    ],
    "no-new-object": [
      "warn"
    ],
    "no-new-symbol": [
      "warn"
    ],
    "no-new-wrappers": "error",
    "no-obj-calls": [
      "warn"
    ],
    "no-octal": [
      "warn"
    ],
    "no-octal-escape": [
      "warn"
    ],
    "no-redeclare": "error",
    "no-regex-spaces": [
      "warn"
    ],
    "no-restricted-syntax": [
      "warn",
      "WithStatement"
    ],
    "no-script-url": [
      "warn"
    ],
    "no-self-assign": [
      "warn"
    ],
    "no-self-compare": [
      "warn"
    ],
    "no-sequences": "error",
    "no-shadow-restricted-names": [
      "warn"
    ],
    "no-sparse-arrays": [
      "warn"
    ],
    "no-template-curly-in-string": [
      "warn"
    ],
    "no-this-before-super": [
      "warn"
    ],
    "no-throw-literal": "error",
    "no-undef": [
      "error"
    ],
    "no-restricted-globals": [
      "error",
      "addEventListener",
      "blur",
      "close",
      "closed",
      "confirm",
      "defaultStatus",
      "defaultstatus",
      "event",
      "external",
      "find",
      "focus",
      "frameElement",
      "frames",
      "history",
      "innerHeight",
      "innerWidth",
      "length",
      "location",
      "locationbar",
      "menubar",
      "moveBy",
      "moveTo",
      "name",
      "onblur",
      "onerror",
      "onfocus",
      "onload",
      "onresize",
      "onunload",
      "open",
      "opener",
      "opera",
      "outerHeight",
      "outerWidth",
      "pageXOffset",
      "pageYOffset",
      "parent",
      "print",
      "removeEventListener",
      "resizeBy",
      "resizeTo",
      "screen",
      "screenLeft",
      "screenTop",
      "screenX",
      "screenY",
      "scroll",
      "scrollbars",
      "scrollBy",
      "scrollTo",
      "scrollX",
      "scrollY",
      "self",
      "status",
      "statusbar",
      "stop",
      "toolbar",
      "top"
    ],
    "no-unreachable": [
      "warn"
    ],
    "no-unused-expressions": "error",
    "no-unused-labels": "error",
    "no-use-before-define": [
      "warn",
      {
        "functions": false,
        "classes": false,
        "variables": false
      }
    ],
    "no-useless-computed-key": [
      "warn"
    ],
    "no-useless-concat": [
      "warn"
    ],
    "no-useless-constructor": [
      "warn"
    ],
    "no-useless-escape": [
      "warn"
    ],
    "no-useless-rename": [
      "warn",
      {
        "ignoreDestructuring": false,
        "ignoreImport": false,
        "ignoreExport": false
      }
    ],
    "no-with": [
      "warn"
    ],
    "no-whitespace-before-property": [
      "warn"
    ],
    "require-yield": [
      "warn"
    ],
    "rest-spread-spacing": [
      "warn",
      "never"
    ],
    "strict": [
      "warn",
      "never"
    ],
    "unicode-bom": [
      "warn",
      "never"
    ],
    "use-isnan": "error",
    "valid-typeof": "off",
    "no-restricted-properties": [
      "error",
      {
        "object": "require",
        "property": "ensure",
        "message": "Please use import() instead. More info: https://facebook.github.io/create-react-app/docs/code-splitting"
      },
      {
        "object": "System",
        "property": "import",
        "message": "Please use import() instead. More info: https://facebook.github.io/create-react-app/docs/code-splitting"
      }
    ],
    "getter-return": [
      "warn"
    ],
    "@typescript-eslint/array-type": "error",
    "@typescript-eslint/consistent-type-assertions": "off",
    "@typescript-eslint/consistent-type-definitions": "error",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-member-accessibility": [
      "error",
      {
        "accessibility": "explicit"
      }
    ],
    "@typescript-eslint/indent": "off",
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/member-delimiter-style": [
      "off",
      {
        "multiline": {
          "delimiter": "none",
          "requireLast": true
        },
        "singleline": {
          "delimiter": "semi",
          "requireLast": false
        }
      }
    ],
    "@typescript-eslint/member-ordering": "error",
    "@typescript-eslint/no-empty-interface": "warn",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-parameter-properties": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/prefer-for-of": "warn",
    "@typescript-eslint/prefer-function-type": "error",
    "@typescript-eslint/quotes": "error",
    "@typescript-eslint/semi": [
      "off",
      null
    ],
    "@typescript-eslint/space-within-parens": [
      "off",
      "never"
    ],
    "@typescript-eslint/type-annotation-spacing": "off",
    "@typescript-eslint/unified-signatures": "warn",
    "arrow-body-style": "off",
    "arrow-parens": [
      "off",
      "as-needed"
    ],
    "comma-dangle": "warn",
    "complexity": "off",
    "constructor-super": "error",
    "curly": "error",
    "dot-notation": "error",
    "eol-last": "off",
    "guard-for-in": "error",
    "id-blacklist": "off",
    "id-match": "off",
    "import/no-internal-modules": "off",
    "linebreak-style": "off",
    "max-classes-per-file": [
      "error",
      1
    ],
    "max-len": "off",
    "newline-per-chained-call": "off",
    "no-bitwise": "error",
    "no-console": "off",
    "no-debugger": "error",
    "no-duplicate-imports": "off",
    "no-empty": [
      "error",
      {
        "allowEmptyCatch": true
      }
    ],
    "no-extra-semi": "off",
    "no-invalid-this": "error",
    "no-irregular-whitespace": "off",
    "no-multiple-empty-lines": "off",
    "no-shadow": [
      "error",
      {
        "hoist": "all"
      }
    ],
    "no-trailing-spaces": "off",
    "no-undef-init": "error",
    "no-underscore-dangle": "off",
    "no-unsafe-finally": "error",
    "no-var": "warn",
    "no-void": "off",
    "object-shorthand": "error",
    "one-var": [
      "error",
      "never"
    ],
    "prefer-const": "warn",
    "quote-props": "off",
    "radix": "error",
    "space-before-function-paren": "off",
    "spaced-comment": "warn"
  },
  settings: {
    react: {
      version: "detect"
    }
  }
};
