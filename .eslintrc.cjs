module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  ignorePatterns: ['**/*_.js', '**/*_.js', '**/*_/*.js'],
  rules: {
    'max-classes-per-file': 'off',
    'no-console': 'off',
    'no-constructor-return': 'off',
    'import/extensions': ['error',
      { js: 'always' },
    ],
  },
  settings: {
    'import/ignore': [
      '^https?://',
    ],
  },
};
