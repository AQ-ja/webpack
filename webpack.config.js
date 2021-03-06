const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: './src/start.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
     },
     plugins: [new MiniCssExtractPlugin()],
     
     module: {
        rules: [{ test: /\.css$/i, use: ["MiniCssExtractPlugin.loader", "css-loader"] },
          {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
              {
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                },
              },
            ],

          },
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: "babel-loader",
          },

        ],
      },
    };

