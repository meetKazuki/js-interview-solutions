let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

// sum: imperative solution
/* function imperativeSum(elements) {
  let total = 0;
  elements.forEach(function(n) {
    total += n;
  });
  return total;
}
console.log(imperativeSum(numbers)); */

// sum: functional solution
/* function functionalSum(elements) {
  return elements.reduce((total, n) => {
    return total += n;
  });
}
console.log(functionalSum(numbers)); */

// lengths: imperative solution
/* function imperativeLengths(elements) {
  let lengths = {};
  elements.forEach(function(element) {
    lengths[element] = element.length;
  });
  return lengths;
}
console.log(imperativeLengths(states)); */

// lengths: functional solution
function functionalLengths(elements) {
  return elements.reduce((lengths, element) => {
    lengths[element] = element.length;
    return lengths;
  }, {});
}
console.log(functionalLengths(states));

/* Exercises
Using reduce, write a function that returns the product of all the elements in an array. Hint: Where += adds, *= multiplies. 
Remove the newlines in the reduce solution from Listing 62 to turn it into a single long line. Does it still give the right answer? How long is the resulting line of code? */