const port = process.env.port || 8088
const path = require('path')
const proxy = require('./vue.proxy.config')
const StyleLintPlugin = require('stylelint-webpack-plugin')
const publicPath = process.env.NODE_ENV === 'production' ? './' : '/'
const isEnvProduction = process.env.NODE_ENV === 'production'

function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  publicPath: publicPath,
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
        '@components': resolve('src/components'),
        '@views': resolve('src/views'),
        '@utils': resolve('src/utils'),
        '@styles': resolve('src/styles')
      }
    },
    plugins: [
      // 打包编译时自动检查
      new StyleLintPlugin({
        files: ['**/*.{vue,htm,html,css,sss,less,scss,sass}'],
        fix: true,
        failOnError: !isEnvProduction,
        failOnWarning: false,
        quiet: isEnvProduction
      })
    ]
  }
}
