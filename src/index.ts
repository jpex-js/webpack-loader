/* eslint-disable no-invalid-this */
import { loader } from 'webpack';
import { getOptions } from 'loader-utils';
import { transform } from '@babel/core';
const jpexWebpackLoader: loader.Loader = function jpexWebLoader(input: string, inputSourceMap) {
  const callback = this.async();
  const filename = this.resourcePath;
  const options = getOptions(this);

  transform(input, {
    filename,
    inputSourceMap,
    sourceFileName: filename,
    sourceMaps: this.sourceMap,
    babelrc: false,
    configFile: false,
    plugins: [
      '@babel/plugin-syntax-typescript',
      [
        '@jpex/babel-plugin',
        options,
      ],
    ],
  }, (err, result) => {
    if (err) {
      return callback(err);
    }
    const {
      code: output,
      map,
    } = result;
    return callback(void 0, output, map as any);
  });
};

export default jpexWebpackLoader;
