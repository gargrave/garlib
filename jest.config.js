module.exports = {
  moduleFileExtensions: ['js', 'ts'],
  testMatch: ['<rootDir>/src/**/?(*.)spec.{js,ts}'],
  testURL: 'http://localhost',
  transform: {
    '^.+\\.(js|ts)$': '<rootDir>/node_modules/babel-jest',
  },
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|ts)$'],
}
