export default function getSlides (arr, size = 3) {
  if (!arr || arr.length === 0) return []

  const resArr = []

  arr.forEach((v, i) => {
    let from = i
    let to = from + size
    resArr.push(arr.slice(from, to))
  })

  if (arr.length > 2) resArr.unshift(arr.slice(0, 2))
  if (arr.length > 1) resArr.unshift(arr.slice(0, 1))

  console.info(resArr)
  return resArr

}
