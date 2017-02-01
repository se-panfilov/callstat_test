const files = require('./files')
const makeMedianArr = require('./core')

function repl () {
  if (process.argv.length < 3) {
    console.log('Usage: node ' + process.argv[1] + ' FILENAME')
    process.exit(1)
  }

  const input = process.argv[2]
  const output = './output'

  files.readFile(input, (err, contents) => {
    if (err) throw 'REPL: can\'t read file'
    const arr = makeMedianArr(contents)
    files.writeFile(output, arr, () => onWriteDone(output))
  })

}

// function onReady (err, contents) {
//   core()
// }

function onWriteDone (path) {
  console.log(`Done: ${path}`)
}

module.exports = repl()
