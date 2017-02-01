import { expect } from 'chai'
import getMedian from '../../src/median'

describe('Median:', () => {

  it('should return -1', () => {
    const sliding = [100]

    const result = getMedian(sliding)

    expect(result).to.be.equal(-1)
  })

  it('should be a number', () => {
    const sliding1 = [100]
    const sliding2 = [100, 102]
    const sliding3 = [100, 102, 101]

    const result1 = getMedian(sliding1)
    const result2 = getMedian(sliding2)
    const result3 = getMedian(sliding3)

    expect(result1).to.be.a('number')
    expect(result2).to.be.a('number')
    expect(result3).to.be.a('number')
  })

  it('should throw exception on non-array', () => {
    const sliding1 = 100
    const sliding2 = '100'
    const sliding3 = { a: 100, b: 102, c: 101 }

    const expectedMessage = 'getMedian: argument must be an array'

    expect(() => getMedian(sliding1)).to.throw(expectedMessage)
    expect(() => getMedian(sliding2)).to.throw(expectedMessage)
    expect(() => getMedian(sliding3)).to.throw(expectedMessage)
  })

  it('should throw exception with non-integer array', () => {
    const sliding1 = [100, '102', 101]
    const sliding2 = ['asd', 'dsad23', '']
    const sliding3 = [{}, [], Number]

    const expectedMessage = 'getMedian: array may contain integer numbers only'

    expect(() => getMedian(sliding1)).to.throw(expectedMessage)
    expect(() => getMedian(sliding2)).to.throw(expectedMessage)
    expect(() => getMedian(sliding3)).to.throw(expectedMessage)
  })

  it('can handle 2 values in window', () => {
    const sliding = [100, 102]

    const result = getMedian(sliding)

    expect(result).to.be.equal(101)
  })

  it('can handle 3 values', () => {
    const sliding = [110, 120, 115]

    const result = getMedian(sliding)

    expect(result).to.be.equal(115)
  })

  it('should throw exception on >3 values', () => {
    const sliding1 = [110, 120, 115, 123]
    const sliding2 = [110, 120, 115, 123, 443]

    const expectedMessage = 'getMedian: array can\'t contain more than 3 items'

    expect(() => getMedian(sliding1)).to.throw(expectedMessage)
    expect(() => getMedian(sliding2)).to.throw(expectedMessage)
  })

  it('should throw exception on float values', () => {
    const sliding1 = [110.0, 112.4, 233.7]

    const expectedMessage = 'getMedian: array may contain integer numbers only'

    expect(() => getMedian(sliding1)).to.throw(expectedMessage)
  })

  it('should throw exception on empty array', () => {
    const sliding1 = []

    const expectedMessage = 'getMedian: array is empty'

    expect(() => getMedian(sliding1)).to.throw(expectedMessage)
  })

  it('can work properly in a chain', () => {
    const sliding1 = [100]
    const sliding2 = [100, 102]
    const sliding3 = [100, 102, 101]
    const sliding4 = [102, 101, 110]
    const sliding5 = [101, 110, 120]
    const sliding6 = [110, 120, 115]

    const result1 = getMedian(sliding1)
    const result2 = getMedian(sliding2)
    const result3 = getMedian(sliding3)
    const result4 = getMedian(sliding4)
    const result5 = getMedian(sliding5)
    const result6 = getMedian(sliding6)

    expect(result1).to.be.equal(-1)
    expect(result2).to.be.equal(101)
    expect(result3).to.be.equal(101)
    expect(result4).to.be.equal(102)
    expect(result5).to.be.equal(110)
    expect(result6).to.be.equal(115)
  })
})
