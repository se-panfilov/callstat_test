import getSlides from './slider'
import getMedian from './median'

export default function repl (content) {
  const slideSize = 3
  const arr = makeArr(content)
  const slides = getSlides(arr, slideSize)
  const result = []

  slides.forEach(v => result.push(getMedian(v)))

  return result
}

function makeArr (string) {
  return string.split('\n\n')
}
