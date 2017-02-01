const files = require('./files')
const makeMedianArr = require('./core')

function main () {
  if (process.argv.length < 3) {
    console.log('Usage: node ' + process.argv[1] + ' FILENAME')
    process.exit(1)
  }

  const input = process.argv[2]
  const output = `${process.cwd()}/output/output.txt`

  files.readFile(input, (err, contents) => {
    if (err) throw err

    const arr = makeMedianArr(contents)
    files.writeFile(output, arr, () => console.log(`Done: ${output}`))
  })
}

module.exports = main()
