const getSlides = require('./slider')
const getMedian = require('./median')

module.exports = function makeMedianArr (content) {
  const slideSize = 3
  const arr = makeArr(content)
  const slides = getSlides(arr, slideSize)
  const result = []

  slides.forEach(v => result.push(getMedian(v)))

  return result
}

function makeArr (string) {
  console.info()
  return string.split('\n\n').map(v => +v)
}
