const fs = require('fs')

module.exports = {
  readFile (path, cb, encoding = 'utf8') {
    return fs.readFile(path, encoding, cb)
  },
  writeFile (path, data, cb) {
    // TODO (S.Panfilov) implement
  }
}
