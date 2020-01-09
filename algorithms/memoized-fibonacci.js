/**
 * Implement a performant recursive function for the fibonacci series.
 */
const fibonacci = (element, cache = []) => {
  if (cache[element]) return cache[element];
  else {
    if (element < 3) return 1;
    else
      cache[element] =
        fibonacci(element - 1, cache) + fibonacci(element - 2, cache);
  }

  return cache[element];
};

const _memoize = fn => {
  const cache = {};

  return (...args) => {
    if (cache[args])
      return cache[args];

    const output = fn.apply(this, args);
    cache[args] = output;

    return output;
  };
};

const _fibonacci = element =>
  element < 2
    ? element
    : _memoizedFibonacci(element - 1) + _memoizedFibonacci(element - 2);

const _memoizedFibonacci = _memoize(_fibonacci);

mocha.setup("bdd");

const { assert } = chai;

describe("Memoized Fibonacci", () => {
  it("Should implement memoized fibonacci", () => {
    assert.equal(fibonacci(6), 8);
    assert.equal(fibonacci(10), 55);
    assert.equal(_memoized_fibonacci(10), 55);
  });
});

mocha.run();
