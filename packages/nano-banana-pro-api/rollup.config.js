const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const typescript = require('@rollup/plugin-typescript');
const terser = require('@rollup/plugin-terser');

const packageJson = require('./package.json');

module.exports = {
  input: 'src/index.ts',
  output: [
    { file: packageJson.main, format: 'cjs', sourcemap: true, exports: 'named' },
    { file: packageJson.module, format: 'esm', sourcemap: true, exports: 'named' }
  ],
  plugins: [resolve(), commonjs(), typescript({ tsconfig: './tsconfig.json' }), terser()]
};
