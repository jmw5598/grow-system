import webpack from 'webpack';
import path from 'path';
import fs from 'fs';

const nodeModules: { [key: string]: any } = {};

fs.readdirSync('node_modules')
  .filter((x: string) => ['.bin'].indexOf(x) === -1)
  .forEach((mod: string) => (nodeModules[mod] = 'commonjs ' + mod));

const config: webpack.Configuration = {
  entry: {
    main: ['./src/index.ts'],
    common: ['./node_modules/@grow/common/src/lib/index.ts'],
  },
  target: 'node',
  mode: 'production',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'bundle/'),
  },
  externals: nodeModules,
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        loader: 'awesome-typescript-loader',
      },
    ],
  },
  node: {
    fs: 'empty',
    __dirname: true,
  },
};

export default config;
