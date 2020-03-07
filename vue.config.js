module.exports = {
  configureWebpack: {
    devServer: {
      proxy: {
        '/api/*': {
          target: 'http://server:2941',
          pathRewrite: { '^/api': '' },
          secure: false,
          changeOrigin: true
        }
      }
    }
  },
  pages: {
    index: {
      entry: 'src/main.ts',
      template: 'public/index.html',
      filename: 'index.html'
    },
    login: {
      entry: 'src/login.ts',
      template: 'public/index.html',
      filename: 'login.html'
    }
  }
}
