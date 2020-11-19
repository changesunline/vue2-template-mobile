module.exports = {
  publicPath: '/',
  devServer: {
    proxy: {
      '/api': {
        target: 'http://123.207.51.199:8040',
        ws: true,
        changeOrigin: true, //是否跨域
        pathRewrite: {
          '^/api': ''
        }
      }
    }
    // port: 9090
  }
}