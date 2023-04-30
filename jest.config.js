module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  transformIgnorePatterns: ['node_modules/(?!.*\\.mjs$)'],
  testPathIgnorePatterns: ['./node_modules/', './dist/', './cypress/'],
  testTimeout: 20000,
  moduleNameMapper: {
    '@styles/(.*)': '<rootDir>/src/assets/styles/',
    '@environments/(.*)': '<rootDir>/src/environments/$1',
    '@app/(.*)': '<rootDir>/src/app/$1',
    '@mock/(.*)': '<rootDir>/src/app/shared/mocks/$1',
    '@shared/(.*)': '<rootDir>/src/app/shared/$1',
  },
};
