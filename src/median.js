function getForEven (arr, index) {
  return (arr[index] + arr[index - 1]) / 2
}

function getForOdd (arr, index) {
  return arr[index]
}

function getValue (isEven, arr, index) {
  return (isEven ? getForEven : getForOdd)(arr, index)
}

function isInteger (num) {
  if (!num) throw new Error('isInteger: value undefined')
  return num.toString().indexOf('.') === -1
}

module.exports = function getMedian (arr) {
  if (!Array.isArray(arr)) throw new Error('getMedian: argument must be an array')
  if (!arr.every(v => Number.isFinite(v) && isInteger(v))) throw new Error('getMedian: array may contain integer numbers only')
  if (arr.length === 0) throw new Error('getMedian: array is empty')
  if (arr.length > 3) throw new Error('getMedian: array can\'t contain more than 3 items')

  if (arr.length === 1) return -1

  const sortedArr = arr.sort((a, b) => a - b)
  const isEven = arr.length % 2 === 0
  const middle = Math.floor(arr.length / 2)

  return getValue(isEven, sortedArr, middle)
}
