/* eslint-env node */

module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:react-hooks/recommended',
    "react-app", 
    "react-app/jest"
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: true,
    tsconfigRootDir: __dirname,
  },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    '@typescript-eslint/no-non-null-assertion': 'off',
  },
  settings: {
    'import/resolver': {
        node: {
            extensions: ['.js', '.tsx', '.ts', '.d.ts'],
        },
        alias: {
            extensions: ['.tsx', '.js', '.ts', '.scss', '.d.ts'],
            map: [
                ['@/components', './src/components'],
                ['@/pages', './src/pages'],
                ['@/theme', './src/theme'],
                ['@/types', './src/@types'],
                ['@/utils', './src/utils'],
            ],
        },
    },
  },
}
