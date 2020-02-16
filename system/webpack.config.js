const path = require('path');
const fs = require('fs');

var nodeModules = {};

fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

module.exports = {
  entry: {
    main: ['./src/index.ts'],
    common: ['./node_modules/@grow/common/src/lib/index.ts']
  },
  target: 'node',
  mode: 'production',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'bundle/'),
  },
  externals: nodeModules,
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        loader: 'awesome-typescript-loader',
      }
    ]
  },
  node: {
    fs: 'empty',
    __dirname: true
  }
};
