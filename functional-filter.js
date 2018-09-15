let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

// returns a url-friendly version of a string.
function urlify(string) {
  return string.toLowerCase().split(/\s+/).join("-");
}

// singles: imperative version
/* function imperativeSingles(elements) {
  let singles = [];
  elements.forEach(element => {
    if (element.split(/\s+/).length === 1) {
      singles.push(element);
    }
  });
  return singles;
}
console.log(imperativeSingles(states)); */

// singles: functional version
function functionalSingles(elements) {
  return elements.filter(element => element.split(/\s+/).length === 1);
}
console.log(functionalSingles(states));

/* Exercises
Write two filter functions that return the Dakotas: one using String#includes (Section 2.5) to test for the presence of the string “Dakota” and one using a regex that tests for the length of the split array being 2. */