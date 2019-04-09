// vue.config.js
module.exports = {
    baseUrl: '/',
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