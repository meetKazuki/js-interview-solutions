/**
 * @description Implement a function that returns the fibonacci number
 * at a given index.
 */
const fibonacci = element => {
  if (element < 0)
    throw new Error("Index cannot be negative");
  return element < 3 ? 1 : fibonacci(element - 1) + fibonacci(element - 2);
};

const _fibonacci = element => {
  const series = [1, 1];

  for (let i = 2; i < element; i++) {
    const a = series[i - 1];
    const b = series[i - 2];
    series.push(a + b);
  }
  return series[element - 1];
};

mocha.setup("bdd");

const { assert } = chai;

describe("Fibonacci", () => {
  it("Should implement fibonacci", () => {
    assert.equal(fibonacci(1), 1);
    assert.equal(fibonacci(2), 1);
    assert.equal(fibonacci(3), 2);
    assert.equal(fibonacci(6), 8);
    assert.equal(fibonacci(10), 55);
    assert.equal(_fibonacci(1), 1);
    assert.equal(_fibonacci(2), 1);
    assert.equal(_fibonacci(3), 2);
    assert.equal(_fibonacci(10), 55);
  });
});

mocha.run();
