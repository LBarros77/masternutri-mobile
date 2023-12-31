module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'expo-router/babel',
      'inline-dotenv',
      'react-native-reanimated/plugin',
    ],
  };
};