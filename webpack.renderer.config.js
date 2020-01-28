const rules = require('./webpack.rules');

rules.push({
  test: /\.(s?css)$/,
  use: ['style-loader', 'css-loader', 'sass-loader']
});

module.exports = {
  // Put your normal webpack config below here
  module: {
    rules,
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
  } 
};
