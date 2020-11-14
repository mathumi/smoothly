const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');


function resolve(dir) {
  return path.join(__dirname, '.', dir);
}

module.exports = {
  mode: 'development',
  entry: './src/main.ts',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.bundle.js',
    library: 'smoothly',
    libraryTarget:'umd'  
  },
  serve: {
    hotClient: true,
    port: 9000,
  },
  
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            ts: {
              loader: 'ts-loader',
              options: {
                transpileOnly: true
              }
            }
          }
        },
      },
      {
        test: /\.ts?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [/\.vue$/],
        },
      },
      {
        test: /\.(png|jpg|gif|svg|eot|woff2|ttf|woff)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]',
          esModule: false,
        }, 
      },
      {
        test: /\.scss$/,
        use: ['vue-style-loader', 'css-loader', 'sass-loader', {
          loader: 'sass-resources-loader',
          options: {
              resources: './src/styles/tokens.scss'
          }
        }],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js', '.vue', '.json', '.styl', '.scss'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      '@': resolve('src'),
    },
  },
  devtool: '#eval-source-map',
  plugins: [
    // make sure to include the plugin for the magic
    new VueLoaderPlugin(),
    // new EsmWebpackPlugin() // To build as esm
  ],
};

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map';
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"',
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false,
      },
    }),
  ]);
}
