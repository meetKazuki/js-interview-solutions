/**
 * @description Given a phrase, substitute each character by shifting
 * it up or down the alphabet by a given integer. If necessary, the
 * shifting should wrap around back to the beginning or end of the alphabet
 *
 * @param {string} string
 * @param {number} number
 */
const caesarCipher = (string, number) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const input = string.toLowerCase();
  let output = "";

  for (let i = 0; i < input.length; i++) {
    const letter = input[i];
    if (alphabet.indexOf(letter) === -1) {
      output += letter;
    continue;
  }

  let index = alphabet.indexOf(letter) + number % 26;
  if (index > 25) index -= 26;
  if (index < 0) index += 26;

  output +=
    string[i] === string[i].toUpperCase()
      ? alphabet[index].toUpperCase()
      : alphabet[index];
  }
  return output;
};

mocha.setup("bdd");

const { assert } = chai;

describe('Caesar Cipher', () => {
  it('Should shift to the right', () => {
    assert.equal(caesarCipher('I love JavaScript!', 100), 'E hkra FwrwOynelp!');
  });

  it('Should shift to the left', () => {
    assert.equal(caesarCipher('I love JavaScript!', -100), 'M pszi NezeWgvmtx!');
  });
});

mocha.run();
