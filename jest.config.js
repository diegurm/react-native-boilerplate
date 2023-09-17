module.exports = {
  preset: 'react-native',
  setupFiles: ['./jestSetupFile.js'],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  moduleDirectories: ['node_modules', './test'],
  modulePathIgnorePatterns: ['mocks', 'e2e/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
