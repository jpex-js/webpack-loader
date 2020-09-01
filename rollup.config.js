import babel from 'rollup-plugin-babel';
import localResolve from 'rollup-plugin-node-resolve';
import { dependencies } from './package.json';

const external = Object.keys(dependencies);

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/index.js',
    format: 'es',
    exports: 'default',
  },
  plugins: [
    localResolve({
      extensions: [ '.js', '.ts' ],
    }),
    babel({
      exclude: 'node_modules/**',
      extensions: [ '.js', '.ts' ],
    }),
  ],
  external,
};
