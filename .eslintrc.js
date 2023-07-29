module.exports = {
  root: true,
  extends: ['@react-native-community', "prettier/@typescript-eslint"],
  parser: '@typescript-eslint/parser',
  plugins: ["react", "prettier", "import", "jsx-a11y", "@typescript-eslint"],
  rules: {
    'no-shadow': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.js', '.jsx','tsx'],
      },
    ],
    'import/prefer-default-export': 'off',
    'no-use-before-define': 'off',
    'class-methods-use-this': 'off',
    'import/no-unresolved': [2, { caseSensitive: false }],
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
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
  },
  settings: {
    'import/resolver': {
      typescript: {},
      'babel-plugin-root-import': {
        rootPathPrefix: '~',
        rootPathSuffix: 'src',
      },
    },
  },
};