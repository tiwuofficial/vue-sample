module.exports = {
  entry: './src/js/app.js',
  output: {
    path: __dirname,
    filename: './src/js/bundle.js'
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm.js',
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      }
    ]
  }
};