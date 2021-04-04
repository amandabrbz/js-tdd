import FizzBuzz from '../main/fizzbuzz'

describe('FizzBuzz tests', () => {
  describe('smoke test', () => {
    it('should exists', () => {
      expect(FizzBuzz).toBeTruthy()
    })
  })

  describe('unit test', () => {
    it('should return `Fizz` when passing a number its divided by 3 ', () => {
      expect(FizzBuzz(3)).toBe('Fizz')
    })

    it('should return `Buzz` when passing a number its divided by 5 ', () => {
      expect(FizzBuzz(5)).toBe('Buzz')
    })

    it('should return `FizzBuzz` when passing a number its divided by 3 and 5 ', () => {
      expect(FizzBuzz(15)).toBe('FizzBuzz')
    })

    it('should return the number when passing a number that its not devided by 3 or 5', () => {
      expect(FizzBuzz(2)).toBe(2)
    })

    it('should return a warning when is passed a string', ()=> {
      expect(FizzBuzz("oi")).toBe("Apenas números")
    })

    it('should return 0 when passed 0', ()=> {
      expect(FizzBuzz(0)).toBe(0)
    })
  })
})
