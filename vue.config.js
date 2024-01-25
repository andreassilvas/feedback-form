// module.exports = {
//   configureWebpack: {
//     resolve: {
//       alias: {
//         '@': require('path').resolve(__dirname, 'src'),
//       },
//     },
//     devServer: {
//       historyApiFallback: true,
//     },
//   },
// };

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': require('path').resolve(__dirname, 'src'),
      },
    },
    devServer: {
      historyApiFallback: true,
    },
  },
  chainWebpack: (config) => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap((options) => {
        // Enable CSS modules
        options.cssModules = {
          localIdentName: '[name]_[hash:base64:8]',
        };
        return options;
      });
  },
};

