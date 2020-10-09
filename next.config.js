/* eslint-disable */
const path = require('path')
const Dotenv = require('dotenv-webpack')
require('dotenv').config()

module.exports = {
  /* config options here */
  pageExtensions: ['jsx', 'js'],
  webpack(config, options) {
    config.resolve.alias.components = path.join(__dirname, 'components')
    config.resolve.alias.static = path.join(__dirname, 'static')

    // Add the new plugin to the existing webpack plugins
    config.plugins = [
      ...config.plugins,

      // Read the .env file
      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true,
      }),
    ]

    return config
  },
}
