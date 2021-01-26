const path = require('path')
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        includePaths: [path.join(__dirname, 'styles')]
        // includePaths: [path.join(__dirname, 'src')]
      },
    }
  },
}
