const port = process.env.port || 8088
const path = require('path')

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
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        target: 'https://www.fastmock.site/mock',
        ws: true,
        pathRewrite: {
          [process.env.VUE_APP_BASE_API]: ''
        },
        changeOrigin: true
      }
    }
  },
  // 设置别名
  configureWebpack: {
    name: 'vue2-vant-master',
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
