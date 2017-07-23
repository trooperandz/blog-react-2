module.exports = {
  entry: [
    './app/app.js'
  ],
  output: {
    path: __dirname + '/app',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-1']
        }
      },
      // {
      //   test: /\.css$/,
      //   loader: 'style-loader!css-loader?modules',
      //   include: /flexboxgrid/,
      //   query: {
      //     modules: true,
      //     localIdentName: '[name]__[local]___[hash:base64:5]'
      //   }
      // },
      // {
      //   test: /\.css$/,
      //   loader: 'css-loader',
      //   query: {
      //     modules: true,
      //     localIdentName: '[name]__[local]___[hash:base64:5]'
      //   }
      // }
      {
        test: /\.css$/,
        loader: 'style-loader',
        include: /flexboxgrid/,
      },
      {
        test: /\.css$/,
        loader: 'css-loader',
        query: {
          modules: true,
          localIdentName: '[name]__[local]___[hash:base64:5]'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};