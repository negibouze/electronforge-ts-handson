const rules = require('./webpack.rules');
const path = require('path');

rules.push({
  test: /\.(s?css)$/,
  use: ['style-loader', 'css-loader', 'sass-loader']
});

module.exports = {
  // Put your normal webpack config below here
  module: {
    rules
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
  }
};
