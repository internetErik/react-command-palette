const webpack = require('webpack');
const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CompressionPlugin = require("compression-webpack-plugin")

const env = 'dev';

let config = {
  mode: 'development',
  entry: {
    app : './app/index.js'
  },
  output: {
    path     : __dirname + '/build/',
    filename : '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          plugins: [
            '@babel/plugin-syntax-dynamic-import',
            '@babel/plugin-syntax-import-meta',
            '@babel/plugin-proposal-class-properties',
            '@babel/plugin-proposal-json-strings',
            [
              '@babel/plugin-proposal-decorators',
              {
                'legacy': true
              }
            ],
            '@babel/plugin-proposal-function-sent',
            '@babel/plugin-proposal-export-namespace-from',
            '@babel/plugin-proposal-numeric-separator',
            '@babel/plugin-proposal-throw-expressions',
          ],
          presets: [
            ['@babel/preset-env', {
              'targets': {
                'browsers': [
                  '>0.25%',
                  'not ie 11',
                  'not op_mini all',
                ]
              }
            }],
            '@babel/preset-react',
          ],
        }
      },
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        loader: 'file-loader',
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader?sourceMap"
        ]
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.css',
    }),
    // new BundleAnalyzerPlugin(),
  ]
};

config.devtool = 'source-map';

if (env === 'staged' || env === 'production') {
  config.devtool = 'nosources-source-map';

  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production',
      DEBUG: false,
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new CompressionPlugin({
      include: /.*\.(css|js)/,
      asset: '[file]',
    }),
  );
}

module.exports = config;

