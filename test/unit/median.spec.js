import median from '../../src/median'

describe('Median:', () => {

  describe('Add Contact:', () => {

    // beforeEach(() => {
    // })
    //
    // afterEach(() => {
    // })


    it('should return -1', () => {
      const sliding = [100]

      const result = median.getMediane(sliding)

      expect(result).to.be.equal(-1)
    })

    it('should be a number', () => {
      const sliding1 = [100]
      const sliding2 = [100, 102]
      const sliding3 = [100, 102, 101]

      const result1 = median.getMediane(sliding1)
      const result2 = median.getMediane(sliding2)
      const result3 = median.getMediane(sliding3)

      expect(result1).to.be.a('number')
      expect(result2).to.be.a('number')
      expect(result3).to.be.a('number')
    })

    it('should not work with non-array', () => {
      const sliding1 = 100
      const sliding2 = '100'
      const sliding3 = { a: 100, b: 102, c: 101 }

      expect(median.getMediane(sliding1)).to.throw('QQQQQQQ')
      expect(median.getMediane(sliding2)).to.throw('QQQQQQQ')
      expect(median.getMediane(sliding3)).to.throw('QQQQQQQ')
    })

    it('should not handle non-integer array', () => {
      const sliding1 = [100, '102', 101]
      const sliding2 = ['asd', 'dsad', 'asd']
      const sliding3 = [{}, [], Number]

      expect(median.getMediane(sliding1)).to.throw('WWWWWWW')
      expect(median.getMediane(sliding2)).to.throw('WWWWWWW')
      expect(median.getMediane(sliding3)).to.throw('WWWWWWW')
    })

    it('can handle 2 values in window', () => {
      const sliding = [100, 102]

      const result = median.getMediane(sliding)

      expect(result).to.be.equal(101)
    })

    it('can handle 3 values in window', () => {
      const sliding = [110, 120, 115]

      const result = median.getMediane(sliding)

      expect(result).to.be.equal(115)
    })

    it('can\'t handle >3 values in window', () => {
      const sliding1 = [110, 120, 115, 123]
      const sliding2 = [110, 120, 115, 123, 443]

      expect(median.getMediane(sliding1)).to.throw('EEEEEEE')
      expect(median.getMediane(sliding2)).to.throw('EEEEEEE')
    })

    it('can work properly in a chain', () => {
      const sliding1 = [100]
      const sliding2 = [100, 102]
      const sliding3 = [100, 102, 101]
      const sliding4 = [102, 101, 110]
      const sliding5 = [101, 110, 120]
      const sliding6 = [110, 120, 115]

      const result1 = median.getMediane(sliding1)
      const result2 = median.getMediane(sliding2)
      const result3 = median.getMediane(sliding3)
      const result4 = median.getMediane(sliding4)
      const result5 = median.getMediane(sliding5)
      const result6 = median.getMediane(sliding6)

      expect(result1).to.be.equal(-1)
      expect(result2).to.be.equal(101)
      expect(result3).to.be.equal(101)
      expect(result4).to.be.equal(102)
      expect(result5).to.be.equal(110)
      expect(result6).to.be.equal(115)
    })

  })
})
