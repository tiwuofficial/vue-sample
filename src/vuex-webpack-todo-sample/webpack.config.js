module.exports = {
  entry: './src/js/app.js',
  output: {
    path: __dirname,
    filename: './src/js/bundle.js'
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js',
      vuex: 'vuex/dist/vuex.js',
    }
  }
};