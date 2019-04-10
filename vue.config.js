// vue.config.js
module.exports = {
    // 修改的配置
    // 将baseUrl: '/api',改为baseUrl: '/',
    publicPath: '/',
    devServer: {
        proxy: {
            '/api': {
                target: 'https://m.9ji.com',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}