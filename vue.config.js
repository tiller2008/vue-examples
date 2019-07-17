// vue.config.js
const path = require('path')
// mock
const mockIndexData = require('./mock/index.json')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  // https://cli.vuejs.org/zh/config/#全局-cli-配置
  chainWebpack (config) {
    config.resolve.alias
      .set('styles', resolve('src/assets/styles'))
  },
  devServer: {
    port: 8080,
    before (app, server) {
      app.get('/api/index.json', (req, res) => {
        res.json(mockIndexData)
      })
    }
  }
}
