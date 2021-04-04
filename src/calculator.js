module.exports = {
  sum: (a, b) => {
    return a + b
  },
  subtraction: (a, b) => {
    return a - b
  },
  multiply: (a, b) => {
    return a * b
  },
  division: (a, b) => {
    return (b === 0 || (typeof b === String)) ? "Não é possível!" : a / b
  }
}
