const path = require('path')

module.exports = {
  /* config options here */
  pageExtensions: ['jsx', 'js'],
  webpack(config) {
    config.resolve.alias.components = path.join(__dirname, 'components')

    return config
  },
}
