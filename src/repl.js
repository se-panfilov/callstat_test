import getSlides from './slider'
import getMedian from './median'

export default function repl (arr) {

  const slideSize = 3
  const slides = getSlides(arr, slideSize)

  const result = []
  slides.forEach(v => result.push(getMedian(v)))

  console.info(result)

  return result
}
