const fs = require('fs')

export default files = {
  readFile (path, cb, encoding = 'utf8') {
    return fs.readFile(path, encoding, cb)
  },
  writeFile (path, cb) {
    // TODO (S.Panfilov) implement
  }
}
