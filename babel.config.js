const workletsPluginOptions = {
  // Your custom options.
};

module.exports = {
  presets: ['module:@react-native/babel-preset', 'nativewind/babel'],
  plugins: [
    [
      'react-native-reanimated/plugin',
      'react-native-worklets/plugin',
      workletsPluginOptions,
    ],
  ],
};
