module.exports = {
  transpileDependencies: ["vuetify"],
  devServer: {
    watchOptions: {
      poll: 500
    },
    proxy: 'http://localhost:5000'
  }
};
