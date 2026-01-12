
module.exports = {
  presets: ['module:@react-native/babel-preset', 'nativewind/babel'],
  plugins: [
<<<<<<< Updated upstream
    [
      'react-native-reanimated/plugin',
      'react-native-worklets/plugin',
      workletsPluginOptions,
    ],
=======
    ['react-native-worklets/plugin', 'react-native-worklets-core/plugin'],
>>>>>>> Stashed changes
  ],
};
