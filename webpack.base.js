const path = require('path');
const basePath = process.cwd();

module.exports = {
  entry: {
    index: `${basePath}/src/components/index.tsx`,
    "Hello/index": `${basePath}/src/components/Hello/Hello.tsx`,
    "Hello2/index": `${basePath}/src/components/Hello2/Hello2.tsx`,
    "Text/index": `${basePath}/src/components/Text/Text.tsx`,
  },

  output: {
    path: `${basePath}/core`,
    filename: "[name].js",
  },
  module: {
    rules: [
      // babel loader
      // {
      //   test: /.jsx?$/,
      //   loader: 'babel-loader',
      //   exclude: /node_modules/,
      //   query: {
      //     presets: ['es2015', 'react']
      //   }
      // },
      // TSLint loader
      {
        enforce: 'pre',
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'tslint-loader'
      },
      // TypeScript loader
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js', '.tsx'],
  }
};
