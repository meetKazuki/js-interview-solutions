/**
 * @description Given a phrase, capitalize every word.
 * 
 * @param {string} phrase
 */
const capitalize = phrase => {
  const words = [];
  for (let word of phrase.split(" "))
    words.push(word[0].toUpperCase() + word.slice(1));
  return words.join(" ");
};

const _capitalize = phrase => {
  let title = phrase[0].toUpperCase();
  for (let i = 1; i < phrase.length; i++)
    title += phrase[i - 1] === " " ? phrase[i].toUpperCase() : phrase[i];
  return title;
};

mocha.setup("bdd");

const { assert } = chai;

describe("Capitalization", () => {
  it("Should capitalize phrase", () => {
    assert.equal(capitalize("hello world"), "Hello World");
    assert.equal(_capitalize("hello world"), "Hello World");
  });
});

mocha.run();
