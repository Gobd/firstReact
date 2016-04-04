module.exports = {
  entry: './src/app.js',
  output: {
      path: './public/js',
      filename: 'bundle.js'
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          include: /src/,
          exclude: /(node_modules)/,
          loader: 'babel-loader',
          query: {
            presets: ['es2015','react', 'stage-0']
          }
        }
      ]
    }
}
