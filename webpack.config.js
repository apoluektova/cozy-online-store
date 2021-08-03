const path = require(`path`);
const miniCss = require('mini-css-extract-plugin');

module.exports = {
  entry: `./src/js/index.js`,
  output: {
    filename: `bundle.js`,
    path: path.join(__dirname, `public`)
  },
  devServer: {
    contentBase: path.join(__dirname, `public`),
    open: false,
    port: 1337,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: `babel-loader`,
        },
      },
      {
        test: /\.(s*)css$/,
        use: [
          miniCss.loader,
          `css-loader`,
          `sass-loader`,
        ]
      },
      {
        test: /\.(woff|woff2)$/,
        use: {
            loader: 'file-loader',
            options: {
                name: '[name].[ext]',
                outputPath: 'fonts/'
            },
        },
    },
    ],
  },
  plugins: [
    new miniCss({
      filename: `style.css`,
    }),
  ],
  devtool: `source-map`,
};
