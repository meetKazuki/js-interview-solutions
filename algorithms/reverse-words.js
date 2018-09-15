// Given a phrase, reverse the order of the characters of each word
const reverseWords = string => {
  const wordsReversed = [];
  string.split(" ").forEach(word => {
    let wordReversed = "";
    for (let i = word.length - 1; i >= 0; i--)
      wordReversed += word[i];
    wordsReversed.push(wordReversed);
  });
  return wordsReversed.join(" ");
};

mocha.setup("bdd");
const { assert } = chai;
describe("Reverse Words", () => {
  it("Should reverse words", () => {
    assert.equal(reverseWords("I love JavaScript!"), "I evol !tpircSavaJ");
  });
});

mocha.run();