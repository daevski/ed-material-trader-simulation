// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

process.env.SNOWPACK_PUBLIC_APP_VERSION = '2022.01.08';

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    src: "/"
  },
  plugins: [
    /* ... */
  ],
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    sourcemap: true
  },
};
