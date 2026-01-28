// https://docs.expo.dev/guides/using-eslint/
const conartiFSD = require('@conarti/eslint-plugin-feature-sliced')
const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');

module.exports = defineConfig([
  expoConfig,
  {
    ignores: ['dist/*'],
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      '@conarti/feature-sliced': conartiFSD,
    },
    rules: {
      // FSD and imports
      '@conarti/feature-sliced/layers-slices': 'error',
      '@conarti/feature-sliced/absolute-relative': 'error',
      '@conarti/feature-sliced/public-api': 'error',
    },
  },
])
