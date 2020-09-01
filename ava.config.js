export default {
  files: [ 'tests/*.test.ts' ],
  extensions: [ 'ts' ],
  require: [ './test-setup.js' ],
  verbose: true,
  babel: {
    compileEnhancements: false,
  },
};
