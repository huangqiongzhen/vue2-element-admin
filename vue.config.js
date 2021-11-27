const port = process.env.port || 8088
const path = require('path')
const proxy = require('./vue.proxy.config')

function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  indexPath: 'index.html',
  lintOnSave: process.env.NODE_ENV === 'development',
  devServer: {
    port,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: proxy
  },
  // 设置别名
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src'),
        'components': resolve('src/components'),
        'views': resolve('src/views'),
        'utils': resolve('src/utils'),
        'styles': resolve('src/styles')
      }
    }
  }
}
