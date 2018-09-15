let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

// returns a url-friendly version of a string.
function urlify(string) {
  return string.toLowerCase().split(/\s+/).join("-");
}

// urls: imperative version
/* function imperativeUrls(elements) {
  let urls = [];
  elements.forEach(element => {
    urls.push(urlify(element));
  });
  return urls;
}
console.log(imperativeUrls(states)); */

// urls: Functional version
function functionalUrls(elements) {
  return elements.map(element => urlify(element));
}
console.log(functionalUrls(states));

/* --------- Exercise ------------ */
/* using map, write a function that takes in the states variable and returns
an array of URLs of the form https://example.com/<urlified form>. */