// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require("eslint/config")
const conartiFSD = require("@conarti/eslint-plugin-feature-sliced")
const expoConfig = require("eslint-config-expo/flat")

module.exports = defineConfig([
  expoConfig,
  { ignores: ["dist/*"] },
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: {
      "@conarti/feature-sliced": conartiFSD,
    },
    rules: {
      // General rules
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],

      // FSD and imports
      "@conarti/feature-sliced/layers-slices": "error",
      "@conarti/feature-sliced/absolute-relative": "error",
      "@conarti/feature-sliced/public-api": "error",
    },
  },
  // override for app-layer
  {
    files: ["src/app/**/*.{ts,tsx}"],
    rules: {
      "@conarti/feature-sliced/public-api": "off",
    },
  },
])
