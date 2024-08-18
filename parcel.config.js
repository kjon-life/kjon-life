const path = require('path');

module.exports = {
  entryPoints: ['src/scss/index.scss'],
  transformers: {
    scss: ['@parcel/transformer-sass'],
  },
  bundleNodeModules: true,
  minify: true,
  sourceMaps: true,
  cache: true,
  cacheDir: '.parcel-cache',
  outDir: 'public/css',
  publicUrl: '/css',
  watch: process.env.NODE_ENV !== 'production',
  hmrOptions: {
    port: 8081,
  },
  autoInstall: true,
};