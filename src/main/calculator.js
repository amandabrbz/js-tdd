const sum = (a, b) => a + b
const subtraction = (a, b) => a - b
const division = (a, b) =>
  b === 0 || typeof b === String ? 'Não é possível!' : a / b
const multiply = (a, b) => a * b

export { sum, subtraction, division, multiply }
