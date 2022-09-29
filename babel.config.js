module.exports = {
  presets: ["@rnx-kit/babel-preset-metro-react-native"],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@demo': './src',
        },
      },
    ],
  ],
};
