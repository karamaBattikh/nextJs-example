/* eslint-disable */
require('dotenv').config();
const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  /* config here */
  distDir: '../.next',
  pageExtensions: ['jsx', 'js'],
  webpack(config, options) {
    config.resolve.alias.components = path.join(__dirname, 'components');
    config.resolve.alias.static = path.join(__dirname, 'static');
    config.resolve.alias.screens = path.join(__dirname, 'screens');
    config.resolve.alias.shared = path.join(__dirname, 'shared');
    
    // // Add the new plugin to the existing webpack plugins
    // config.plugins = [
      //   ...config.plugins,
      
      //   // Read the .env file
      //   new Dotenv({
        //     path: path.join(__dirname, '.env'),
        //     systemvars: true,
        //   }),
        // ]
       
    return config
  },
};
