const reverseArray = array => {
  for (let i = 0; i < array.length / 2; i++) {
    const temp = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = temp;
  }
  return array;
};

const _reverseArray = array => {
  for (let i = 0; i < array.length / 2; i++) {
    [array[i], array[array.length - 1 - i]] = [array[array.length - 1 - i], array[i]];
  }
  return array;
};

mocha.setup("bdd");
const { assert } = chai;
describe("Reverse Arrays", () => {
  it("Should reverse arrays", () => {
    assert.deepEqual(reverseArray([1, 2, 3, 4]), [4, 3, 2, 1]); assert.deepEqual(reverseArray([1, 2, 3, 4, 5]), [5, 4, 3, 2, 1]); assert.deepEqual(_reverseArray([1, 2, 3, 4, 5]), [5, 4, 3, 2, 1]);
  });
});

mocha.run();