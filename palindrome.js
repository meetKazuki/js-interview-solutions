// adds reverse to all strings
String.prototype.reverse = function () {
  return Array.from(this).reverse().join("");
}

// defines a Phrase object
function Phrase(content) {
  this.content = content;

  // returns content processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.content.toLowerCase();
  }

  // return true for a palindrome, false otherwise
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  }

  /* // makes the phrase louder
  this.louder = function () {
    let processedContent = this.content.toUpperCase();
    return processedContent;
  } */
}

// defines a TranslatedPhrase object.
function TranslatedPhrase(content, translation) {
  this.content = content;
  this.translation = translation;

  // returns translation processed for palindrome testing
  this.processedContent = function processedContent() {
    return this.translation.toLowerCase();
  }
}

TranslatedPhrase.prototype = new Phrase();

/* Exercises
1. By filling in the code in Listing 65, add a louder method to the Phrase object that returns a LOUDER (all-caps) version of the content. Confirm in the REPL that the result appears as in Listing 66.

2. After filling in the code in Listing 72, both Phrase and TranslatedPhrase have explicit calls to the toLowerCase method. Eliminate this duplication by filling in Listing 74 to define an appropriate processor method that returns the lower-case version of the content. 

3.Exercises
Add a blank method to the String object prototype that returns true if the string is empty or consists solely of whitespace (spaces, tabs, or newlines). Hint: Use a regular expression (Section 4.3.2). You will need the regex syntax for the start and end of a string (Figure 64). 
Using whichever method you prefer (direct indexing or slicing), add a last method to the Array object prototype that returns the last element of an array. Hint: Refer to Section 3.3. */