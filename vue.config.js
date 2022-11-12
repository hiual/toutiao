const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    // 暂时关闭eslint检查
    lintOnSave: false
})