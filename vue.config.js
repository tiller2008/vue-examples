// vue.config.js
const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  // https://cli.vuejs.org/zh/config/#全局-cli-配置
  chainWebpack (config) {
    config.resolve.alias
      .set('styles', resolve('src/assets/styles'))
  }
}
