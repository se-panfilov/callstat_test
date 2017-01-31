import { expect } from 'chai'
import getSlides from '../../src/slider'

describe('Slider:', () => {

  it('should return an array', () => {
    const arr = []

    const result1 = getSlides(arr)
    const result2 = getSlides()

    expect(result1).to.be.an('array')
    expect(result2).to.be.an('array')
  })

  it('should return [] when empty arr as args passed', () => {
    const arr = []

    const result = getSlides(arr)

    expect(result).to.have.length(0)
  })

  it('should accept arrays with less than 3 items', () => {
    const arr1 = [1]
    const arr2 = [1, 2]

    const expectedArr1 = [
      [1]
    ]
    const expectedArr2 = [
      [1],
      [1, 2],
      [2]
    ]

    const result1 = getSlides(arr1)
    const result2 = getSlides(arr2)

    expect(result1).to.have.length(expectedArr1.length)
    expect(result1[0]).to.equal(expectedArr1[0])

    expect(result2).to.have.length(expectedArr2.length)
    expect(result2[0]).to.equal(expectedArr2[0])
    expect(result2[1]).to.equal(expectedArr2[1])
    expect(result2[1]).to.equal(expectedArr2[2])
  })

  it('basic usage', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    const expectedArr = [
      [1],
      [1, 2],
      [1, 2, 3],
      [2, 3, 4],
      [3, 4, 5],
      [4, 5, 6],
      [5, 6, 7],
      [6, 7, 8],
      [7, 8, 9],
      [8, 9, 10],
      [9, 10],
      [10]
    ]

    const result = getSlides(arr)

    expect(result).to.have.length(expectedArr.length)
    expect(result[0]).to.equal(expectedArr[0])
    expect(result[1]).to.equal(expectedArr[1])
    expect(result[2]).to.equal(expectedArr[2])
    expect(result[3]).to.equal(expectedArr[3])
    expect(result[4]).to.equal(expectedArr[4])
    expect(result[5]).to.equal(expectedArr[5])
    expect(result[6]).to.equal(expectedArr[6])
    expect(result[7]).to.equal(expectedArr[7])
    expect(result[8]).to.equal(expectedArr[8])
    expect(result[9]).to.equal(expectedArr[9])
    expect(result[10]).to.equal(expectedArr[10])
    expect(result[11]).to.equal(expectedArr[11])
  })
})
