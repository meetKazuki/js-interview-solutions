// factorial function - imperative
const factorial = number => {
  let product = 1;
  for (let i = 2; i <= number; i++) {
    product *= i;
  }
  return product;
};

// factorial function - imperative
const factorial = number => {
  return number < 2 ? 1 : number * factorial(number - 1);
};