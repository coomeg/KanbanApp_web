module.exports = {
  configureWebpack: {
    devServer: {
      proxy: {
        '/api': {
          target: 'http://server:2941',
          pathRewrite: p => p + '&KEY=HOGE',
        },
      },
    },
  },
  pages: {
    index: {
      entry: 'src/main.ts',
      template: 'public/index.html',
      filename: 'app/index.html',
    },
    login: {
      entry: 'src/login.ts',
      template: 'public/index.html',
      filename: 'login.html',
    },
  },
};
