function fizzBuzz(num) {
  if (num % 5 === 0) {
    return "buzz";
  }
  if (num % 15 === 0) {
    return "fizzbuzz";
  }

  return "fizz";
}

export { fizzBuzz };
