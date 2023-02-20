const { defineConfig } = require('@vue/cli-service')
module.exports = Object.assign(defineConfig({
  transpileDependencies: true
}), {
  publicPath: './',
})