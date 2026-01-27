module.exports = {
  root: true,
  extends: [
    'expo',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:@conarti/feature-sliced/recommended',
  ],
  plugins: ['boundaries'],
  rules: {
    'boundaries/element-types': [
      2,
      {
        default: 'disallow',
        rules: [
          { from: 'shared', allow: ['shared'] },
          { from: 'entities', allow: ['shared', 'entities'] },
          { from: 'features', allow: ['shared', 'entities', 'features'] },
          { from: 'pages', allow: ['shared', 'entities', 'features', 'pages'] },
          { from: 'app', allow: ['*'] },
        ],
      },
    ],
  },
  settings: {
    'boundaries/elements': [
      { type: 'shared', pattern: 'src/shared/*' },
      { type: 'entities', pattern: 'src/entities/*' },
      { type: 'features', pattern: 'src/features/*' },
      { type: 'pages', pattern: 'src/pages/*' },
      { type: 'app', pattern: 'src/app/*' },
    ],
  },
}
