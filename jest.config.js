module.exports = {
  coverageDirectory: './coverage',
  moduleFileExtensions: ['js', 'json'],
  // Module name mapper set to ignore css imports
  moduleNameMapper: { '\\.(css|less|scss|sass)$': 'identity-obj-proxy' },
  // Transform here was used to fix the issue of importing SVG files
  transform: {
    '^.+\\.js$': 'babel-jest',
    '\\.svg$': './mockSVG.js',
    '\\.png$': './mockSVG.js'
  },
  // Enviroment set to jsdom instead of node
  testEnvironment: 'jsdom',
  testRegex: ['.spec.js$', '.test.js$'],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$']
};
