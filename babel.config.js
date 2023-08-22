module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // Outros plugins que você possa ter
      'module:react-native-dotenv' // Adicione esta linha
    ],
  };
};
