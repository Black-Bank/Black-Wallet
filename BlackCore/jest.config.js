module.exports = {
  preset: '@testing-library/react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testMatch: ['<rootDir>/src/**/*.test.{js,jsx,ts,tsx}'],

  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?@react-native|react-native|react-navigation|@react-navigation|@bankify/react-native-animate-number|rn-sliding-up-panel|rn-sliding-up-panel|@react-native-community/progress-bar-android|@react-native-community/progress-view|@bees-bank/hive|@react-native-picker)',
  ],

  modulePaths: ['<rootDir>'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/jest/mocks/fileMock.js',
    '~/(.*)': '<rootDir>/src/$1',
  },
  moduleDirectories: ['node_modules', './node_modules'],
  testTimeout: 10000,
};
