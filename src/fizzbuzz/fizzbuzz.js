const FizzBuzz = (number) => {
  if (number % 3 === 0 && number % 5 === 0) {
    return 'FizzBuzz'
  } else if (number % 3 === 0) {
    return 'Fizz'
  } else if (number % 5 === 0) {
    return 'Buzz'
  } else if (typeof number === 'string') {
    return "Apenas números"
  } else {
    return number
  }
}

export default FizzBuzz
