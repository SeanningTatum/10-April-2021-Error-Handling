/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: { url: '/', static: true },
    src: { url: '/dist' },
  },
  plugins: [
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-typescript',
    '@snowpack/plugin-postcss',
    // '@snowpack/web-test-runner-plugin',
    // If App doesn't build anymore uncomment webpack below
    // '@snowpack/plugin-webpack',
    // [
    //   '@snowpack/plugin-run-script',
    //   {
    //     cmd: 'eslint src --ext .js,jsx,.ts,.tsx',
    //   },
    // ],
  ],
  alias: {
    '~': './src',
  },
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    // If App doesn't build anymore comment everything below
    // bundle: true,
    // minify: true,
    // sourcemap: false,
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
};
