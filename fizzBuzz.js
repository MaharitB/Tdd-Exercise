function fizzBuzz(num) {
  let result = "";

  if (num % 3 === 0) result += "fizz";
  if (num % 5 === 0) result += "buzz";

  return result || num.toString();
}

export { fizzBuzz };
