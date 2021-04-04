const calculator = require('./calculator')

describe('calculator', () => {
  //smoke test => verificação de métodos
  describe('smoke tests', () => {
    it('should exists a calculator', () => {
      expect(calculator).toBeTruthy()
    })

    it('should exists the method sum', () => {
      expect(calculator.sum).toBeTruthy()
      expect(calculator.sum).toBeInstanceOf(Function)
    })

    it('should exists the method subtraction', () => {
      expect(calculator.subtraction).toBeTruthy()
      expect(calculator.subtraction).toBeInstanceOf(Function)
    })

    it('should exists the method division', () => {
      expect(calculator.division).toBeTruthy()
      expect(calculator.division).toBeInstanceOf(Function)
    })

    it('should exists the method multiply', () => {
      expect(calculator.multiply).toBeTruthy()
      expect(calculator.multiply).toBeInstanceOf(Function)
    })

    it('should exists the method sum', () => {
      expect(calculator.sum).toBeTruthy()
      expect(calculator.sum).toBeInstanceOf(Function)
    })
  })

  //teste unitário
  describe('unit test', () => {
    describe('sum', () => {
      it('should return 4 when sum is called passing 2, 2', () => {
        expect(calculator.sum(2, 2)).toBe(4)
      })
      it('should return -8 when sum is called passing -10, 2', () => {
        expect(calculator.sum(-10, 2)).toBe(-8)
      })
    })

    describe('subtraction', () => {
      it('sould return 0 when subtraction is called passing 2, 2', () => {
        expect(calculator.subtraction(2, 2)).toBe(0)
      })
      it('sould return 0 when subtraction is called passing -2, 2', () => {
        expect(calculator.subtraction(-2, 2)).toBe(-4)
      })
    })

    describe('division', () => {
      it('should return 2 when division is called passing 4, 2', () => {
        expect(calculator.division(4, 2)).toBe(2)
      })
      it('should return a warning when the second number is zero', () => {
        expect(calculator.division(4, 0)).toBe("Não é possível!")
      })
    })

    describe('multiply', () => {
      it('should return 4 whe multiply is called passing 2, 2', () => {
        expect(calculator.multiply(2, 2)).toBe(4)
      })
    })
  })
})
