function getSlideBody (arr, size) {
  const result = []
  arr.forEach((v, i) => {
    let from = i
    let to = from + size
    result.push(arr.slice(from, to))
  })

  return result
}

function getSlideTail (arr, size) {
  const result = []
  for (let i = size; i > 1; i--) {
    if (arr.length > i - 1) result.unshift(arr.slice(0, i - 1))
  }

  return result
}

module.exports = function getSlides (arr, size = 3) {
  if (!arr || arr.length === 0) return []

  const bodyArr = getSlideBody(arr, size)
  const tailArr = getSlideTail(arr, size)

  return tailArr.concat(bodyArr)
}
