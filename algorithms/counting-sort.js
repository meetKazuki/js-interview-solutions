const countingSort = (array, max) => {
  const counts = new Array(max + 1);
  counts.fill(0);
  array.forEach(value => counts[value]++);
  const result = [];
  let resultIndex = 0;
  counts.forEach((count, index) => {
    for (let i = 0; i < count; i++) {
      result[resultIndex] = index; resultIndex++;
    }
  });
  return result;
};

mocha.setup("bdd");
const { assert } = chai;
describe("Counting Sort", () => {
  it("Should implement counting sort", () => {
    assert.deepEqual(countingSort([4, 3, 2, 1, 0], 4), [0, 1, 2, 3, 4]); assert.deepEqual(countingSort([4, 3, 1, 2, 3], 4), [1, 2, 3, 3, 4]);
  });
});
mocha.run();