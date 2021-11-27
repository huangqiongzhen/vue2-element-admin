// 代理配置
module.exports = {
  '/api': {
    target: 'https://www.fastmock.site/mock',
    ws: true,
    changeOrigin: true,
    pathRewrite: {
      '^/api/': ''
    }
  }
}
