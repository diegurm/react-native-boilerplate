module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
  plugins: [
    ['babel-plugin-root-import', {
      rootPathPrefix: '~',
      rootPathSuffix: 'src',
    }],
    'react-native-reanimated/plugin', // Ensure this line is present
  ],
};
