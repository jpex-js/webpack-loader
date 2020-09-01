const babel = require('@babel/register');

// babel({
//   extensions: [ '.js', '.ts' ],
// });
babel({
  extensions: [ '.js', '.ts' ],
  presets: [
    '@babel/preset-typescript',
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
        modules: 'commonjs',
        useBuiltIns: false,
        loose: true,
      },
    ],
  ],
});
