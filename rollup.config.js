const { terser } = require('rollup-plugin-terser');
const commonjs = require('@rollup/plugin-commonjs');

module.exports = {
  input: './src/js/index.js',
  output: {
    dir: './dist',
    format: 'esm',
  },
  plugins: [
    commonjs(),
    terser(),
  ]
}
