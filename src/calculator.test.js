import { sum, division, multiply, subtraction } from './calculator'

describe('calculator', () => {
  //smoke test => verificação de métodos
  describe('smoke tests', () => {
    it('should exists the method sum', () => {
      expect(sum).toBeTruthy()
      expect(sum).toBeInstanceOf(Function)
    })

    it('should exists the method subtraction', () => {
      expect(subtraction).toBeTruthy()
      expect(subtraction).toBeInstanceOf(Function)
    })

    it('should exists the method division', () => {
      expect(division).toBeTruthy()
      expect(division).toBeInstanceOf(Function)
    })

    it('should exists the method multiply', () => {
      expect(multiply).toBeTruthy()
      expect(multiply).toBeInstanceOf(Function)
    })

    it('should exists the method sum', () => {
      expect(sum).toBeTruthy()
      expect(sum).toBeInstanceOf(Function)
    })
  })

  //teste unitário
  describe('unit test', () => {
    describe('sum', () => {
      it('should return 4 when sum is called passing 2, 2', () => {
        expect(sum(2, 2)).toBe(4)
      })
      it('should return -8 when sum is called passing -10, 2', () => {
        expect(sum(-10, 2)).toBe(-8)
      })
    })

    describe('subtraction', () => {
      it('sould return 0 when subtraction is called passing 2, 2', () => {
        expect(subtraction(2, 2)).toBe(0)
      })
      it('sould return 0 when subtraction is called passing -2, 2', () => {
        expect(subtraction(-2, 2)).toBe(-4)
      })
    })

    describe('division', () => {
      it('should return 2 when division is called passing 4, 2', () => {
        expect(division(4, 2)).toBe(2)
      })
      it('should return a warning when the second number is zero', () => {
        expect(division(4, 0)).toBe('Não é possível!')
      })
    })

    describe('multiply', () => {
      it('should return 4 whe multiply is called passing 2, 2', () => {
        expect(multiply(2, 2)).toBe(4)
      })
    })
  })
})
