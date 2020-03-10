module.exports = {
  devServer: {
    proxy: {
      '/api': {
        // 目标的地址
        target: 'http://localhost:8080',
        // 是否跨域
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}