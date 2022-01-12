// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

process.env.SNOWPACK_PUBLIC_APP_VERSION = '2022.01.12';

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    src: "/"
  },
  plugins: [
    '@snowpack/plugin-typescript'
  ],
  packageOptions: {
    source: 'remote',
    types: true,
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    sourcemap: true
  },
};
