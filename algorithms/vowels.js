/**
 * @description Given a string of words or phrases, count the number of vowels
 *
 * @param {string} string
 */
const vowels = string => {
  let count = 0;
  const choices = 'aeiou'; // or ['a', 'e', 'i', 'o', 'u']

  for (let character of string.toLowerCase())
    if (choices.includes(character)) count++;

  return count;
};

const _vowels = string => {
  matches = string.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
};

mocha.setup('bdd');

const { assert } = chai;

describe('Vowels', () => {
  it('Should count vowels', () => {
    assert.equal(vowels('hello world'), 3);
    assert.equal(_vowels('hello world'), 3);
  });
});

mocha.run();
