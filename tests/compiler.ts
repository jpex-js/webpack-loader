import path from 'path';
import webpack from 'webpack';
import { createFsFromVolume, Volume } from 'memfs';

// eslint-disable-next-line no-underscore-dangle
declare const __dirname: string;

export default (fixture, options = {}) => {
  const compiler = webpack({
    context: __dirname,
    entry: `./${fixture}`,
    output: {
      path: path.resolve(__dirname),
      filename: 'bundle.js',
    },
    resolve: {
      extensions: [ '.ts', '.js' ],
    },
    module: {
      rules: [{
        test: /\.ts$/,
        use: [
          {
            loader: 'awesome-typescript-loader',
            options: {

            },
          },
          {
            loader: path.resolve(__dirname, '../dist/index.js'),
            options,
          },
        ],
      }],
    },
    externals: [ 'jpex', 'some-lib' ],
  });

  // @ts-ignore
  compiler.outputFileSystem = createFsFromVolume(new Volume());
  compiler.outputFileSystem.join = path.join.bind(path);

  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      if (err) {
        return reject(err);
      }
      if (stats.hasErrors()) {
        return reject(new Error(stats.toJson().errors[0]));
      }

      resolve(stats);
    });
  });
};
