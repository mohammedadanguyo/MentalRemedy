module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    [
      '@babel/preset-react',
      {
        pragma: 'dom',
        pragmaFrag: 'DomFrag',
        throwIfNamespace: false,
        runtime: 'classic'
      }
    ]
  ],
  plugins: [
    ['@babel/plugin-proposal-class-properties', { loose: true }]
  ]
};
