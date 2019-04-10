// vue.config.js
module.exports = {
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