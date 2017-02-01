const fs = require('fs')

module.exports = {
  readFile (path, cb, encoding = 'utf8') {
    return fs.readFile(path, encoding, cb)
  },
  writeFile (path, string, cb) {
    fs.writeFile(path, string, err => {
      if (err) throw err
      if (cb) cb()
    })
  }
}
