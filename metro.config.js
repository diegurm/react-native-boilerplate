const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const path = require('path');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  resolver: {
    'react-native-vector-icons': path.resolve(
      __dirname,
      'node_modules/react-native-vector-icons',
    )
  }
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
