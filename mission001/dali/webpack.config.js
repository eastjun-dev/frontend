const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const templatePath = './src/index.html';
module.exports = (env, options) => {
  const config = {
    entry: {
      app: ['./src/js/app.js']
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all'
          }
        }
      }
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
        {
          test: /\.scss$/,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader'
          ]
        },
        {
            test: /\.(js|jsx)$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
        },
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({template: './src/index.html'})
    ]
  };

  if(options.mode === 'development') {
    //... Development 설정
    config.plugins = [
      new MiniCssExtractPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        title: 'Development',
        filename: 'index.html',
        template: templatePath,
        showErrors: true, // 에러 발생시 메세지가 브라우저 화면에 노출 된다.
        minify: {
          collapseWhitespace: true,
          removeComments: true,
        },
        hash: true,
      }),
    ];

    config.devtool = 'inline-source-map';

    config.devServer = {
      hot: true, // 서버에서 HMR을 켠다.
      host: '0.0.0.0', // 디폴트로는 "localhost" 로 잡혀있다. 외부에서 개발 서버에 접속해서 테스트하기 위해서는 '0.0.0.0'으로 설정해야 한다.
      contentBase: './dist', // 개발서버의 루트 경로
      stats: {
        color: true
      }
    };
  } else {
    //... Production 설정
    config.plugins = [
      new CleanWebpackPlugin()
    ];
  }

  return config;
}


