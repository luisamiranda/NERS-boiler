module.exports = {
  entry: './react/index.js',
  output: {
    path: __dirname,
    filename: 'public/bundle.js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      { // this will bundle react files into bundle.js
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: {
          presets: ['react', 'es2015']
        }
      },
      { // this will bundle scss files into style.css
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  }
};
