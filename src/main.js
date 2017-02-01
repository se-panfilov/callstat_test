import files from './files'
import repl from './repl'

export default function main () {
  const path = '' // TODO (S.Panfilov) from console
  files.readFile(path, onReady)
}

function onReady (err, contents) {
  repl()
}
