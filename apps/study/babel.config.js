const styleXPlugin = require('@stylexjs/babel-plugin');

module.exports = {
  presets: ['@babel/preset-typescript'],
  plugins: [
    '@babel/plugin-syntax-jsx',
    [
      styleXPlugin,
      {
        dev: false,
        runtimeInjection: true,
        devReadableCss: true,
        // Set this to true for snapshot testing
        // default: false
        test: false,
        // Required for CSS variable support
        unstable_moduleResolution: {
          // type: 'commonJS' | 'haste'
          // default: 'commonJS'
          type: 'commonJS',
          // The absolute path to the root directory of your project
          rootDir: __dirname,
        },

        classNamePrefix: 'x_',
      },
    ],
  ],
};
